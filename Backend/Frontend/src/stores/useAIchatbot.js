import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAiChatBot = create((set) => ({
    isLoading: false,

    AIreply: async(message, history) => {
        try{
            set({isLoading: true});
            const res = await axiosInstance.post("/chat/chatbot", {message, history} , {withCredentials : true});
            return res.data.reply || "No reply from AI";
        }catch(err){
            toast.error("Server error. Please try again later.");
            return false;
        }finally{
            set({isLoading: false});
        }
    }
}))