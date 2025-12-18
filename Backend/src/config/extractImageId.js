export const extractImageId = (url) => {
  try {
    if (!url || typeof url !== "string") return null;

    const parts = url.split("/");
    const uploadIndex = parts.findIndex(p => p === "upload");
    if (uploadIndex === -1) return null;

    return parts.slice(uploadIndex + 1).join("/").replace(/\.[^/.]+$/, "");
  } catch {
    return null;
  }
};
