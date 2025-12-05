import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const customConfirm = (message) => {
    return new Promise((resolve) => {
        console.warn(`CONFIRMATION REQUIRED: ${message}.`);
        resolve(true);
    });
};

export const useDiscussionStore = create((set, get) => ({
  experiences: [],
  isFetching: false,
  userHasPosted: false,
  userLikedDiscussions: new Set(),

  fetchDiscussions: async (userId) => {
    try {
      set({ isFetching: true });

      const [discussionsRes, userLikesRes] = await Promise.all([
        axios.get("/api/discussion/getdiscussion"),
        axios.get("/api/discussion/userlikes"),
      ]);

      const discussions = discussionsRes.data?.data || [];
      const likedDiscussionIds = userLikesRes.data?.data || [];
      const likedSet = new Set(likedDiscussionIds);

      set({
        experiences: discussions,
        userHasPosted: discussions.some((d) => d.userId === userId),
        userLikedDiscussions: likedSet,
        isFetching: false,
      });
    } catch (err) {
      console.error("Fetch error:", err);
      set({ isFetching: false });
    }
  },

  submitExperience: async (formData, user, onSuccess) => {
    try {
      const dataToSend = { ...formData, userId: user?.id, email: user?.email };
      const res = await axios.post("/api/discussion/creatediscussion", dataToSend);

      if (res.status === 200 || res.status === 201) {
        onSuccess();
        get().fetchDiscussions(user.id);
      } else {
        toast.error("Something went wrong.");
      }
    } catch (err) {
      console.error("Submit error:", err.response || err);
      toast.error(err.response?.data?.message || "Failed to submit.");
    }
  },

  likeDiscussion: async (id, userId) => {
    try {
      await axios.post(`/api/discussion/${id}/like`);

      const currentLiked = get().userLikedDiscussions;
      const newLiked = new Set(currentLiked).add(id);
      set({ userLikedDiscussions: newLiked });

      get().fetchDiscussions(userId);
    } catch (err) {
      toast.error(err.response?.data?.message || "Like failed.");
    }
  },

  deleteDiscussion: async (id, userId) => {
    const confirmed = await customConfirm("Are you sure you want to delete this post?");
    if (!confirmed) return;

    try {
      await axios.delete(`/api/discussion/${id}/delete`);
      toast.success("Deleted successfully.");
    } catch (err) {
      toast.error("Delete failed.");
    }
  },
}));
