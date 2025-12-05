import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export const useDiscussionStore = create((set, get) => ({
  experiences: [],
  isFetching: false,
  userHasPosted: false,
  userLikedDiscussions: new Set(),

  fetchDiscussions: async (userId) => {
    set({ isFetching: true });

    try {
      let discussions = [];
      try {
        const res = await axios.get("/api/discussion/getdiscussion");
        discussions = res.data?.data || [];
      } catch {}

      let likedIds = [];
      try {
        const res = await axios.get("/api/discussion/userlikes");
        likedIds = res.data?.data || [];
      } catch {}

      set({
        experiences: discussions,
        userHasPosted: discussions.some((d) => d.userId === userId),
        userLikedDiscussions: new Set(likedIds),
        isFetching: false,
      });
    } catch {
      set({ isFetching: false });
    }
  },

  submitExperience: async (formData, user, onSuccess) => {
    try {
      const dataToSend = {
        ...formData,
        userId: user?.id,
        email: user?.email,
      };

      const res = await axios.post("/api/discussion/creatediscussion", dataToSend);

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

  likeDiscussion: async (id) => {
    try {
      const res = await axios.post(`/api/discussion/${id}/like`);
      const action = res.data?.action;
      const updatedLikes = res.data?.updatedLikes;

      const liked = new Set(get().userLikedDiscussions);

      if (action === "liked") {
        liked.add(id);
      } else {
        liked.delete(id);
      }

      const updatedExperiences = get().experiences.map((exp) =>
        exp.id === id ? { ...exp, likesCount: updatedLikes } : exp
      );

      set({
        userLikedDiscussions: liked,
        experiences: updatedExperiences,
      });
    } catch (err) {
      toast.error(err.response?.data?.message || "Error performing action.");
    }
  },

  deleteDiscussion: async (id, userId) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      await axios.delete(`/api/discussion/${id}/delete`);
      toast.success("Deleted successfully.");
      get().fetchDiscussions(userId);
    } catch {
      toast.error("Delete failed.");
    }
  },
}));
