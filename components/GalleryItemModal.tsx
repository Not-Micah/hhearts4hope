"use client";

import Modal from "./Modal";
import InputField from "./InputField";

import useGalleryModal from "@/hooks/useGalleryModal";
import { addGalleryItem, editGalleryItem } from "@/utils/database";
import { useState, useEffect } from "react";

const GalleryModal = () => {
    const { onClose, isOpen, newGalleryItem, currentGalleryItem, updated, galleryBranch } = useGalleryModal();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageFile, setImageFile] = useState<File | null>(null);

    useEffect(() => {
        setTitle(currentGalleryItem?.title || "");
        setDescription(currentGalleryItem?.description || "");
        // setImageFile(null);
    }, [updated]);

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImageFile(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (title && description && newGalleryItem && imageFile) {
            addGalleryItem(galleryBranch?.city, galleryBranch?.highschool, title, description, imageFile);
            onClose();
        } else if (title && description && !newGalleryItem) {
            editGalleryItem(galleryBranch?.city, galleryBranch?.highschool, currentGalleryItem?.title, currentGalleryItem?.description,
            title, description);
            onClose();
        }
    };

    return (
        <Modal title="Manage Gallery Item" isOpen={isOpen} onChange={onChange}>
            <form
                className="flex flex-col justify-center items-center gap-y-4"
                onSubmit={handleSubmit}
            >
                <InputField
                    label="Title"
                    placeholder="Title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <InputField
                    label="Description"
                    placeholder="Description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <div className="w-full">
                    <p className={`${!newGalleryItem && "text-black/50"}`}>Branch Image</p>
                    <input type="file" onChange={handleImageChange} className="input-field text-gray-400"
                    disabled={!newGalleryItem} />
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-primary text-white font-bold w-full rounded-full"
                >
                    Submit
                </button>
            </form>
        </Modal>
    );
};

export default GalleryModal;
