import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuthStore } from "./useAuthStore";

const DEMO_ROADMAP_KEY = "studyHubDemoRoadmap";

const createDemoRoadmap = (formData) => ({
    title: `${formData.jobRoles} ${formData.roadmapDuration} Roadmap`,
    steps: [
        { step: 1, title: "Understand your target", description: `Review the requirements and selection process for ${formData.jobRoles}.`, timeframe: "Week 1", tips: "Use official sources and note the skills you need to strengthen." },
        { step: 2, title: "Build a steady foundation", description: `Study the core concepts for your ${formData.jobType} preparation and connect them to your current ${formData.education} background.`, timeframe: "Weeks 2-4", tips: `Practice regularly with the skills you already have: ${formData.skills}.` },
        { step: 3, title: "Practice with purpose", description: "Work through realistic exercises and previous questions. Track mistakes and revisit topics that need more attention.", timeframe: "Month 2", tips: "Review each practice session and keep a short error log." },
        { step: 4, title: "Apply your skills", description: "Complete small projects, timed tests, or role-specific assignments that demonstrate your progress.", timeframe: "Middle of your preparation", tips: "Ask a peer or mentor for feedback when possible." },
        { step: 5, title: "Review and prepare", description: `Use your remaining ${formData.roadmapDuration} to revise key concepts, practice under realistic conditions, and prepare clear examples of your work.`, timeframe: "Final weeks", notes: formData.notes || "Adjust this plan to your schedule and the latest official requirements.", importantPoints: `Current status: ${formData.status}.` },
    ],
});

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;

export const useRoadmapStore = create((set) => ({
    roadmapData: [],
    roadmapTitle: "",
    showForm: true,
    loading: false,

    fetchRoadmap: async () => {
        set({ loading: true });

        try {
            if (useAuthStore.getState().isDemo) {
                const saved = localStorage.getItem(DEMO_ROADMAP_KEY);
                const roadmap = saved ? JSON.parse(saved) : null;
                set({
                    roadmapData: roadmap?.steps || [],
                    roadmapTitle: roadmap?.title || "",
                    showForm: !roadmap?.steps?.length,
                });
                return;
            }

            const { data } = await axios.get("/api/roadmap/getroadmap");

            if ( data?.success && data?.roadmap && Array.isArray(data.roadmap.steps) &&  data.roadmap.steps.length > 0) {
                set({
                    roadmapData: data.roadmap.steps,
                    roadmapTitle: data.roadmap.title,
                    showForm: false,
                });
            } else {
                set({ roadmapData: [], roadmapTitle: "", showForm: true});
            }
        } catch (err) {
            set({ roadmapData: [], roadmapTitle: "", showForm: true});
            if (!err?.response || err.response.status >= 500) {
                toast.error("Failed to load roadmap");
            }
        } finally {
            set({ loading: false });
        }
    },

    saveRoadmap: async (formData) => {
        try {
            set({ loading: true });
            if (useAuthStore.getState().isDemo) {
                const roadmap = createDemoRoadmap(formData);
                localStorage.setItem(DEMO_ROADMAP_KEY, JSON.stringify(roadmap));
                set({
                    roadmapData: roadmap.steps,
                    roadmapTitle: roadmap.title,
                    showForm: false,
                });
                toast.success("Demo roadmap saved on this device.");
                return;
            }

            const res = await axios.post("/api/roadmap/generateroadmap", formData);
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
            if (useAuthStore.getState().isDemo) {
                localStorage.removeItem(DEMO_ROADMAP_KEY);
                set({ roadmapData: [], roadmapTitle: "", showForm: true });
                toast.success("Demo roadmap deleted.");
                return;
            }

            const res = await axios.delete("/api/roadmap/removeroadmap");
            const data = res.data;

            if (data.success) {
                set({ roadmapData: [], showForm: true });
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