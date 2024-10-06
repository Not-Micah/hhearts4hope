"use client";

import Modal from "../Modal";
import InputField from "../InputField";

import usePartnerModal from "@/hooks/usePartnersModal";
import { addPartner, editPartner } from "@/utils/database";
import { useState, useEffect } from "react";

const PartnerModal = () => {
    const { onClose, isOpen, newPartner, currentPartner, updated } = usePartnerModal();

    // Unique useState hooks for each input field
    const [name, setName] = useState("");
    const [description, setDescription] =useState("");
    const [instagram, setInstagram] = useState("");
    const [website, setWebsite] = useState("");
    const [imageFile, setImageFile] = useState<File | null>(null);

    useEffect(() => {
        setName(currentPartner?.name || "");
        setDescription(currentPartner?.description || "");
        setInstagram(currentPartner?.instagram || "");
        setWebsite(currentPartner?.website || "");
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

        if (name && description && instagram && website && imageFile && newPartner) {
            addPartner(name, description, instagram, website, imageFile);
            onClose();
        } else if (name && description && instagram && website && !newPartner) {
            editPartner(name, description, instagram, website, currentPartner?.name);
            onClose();
        }
    };

    return (
        <Modal title="Manage Partner" isOpen={isOpen} onChange={onChange}>
            <form
                className="flex flex-col justify-center items-center gap-y-4"
                onSubmit={handleSubmit}
            >
                <InputField
                    label="Name"
                    placeholder="Name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                 <InputField
                    label="Description"
                    placeholder="Description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <InputField
                    label="Instagram"
                    placeholder="Instagram..."
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                />
                <InputField
                    label="Website"
                    placeholder="Website..."
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                />
                <div className="w-full">
                    <p className={`${!newPartner && "text-black/50"}`}>Partner Logo</p>
                    <input type="file" onChange={handleImageChange} className="input-field text-gray-400"
                    disabled={!newPartner} />
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

export default PartnerModal;
