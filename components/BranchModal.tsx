"use client";

import Modal from "./Modal";
import useBranchModal from "@/hooks/useBranchModal";

import { addBranch, editBranch } from "@/utils/database";

interface InputFieldProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, value, onChange  }) => {
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
}

const BranchModal = () => {
    const { onClose, isOpen,
        newBranch, prevBranch,
        location, lat, lng, firstName, lastName, branchInstagram,
        setLocation, setLat, setLng, setFirstName, setLastName, setBranchInstagram
     } = useBranchModal();

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    }

    return (
        <Modal title="Manage Branch" isOpen={isOpen} onChange={onChange}>
            <form className="flex flex-col justify-center items-center gap-y-4"
            onSubmit={(e) => {
                e.preventDefault();

                if (location && lat && lng && firstName && lastName && branchInstagram) {
                    if (newBranch) {
                        addBranch(location, parseFloat(lat) || 1, parseFloat(lng) || 1, firstName, lastName, branchInstagram);
                    } else {
                        editBranch(prevBranch, location, parseFloat(lat) || 1, parseFloat(lng) || 1, firstName, lastName, branchInstagram);
                    }
                }

                onClose();
            }}>
                <InputField 
                    label="Location" 
                    placeholder="Location..." 
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)} 
                />
                <div className="flex flex-row justify-center items-center gap-x-6 w-full">
                    <InputField 
                        label="Latitude" 
                        placeholder="Latitude..." 
                        value={lat.toString()} 
                        onChange={(e) => setLat(e.target.value)}
                    />
                    <InputField 
                        label="Longitude" 
                        placeholder="Longitude..." 
                        value={lng.toString()} 
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
                <InputField 
                    label="Branch Instagram" 
                    placeholder="Branch Instagram..." 
                    value={branchInstagram} 
                    onChange={(e) => setBranchInstagram(e.target.value)} 
                />
                <button type="submit"
                className="px-4 py-2 bg-primary text-white font-bold w-full rounded-full">
                    Submit
                </button>
            </form>
        </Modal>
    );
}

export default BranchModal;
