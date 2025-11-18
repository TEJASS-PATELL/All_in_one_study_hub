import { create } from "zustand";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export const useDiscussionStore = create((set, get) => ({
  experiences: [],
  isFetching: false,
  userHasPosted: false,
  userLikedDiscussions: new Set(),

  fetchDiscussions: async (userId) => {
    try {
      set({ isFetching: true });
      const res = await axios.get("/api/discussion");
      const discussions = res.data?.data || res.data;

      const likedSet = new Set();
      discussions.forEach((d) => {
        d.likes?.forEach((like) => {
          if (like.userId === userId) likedSet.add(d.id);
        });
      });

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
      const res = await axios.post("/api/discussion", dataToSend);
      if (res.status === 200 || res.status === 201) {
        onSuccess();
        get().fetchDiscussions(user.id);
      } else {
        alert("Something went wrong.");
      }
    } catch (err) {
      console.error("Submit error:", err.response || err);
      alert(err.response?.data?.message || "Failed to submit.");
    }
  },

  likeDiscussion: async (id, userId) => {
    try {
      await axios.post(`/api/discussion/${id}/like`);
      get().fetchDiscussions(userId);
    } catch (err) {
      alert(err.response?.data?.message || "Like failed.");
    }
  },

  deleteDiscussion: async (id, userId) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      await axios.delete(`/api/discussion/${id}`);
      alert("Deleted successfully.");
      get().fetchDiscussions(userId);
    } catch (err) {
      alert("Delete failed.");
    }
  },
}));
