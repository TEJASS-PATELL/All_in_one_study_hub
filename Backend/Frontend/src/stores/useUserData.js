import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useUserData = create((set) => ({
    isUploadingImage: false,
    isLoading: false,
    UserData: null,

    updateImage: async (UserImage) => {
        try {
            set({ isUpdatingImage: true, isLoading: true });
            const res = await axiosInstance.put("/user/upload-profile", UserImage);
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

    userDetail: async () => {
        try{
            set({isLoading: true});
            const res = await axiosInstance.get("/user/data");
            set({UserData: res.data.userData});
            return res.data.userData;
        }catch(error){
            toast.error("Error occurs while fetching user data.");
            return false;
        }finally{
            set({isLoading: false})
        }
    }
    
}));