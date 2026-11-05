import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuthStore } from "./useAuthStore";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const DEMO_DISCUSSIONS_KEY = "studyHubDemoDiscussions";

const readDemoDiscussions = () => {
  const saved = localStorage.getItem(DEMO_DISCUSSIONS_KEY);
  if (!saved) return [];

  const discussions = JSON.parse(saved);
  return Array.isArray(discussions) ? discussions : [];
};

export const useDiscussionStore = create((set, get) => ({
  experiences: [],
  isFetching: false,
  userHasPosted: false,

  fetchDiscussions: async (userId) => {
    set({ isFetching: true });

    try {
      if (useAuthStore.getState().isDemo) {
        const discussions = readDemoDiscussions();
        set({
          experiences: discussions,
          userHasPosted: discussions.some((discussion) => discussion.userId === userId),
          isFetching: false,
        });
        return;
      }

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
      if (useAuthStore.getState().isDemo) {
        const discussions = readDemoDiscussions();
        if (discussions.some((discussion) => discussion.userId === user?.id)) {
          toast.error("Already posted.");
          return;
        }

        const discussion = {
          ...formData,
          id: Date.now(),
          userId: user.id,
          email: user.email,
          likesCount: 0,
          createdAt: new Date().toISOString(),
        };
        const updatedDiscussions = [discussion, ...discussions];
        localStorage.setItem(DEMO_DISCUSSIONS_KEY, JSON.stringify(updatedDiscussions));
        set({
          experiences: updatedDiscussions,
          userHasPosted: true,
        });
        onSuccess?.();
        return;
      }

      const payload = { ...formData, userId: user?.id, email: user?.email };

      const res = await axios.post("/api/discussion/creatediscussion", payload);

      if (res.status === 200 || res.status === 201) {
        onSuccess();
        get().fetchDiscussions(user.id);
      } else {
        toast.error("Something went wrong.");
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to submit.");
    }
  },

  deleteDiscussion: async (id, userId) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;

    try {
      if (useAuthStore.getState().isDemo) {
        const discussions = readDemoDiscussions().filter((discussion) => discussion.id !== id);
        localStorage.setItem(DEMO_DISCUSSIONS_KEY, JSON.stringify(discussions));
        set({ experiences: discussions, userHasPosted: discussions.some((discussion) => discussion.userId === userId) });
        toast.success("Demo post deleted.");
        return;
      }

      await axios.delete(`/api/discussion/${id}/delete`);
      toast.success("Deleted successfully.");
      get().fetchDiscussions(userId);
    } catch {
      toast.error("Delete failed.");
    }
  },
}));