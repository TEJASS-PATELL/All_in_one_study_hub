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
    try {
      set({ isFetching: true });

      const [discussionsRes, userLikesRes] = await Promise.all([
        axios.get("/api/discussion/getdiscussion"),
        axios.get("/api/discussion/userlikes"),
      ]);

      const discussions = discussionsRes.data?.data || [];
      const likedDiscussionIds = userLikesRes.data?.data || [];

      set({
        experiences: discussions,
        userHasPosted: discussions.some((d) => d.userId === userId),
        userLikedDiscussions: new Set(likedDiscussionIds),
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
      const res = await axios.post(`/api/discussion/${id}/like`);

      const updatedLikes = res.data?.updatedLikes;

      const updatedLikedSet = new Set(get().userLikedDiscussions);
      updatedLikedSet.add(id);

      const updatedExperiences = get().experiences.map((exp) =>
        exp.id === id
          ? { ...exp, likesCount: updatedLikes }
          : exp
      );

      set({
        userLikedDiscussions: updatedLikedSet,
        experiences: updatedExperiences,
      });

    } catch (err) {
      toast.error(err.response?.data?.message || "Like failed.");
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
