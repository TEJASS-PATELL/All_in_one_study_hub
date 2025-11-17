import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.SERVER_URL;
axios.defaults.withCredentials = true;

export const useRoadmapStore = create((set) => ({
    roadmapData: null,
    roadmapTitle: "",
    showForm: true,
    loading: false,

    fetchRoadmap: async () => {
        try {
            set({ loading: true });
            const res = await axios.get("/api/roadmap/");
            const data = res.data;

            if (data.success && data.roadmap) {
                if (Array.isArray(data.roadmap.steps) && data.roadmap.steps.length > 0) {
                    set({
                        roadmapData: data.roadmap.steps,
                        roadmapTitle: data.roadmap.title || "",
                        showForm: false,
                    });
                } else {
                    toast("No roadmap found, please create one.", { icon: "🗺️" });
                    set({ showForm: true });
                }
            } else {
                toast("No roadmap found, please create one.", { icon: "🗺️" });
                set({ showForm: true });
            }
        } catch (err) {
            set({ showForm: true });
            if (err.response && err.response.status === 404) {
                toast("No roadmap found, please create one.");
                set({ showForm: true });
            } else {
                toast.error("Failed to load roadmap");
            }
        } finally {
            set({ loading: false });
        }
    },

    saveRoadmap: async (formData) => {
        try {
            set({ loading: true });
            const res = await axios.post("/api/roadmap/modify", formData);
            const data = res.data;

            if (data.success && data.roadmap && Array.isArray(data.roadmap.steps)) {
                set({
                    roadmapData: data.roadmap.steps,
                    showForm: false,
                });
                toast.success("Roadmap saved successfully!");
            } else {
                toast.error("Invalid roadmap response");
            }
        } catch (err) {
            console.error("Error saving roadmap:", err);
            toast.error("Failed to save roadmap");
        } finally {
            set({ loading: false });
        }
    },

    deleteRoadmap: async () => {
        try {
            if (!window.confirm("Are you sure you want to delete this roadmap?")) return;
            set({ loading: true });
            const res = await axios.delete("/api/roadmap/remove");
            const data = res.data;

            if (data.success) {
                set({ roadmapData: null, showForm: true });
                toast.success("Roadmap deleted successfully!");
            } else {
                toast.error("Failed to delete roadmap");
            }
        } catch (err) {
            console.error("Error deleting roadmap:", err);
            toast.error("Error while deleting roadmap");
        } finally {
            set({ loading: false });
        }
    },

    setShowForm: (val) => set({ showForm: val }),
}));