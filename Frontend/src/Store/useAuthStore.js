import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
  authUser: null,
  isLoading: true,
  isAuthenticated: false,
  isEmailVerify: false,
  isPasswordReset: false,

  fetchUser: async () => {
    try {
      const res = await axios.get("/api/auth/getuser");
      const user = res.data;

      if (user?.id) {
        set({ authUser: user, isAuthenticated: true, isLoading: false });
      } else {
        set({ authUser: null, isAuthenticated: false, isLoading: false });
      }
    } catch (err) {
      set({ authUser: null, isAuthenticated: false, isLoading: false });
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

      if (user?.id) {
        set({
          authUser: user,
          isAuthenticated: true,
          isLoading: false
        });

        toast.success("Login successful");
        navigate("/", { replace: true });
      } else {
        throw new Error("Invalid login response");
      }
    } catch (err) {
      toast.error(err?.response?.data?.msg || "Login failed");
      set({ isLoading: false });
    }
  },

  signup: async ({ name, email, password }) => {
    try {
      set({ isLoading: true });

      const res = await axios.post("/api/auth/signup", {
        name,
        email,
        password
      });

      if (res.data.success) {
        return {
          success: res.data.success === true,
          redirectToVerify: !!res.data.redirectToVerify,
          message: res.data.message,
        };
      }

      toast.error(res.data.message);
      return { success: false };

    } catch (err) {
      toast.error(err?.response?.data?.message || "Signup failed");
      return { success: false };
    } finally {
      set({ isLoading: false });
    }
  },

  sendVerifyOtp: async (email) => {
    try {
      const res = await axios.post("/api/auth/send-verify-otp", { email });
      if (res.data.success) {
        toast.success(res.data.message);
        return true;
      }
      toast.error(res.data.message);
      return false;

    } catch (err) {
      toast.error(err?.response?.data?.message || "OTP not sent");
      return false;
    }
  },

  verifyOtp: async (otp, email) => {
    try {
      set({ isLoading: true });

      const res = await axios.post("/api/auth/verify-account", { otp, email });

      if (res.data.success) {
        const userRes = await axios.get("/api/auth/getuser");

        set({
          authUser: userRes.data,
          isAuthenticated: true,
          isEmailVerify: true,
          isLoading: false
        });

        toast.success("Email verified successfully!");
        return true;
      }

      toast.error(res.data.message);
      return false;

    } catch (err) {
      toast.error(err?.response?.data?.message || "Invalid or expired OTP");
      return false;

    } finally {
      set({ isLoading: false });
    }
  },

  logout: async () => {
    try {
      set({ isLoading: true });

      await axios.get("/api/auth/logout");

      set({
        authUser: null,
        isAuthenticated: false,
        isLoading: false
      });

      toast.success("Logged out successfully");
    } catch (err) {
      toast.error("Logout failed");
      set({ isLoading: false });
    }
  },

  updateImage: async (UserImage) => {
    try {
      set({ isLoading: true });

      const res = await axios.put("/api/auth/upload-profile", UserImage);
      toast.success("Profile updated successfully");
      return res.data;

    } catch (error) {
      toast.error(error.response?.data?.message || "Profile update failed");
      return false;

    } finally {
      set({ isLoading: false });
    }
  },

  deleteAccount: async () => {
    try {
      await axios.delete("/api/auth/delete-account");
      set({ authUser: null, isAuthenticated: false });
      toast.success("Account deleted");
    } catch (err) {
      toast.error("Error deleting account");
    }
  },

  sendPasswordResetLink: async (email) => {
    try {
      set({ isLoading: true });
      const res = await axios.post("/api/auth/send-reset-link", { email });
      toast.success(res.data.message);
      return res.data.success;
    } catch (err) {
      console.log("RESET LINK ERROR:", err?.response?.data);
      toast.error(err?.response?.data?.message || "Error while sending reset link");
      return false;
    } finally {
      set({ isLoading: false });
    }
  },

  resetPassword: async (token, newPassword) => {
    try {
      set({ isLoading: true });

      const res = await axios.patch(`/api/auth/reset-password/${token}`, {
        newPassword
      });

      if (res.data.success) {
        toast.success("Password reset successful!");
        return true;
      }

      toast.error(res.data.message || "Invalid or expired reset link");
      return false;

    } catch (err) {
      toast.error("Error resetting password");
      return false;

    } finally {
      set({ isLoading: false });
    }
  },

  allUsers: async () => {
    try {
      set({ isLoading: true });
      const res = await axios.get("/api/auth/allusers");
      return res;
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error(error?.response?.data?.message || "Failed to fetch users");
      return null;
    } finally {
      set({ isLoading: false });
    }
  }

}));
