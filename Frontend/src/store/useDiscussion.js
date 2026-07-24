import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export const useDiscussionStore = create((set, get) => ({
  experiences: [],
  isFetching: false,
  userHasPosted: false,

  fetchDiscussions: async (userId) => {
    set({ isFetching: true });

    try {
      const res = await axios.get("/api/discussion/getdiscussion");
      const discussions = Array.isArray(res.data?.data) ? res.data.data : [];

      set({
        experiences: discussions,
        userHasPosted: discussions.some((d) => d.userId === userId),
        isFetching: false,
      });
    } catch (err) {
      console.error("Error fetching discussions:", err);
      set({ isFetching: false, experiences: [] });
    }
  },

  submitExperience: async (formData, user, onSuccess) => {
    try {
      const payload = { ...formData, userId: user?.id, email: user?.email };

      const res = await axios.post("/api/discussion/creatediscussion", payload);

      if (res.status === 200 || res.status === 201) {
        onSuccess();
        get().fetchDiscussions(user.id);
      } else {
        toast.error("Something went wrong.");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to submit.");
    }
  },

  deleteDiscussion: async (id, userId) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      await axios.delete(`/api/discussion/${id}/delete`);
      toast.success("Deleted successfully.");
      get().fetchDiscussions(userId);
    } catch (err) {
      toast.error("Delete failed.");
    }
  },
}));