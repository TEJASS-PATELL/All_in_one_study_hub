import { create } from "zustand";
import { persist } from "zustand/middleware";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create(persist((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingAvtar: false,
    isPasswordReset: false,
    isEmailVerify: false,
    isDeletingAccount: false,
    isError: null,
    isAuthenticated: false,
    isLoading: false,

    signup: async (formData) => {
        try {
            set({ isLoading: true, isError: null, isSigningUp: true });
            const res = await axiosInstance.post("/auth/signup", formData);

            if (res.data.success) {
                set({ authUser: res.data })
                toast.success(res.data.message);
                return { success: true, redirectToVerify: res.data.redirectToVerify || false, email: formData.email };
            } else {
                toast.error(res.data.message || "Signup failed");
                set({ authUser: null });
                return { success: false };
            }
        } catch (err) {
            toast.error(err.response?.data?.message || "Signup failed");
            return { success: false };
        } finally {
            set({ isLoading: false, isSigningUp: false });
        }
    },

    login: async (credentials) => {
        try {
            set({ isLoading: true, isError: null, isLoggingIn: true });
            const res = await axiosInstance.post("/auth/login", credentials);
            if (res.data.success) {
                set({ authUser: res.data, isAuthenticated: true });
                toast.success("Login successful");
                return true;
            }
            else {
                set({ authUser: null, isAuthenticated: false });
                toast.success(res.data.message);
                return false;
            }
        }
        catch (error) {
            toast.error(error.response?.data?.message || "Login failed");
            return false;
        } finally {
            set({ isLoggingIn: false, isLoading: false });
        }
    },

    logout: async () => {
        try {
            await axiosInstance.post("/auth/logout");
            toast.success("Logout Successful")
            set({ isAuthenticated: false, authUser: null });
        } catch (err) {
            console.log("Logout failed", err);
        }
    },

    deleteAccount: async () => {
        try {
            set({ isDeletingAccount: true, isLoading: true });
            await axiosInstance.delete("/auth/delete-account");
            set({ authUser: null, isAuthenticated: false })
        }
        catch (err) {
            set({ isError: err.response?.data?.message || "Account deletion failed" });
        } finally {
            set({ isLoading: false, isDeletingAccount: false });
        }
    },

    sendOtp: async () => {
        try {
            set({ isLoading: true });
            const res = await axiosInstance.post("/auth/send-verify-otp");
            if (res.data.success) {
                toast.success(res.data.message);
                return true;
            }
            toast.error(res.data.message);
            return false;
        } catch (err) {
            toast.error(err.response?.data?.message || "OTP not send");
            return false;
        } finally {
            set({ isLoading: false });
        }
    },

    verifyOtp: async (otp, email) => {
        try {
            set({ isLoading: true, isError: null });
            const res = await axiosInstance.patch("/auth/verify-account", { otp, email });
            if (res.data.success) {
                toast.success("Email verified successfully! Welcome");
                set({ isEmailVerify: true, isAuthenticated: true })
                return true;
            }
            else {
                toast.error(res.data.message);
                set({ isEmailVerify: false, isAuthenticated: false })
                return false;
            }
        } catch (err) {
            toast.error(err.response?.data?.message || "Invalid or expired OTP");
            set({ isAuthenticated: false, isEmailVerify: false })
            return false;
        } finally {
            set({ isLoading: false });
        }
    },

    checkAuth: async () => {
        try {
            set({ isLoading: true });
            const res = await axiosInstance.get("/auth/is-auth");
            if (res.data?.success) {
                set({
                    authUser: res.data.user,
                    isAuthenticated: true,
                });
            } else {
                set({
                    authUser: null,
                    isAuthenticated: false,
                });
            }
            return res.data?.success || false;
        } catch (error) {
            set({ authUser: null, isAuthenticated: false });
        } finally {
            set({ isLoading: false });
        }
    },

    sendPasswordResetLink: async (email) => {
        try {
            set({ isLoading: true });
            await axiosInstance.post("/auth/send-reset-link", { email });
            toast.success("Password reset link sent to your email!");
            return true;
        } catch (err) {
            toast.error("Error while sending reset link");
            console.log(err)
            return false;
        } finally {
            set({ isLoading: false });
        }
    },

    resetPassword: async (token, newPassword) => {
        try {
            set({ isPasswordReset: true, isLoading: true });
            const res = await axiosInstance.patch(`/auth/reset-password/${token}`, { newPassword });
            if (res.data.success) {
                toast.success("Password has been reset successfully!");
                return true;
            } else {
                toast.error(res.data.message || "Invalid or expired reset link");
                console.log(err)
                return false;
            }
        }
        catch (error) {
            console.log(error)
            toast.error("Error while reseting a password");
            set({ isPasswordReset: false });
        }
        finally {
            set({ isLoading: false });
        }
    },

}),
    {
        name: "auth-storage",
        partialize: (state) => ({
            authUser: state.authUser,
            isAuthenticated: state.isAuthenticated
        }),
    }
))
