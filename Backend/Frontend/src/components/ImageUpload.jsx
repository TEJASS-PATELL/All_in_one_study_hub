import React, { useEffect, useState } from 'react'
import { Camera, Loader2 } from "lucide-react";
import { useUserData } from '../stores/useUserData';
import "../style/ImageUpload.css"

export default function ImageUpload() {
    const { updateImage, isUploadingImage, isLoading, userDetail } = useUserData();
    const [selectedImg, setSelectedImg] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchUserData = async () => {
            try {
                const Userdata = await userDetail();
                if (isMounted && Userdata) {
                    setSelectedImg(Userdata.profilePic || null);
                }
            } catch (err) {
                console.error("Failed to fetch user data:", err);
            }
        };

        fetchUserData();

        return () => {
            isMounted = false;
        };
    }, []);

    const handleImageUpload = async (e) => {
        const image = e.target.files[0];
        if (!image) return;

        const reader = new FileReader();
        reader.readAsDataURL(image);

        reader.onload = async () => {
            const base64Image = reader.result;
            const updateUserImage = await updateImage({ image: base64Image });
            if (updateUserImage?.image) setSelectedImg(updateUserImage.image);
        }
    }

    return (
        <div className="avatar-upload">
            <div className="avatar-wrapper">
                <img
                    src={selectedImg || "/user.png"}
                    alt="Profile"
                    className="avatar-img"
                />
                <label htmlFor="avatar-upload" className="avatar-upload-btn">
                    {isLoading ? (
                        <Loader2 className="icon animate-spin" />
                    ) : (
                        <Camera className="icon" />
                    )}
                    <input
                        type="file"
                        id="avatar-upload"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageUpload}
                        disabled={isUploadingImage}
                    />
                </label>
            </div>
        </div>
    )
}
