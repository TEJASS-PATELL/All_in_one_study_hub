import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "http://localhost:4001";
axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
  authUser: null,
  isLoading: true,
  isUpdatingProfile: false,

  setAuthUser: (userData) => set({ authUser: userData, isLoading: false }),
  
  logout: async () => {
    try {
      set({ isLoading: true });
      await axios.get("/api/auth/logout");
      set({ authUser: null, isLoading: false });
      toast.success("Logged out successfully");
    } catch (err) {
      console.error("Logout error:", err);
      toast.error("Logout failed");
      set({ isLoading: false });
    }
  },

  fetchUser: async () => {
    try {
      set({ isLoading: true });
      const res = await axios.get("/api/auth/getuser");

      const user = res.data;
      if (user?.id || user?.email) {
        set({ authUser: user, isLoading: false });
      } else {
        set({ authUser: null, isLoading: false });
      }
    } catch (err) {
      console.error("Fetch user error:", err?.response?.data || err.message);
      set({ authUser: null, isLoading: false });
    }
  },

  login: async ({ email, password }, navigate) => {
    try {
      set({ isLoading: true });

      const res = await axios.post("/api/auth/login", {
        email: email.trim().toLowerCase(),
        password
      });

      const user = res.data?.user || res.data;
      if (user?.id || user?.email) {
        set({ authUser: user, isLoading: false });
        toast.success("Login successful");
        navigate("/chatbot", { replace: true });
      } else {
        throw new Error("Invalid login response");
      }
    } catch (err) {
      console.error("Login error:", err?.response?.data || err.message);
      toast.error(err?.response?.data?.msg || "Login failed");
      set({ isLoading: false });
    }
  },

  signup: async ({ name, email, password }, navigate) => {
    try {
      set({ isLoading: true });
      const res = await axios.post("/api/auth/signup", { name, email, password });

      const user = res.data?.user || res.data;
      if (user?.id || user?.email) {
        set({ authUser: user, isLoading: false });
        toast.success("Signup successful");
        navigate("/");
      } else {
        throw new Error("Invalid signup response");
      }
    } catch (err) {
      console.error("Signup error:", err?.response?.data || err.message);
      toast.error(err?.response?.data?.msg || "Signup failed");
      set({ isLoading: false });
    }
  },
  
  updateImage: async (UserImage) => {
        try {
            set({ isUpdatingImage: true, isLoading: true });
            const res = await axios.put("/api/auth/upload-profile", UserImage);
            toast.success("Profile updated successfully");
            return res.data;
        } catch (error) {
            console.log(error)
            toast.error(error.response?.data?.message || "Profile update failed");
            return false;
        } finally {
            set({ isUpdatingImage: false, isLoading: false });
        }
  },

}));
