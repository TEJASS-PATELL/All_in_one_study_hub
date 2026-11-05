import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;
axios.defaults.timeout = 60_000;

let authCheckVersion = 0;

const getRequestErrorMessage = (error, fallback) => {
  if (error?.code === "ECONNABORTED") {
    return "The request timed out. Please try again.";
  }
  return error?.response?.data?.message || error?.response?.data?.msg || fallback;
};

export const useAuthStore = create((set) => ({
  authUser: null,
  isLoading: false,
  isAuthChecking: true,
  isAuthenticated: false,
  isEmailVerify: false,
  isDemo: false,
  isPasswordReset: false,

  fetchUser: async () => {
    const requestVersion = ++authCheckVersion;
    set({ isAuthChecking: true });

    try {
      const res = await axios.get("/api/auth/getuser");
      const user = res.data;
      if (requestVersion === authCheckVersion) {
        set({
          authUser: user,
          isAuthenticated: true,
          isEmailVerify: user.isAccountVerified,
          isDemo: user.isDemo === true,
        });
      }
    } catch {
      if (requestVersion === authCheckVersion) {
        set({ authUser: null, isAuthenticated: false, isEmailVerify: false, isDemo: false });
      }
    } finally {
      if (requestVersion === authCheckVersion) {
        set({ isAuthChecking: false });
      }
    }
  },

  login: async ({ email, password }) => {
    ++authCheckVersion;
    try {
      set({ isLoading: true, isAuthChecking: false });

      const res = await axios.post("/api/auth/login", { email, password });
      const user = res.data?.user || res.data;

      if (user) {
        set({
          authUser: user,
          isAuthenticated: true,
          isEmailVerify: user.isAccountVerified,
          isDemo: false,
        });
        toast.success("Login successful");
        return true;
      } else {
        throw new Error("Invalid login response");
      }
    } catch (err) {
      toast.error(getRequestErrorMessage(err, "Login failed"));
      return false;
    } finally {
      set({ isLoading: false });
    }
  },

  demoLogin: async () => {
    ++authCheckVersion;
    try {
      set({ isLoading: true, isAuthChecking: false });
      const res = await axios.post("/api/auth/demo");
      const user = res.data?.user;

      if (!user) throw new Error("Invalid demo login response");

      set({
        authUser: user,
        isAuthenticated: true,
        isEmailVerify: true,
        isDemo: true,
      });
      toast.success("Demo session started");
      return true;
    } catch (err) {
      const message = err?.response?.status === 404
        ? "Demo login is not available on the server yet. The backend needs to be redeployed."
        : getRequestErrorMessage(err, "Unable to start demo session");
      toast.error(message);
      return false;
    } finally {
      set({ isLoading: false });
    }
  },

  signup: async ({ name, email, password }) => {
    try {
      set({ isLoading: true });

      const res = await axios.post("/api/auth/signup", {name,  email,  password});

      if (res.data.success) {
        return {
          success: res.data.success === true,
          redirectToVerify: !!res.data.redirectToVerify,
          message: res.data.message,
        };
      }

      return { success: false, message: res.data.message || "Signup failed" };

    } catch (err) {
      return { success: false, message: getRequestErrorMessage(err, "Signup failed") };
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
    ++authCheckVersion;
    try {
      set({ isLoading: true, isAuthChecking: false });

      const res = await axios.post("/api/auth/verify-account", { otp, email });

      if (res.data.success) {
        set({
          authUser: res.data.user,
          isAuthenticated: true,
          isEmailVerify: res.data.user.isAccountVerified,
          isDemo: false,
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
    ++authCheckVersion;
    try {
      set({ isLoading: true, isAuthChecking: false });
      await axios.get("/api/auth/logout");
      set({ authUser: null, isAuthenticated: false, isEmailVerify: false, isDemo: false, isLoading: false });
      toast.success("Logged out successfully");
    } catch {
      toast.error("Logout failed");
      set({ isLoading: false });
    }
  },

  deleteAccount: async () => {
    ++authCheckVersion;
    try {
      await axios.delete("/api/auth/delete-account");
      set({ authUser: null, isAuthenticated: false, isEmailVerify: false, isDemo: false, isLoading: false });
      toast.success("Account deleted");
    } catch {
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

    } catch {
      toast.error("Error resetting password");
      return false;

    } finally {
      set({ isLoading: false });
    }
  },
}));
