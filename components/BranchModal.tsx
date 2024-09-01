"use client";

import Modal from "./Modal";
import useBranchModal from "@/hooks/useBranchModal";
import { addBranch, editBranch } from "@/utils/database";
import { useState, useEffect } from "react";

interface InputFieldProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, value, onChange }) => {
    return (
        <div className="w-full">
            <p>{label}</p>
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="input-field"
            />
        </div>
    );
};

const BranchModal = () => {
    const { onClose, isOpen, newBranch, currentBranch, updated } = useBranchModal();

    // Unique useState hooks for each input field
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [highschool, setHighschool] = useState("");
    const [description, setDescription] = useState("");
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [imageFile, setImageFile] = useState<File | null>(null);

    useEffect(() => {
        setCountry(currentBranch?.country || "");
        setCity(currentBranch?.city || "");
        setHighschool(currentBranch?.highschool || "");
        setDescription(currentBranch?.description || "");
        setLat(currentBranch?.lat || "");
        setLng(currentBranch?.lng || "");
        setFirstName(currentBranch?.firstName || "");
        setLastName(currentBranch?.lastName || "");
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

        const latitude = parseFloat(lat) || 1;
        const longitude = parseFloat(lng) || 1;

        if (country && city && highschool && lat && lng && firstName && lastName && imageFile && newBranch) {
            addBranch(country, city, highschool, latitude, longitude, firstName, lastName, description, imageFile);
            onClose();
        } else if (country && city && highschool && lat && lng && firstName && lastName && description && !newBranch) {
            editBranch(
                country, city, highschool, latitude, longitude, firstName, lastName, description, 
                currentBranch?.city || "", currentBranch?.highschool || ""
            );
            onClose();
        }
    };

    return (
        <Modal title="Manage Branch" isOpen={isOpen} onChange={onChange}>
            <form
                className="flex flex-col justify-center items-center gap-y-4"
                onSubmit={handleSubmit}
            >
                <InputField
                    label="Country"
                    placeholder="Germany..."
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
                <InputField
                    label="City"
                    placeholder="Berlin... // Texas, Austin"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <InputField
                    label="Highschool"
                    placeholder="Frankfurt International School..."
                    value={highschool}
                    onChange={(e) => setHighschool(e.target.value)}
                />
                <InputField
                    label="Description"
                    placeholder="About..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <div className="flex flex-row justify-center items-center gap-x-6 w-full">
                    <InputField
                        label="Latitude"
                        placeholder="Latitude..."
                        value={lat}
                        onChange={(e) => setLat(e.target.value)}
                    />
                    <InputField
                        label="Longitude"
                        placeholder="Longitude..."
                        value={lng}
                        onChange={(e) => setLng(e.target.value)}
                    />
                </div>
                <div className="flex flex-row justify-center items-center gap-x-6 w-full">
                    <InputField
                        label="First Name"
                        placeholder="First Name..."
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <InputField
                        label="Last Name"
                        placeholder="Last Name..."
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                {newBranch && (
                    <div className="w-full">
                        <p>Branch Image</p>
                        <input type="file" onChange={handleImageChange} className="input-field text-gray-400" />
                    </div>
                )}
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

export default BranchModal;
