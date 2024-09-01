"use client";

import { DocumentData } from "firebase/firestore";
import { useState, useEffect } from "react";

import { IoChevronForwardOutline, IoChevronDownSharp } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

import useBranchModal from "@/hooks/useBranchModal";
import useGalleryModal from "@/hooks/useGalleryModal";

import BranchItemGallery from "./BranchItemGallery";
import useConfirmationModal from "@/hooks/useDeleteConfirmationModal";
import { getGallery } from "@/utils/database";

interface BranchItemProps {
    branch: DocumentData;
}

const BranchItem: React.FC<BranchItemProps> = ({ branch }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [galleryItems, setGalleryItems] = useState<DocumentData[]>([]);

    const {
        onOpen: openConfirmationModal,
        setConfirmationMessage,
        setCityToDelete,
        setHighschoolToDelete,
    } = useConfirmationModal();

    const {
        onOpen: openGalleryModal,
        setNewGalleryItem,
        setCurrentGalleryItem,
        updated: updatedGalleryItem,
        setUpdated: setUpdatedGalleryItem,
        setGalleryBranch
    } = useGalleryModal();

    const {
        setNewBranch,
        onOpen: openBranchModal,
        setCurrentBranch,
        updated,
        setUpdated,
    } = useBranchModal();

    useEffect(() => {
        if (isOpen && branch.city && branch.highschool) {
            const unsubscribe = getGallery(branch.city, branch.highschool, setGalleryItems);

            return () => unsubscribe();
        }
    }, [isOpen, branch]);

    return (
        <div className="flex flex-col justify-start items-start gap-y-4 w-full">
            <div className="flex justify-between items-center gap-x-2 w-full">
                <div className="flex justify-center items-center gap-x-4">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <IoChevronDownSharp />
                        ) : (
                            <IoChevronForwardOutline />
                        )}
                    </button>
                    <p className="font-title text-lg">{branch.city} {branch.country} --- {branch.highschool}</p>
                </div>
                <div className="flex justify-center items-center gap-x-4">
                    <button
                        onClick={() => {
                            // Setting Dialogue Data
                            setCurrentBranch(branch);
                            setNewBranch(false);
                            setUpdated(!updated);

                            // Opening the Modal
                            openBranchModal();
                        }}
                        className="text-lg"
                    >
                        <MdModeEdit />
                    </button>
                    <button
                        className="text-lg"
                        onClick={() => {
                            setConfirmationMessage(`Are you sure you want to delete the branch ${branch.city}, ${branch.highschool}?`);
                            setCityToDelete(branch.city);
                            setHighschoolToDelete(branch.highschool);
                            openConfirmationModal();
                        }}
                    >
                        <MdDelete />
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="flex flex-col justify-start items-start gap-y-4 w-full pl-12">
                    <BranchItemGallery branch={branch} galleryItems={galleryItems} />
                    <button 
                    onClick={() => {
                        setCurrentGalleryItem(null);
                        setNewGalleryItem(true);
                        setUpdatedGalleryItem(!updatedGalleryItem);
                        setGalleryBranch(branch);
                        openGalleryModal();
                    }}
                    className="text-black/50 underline hover:text-black">
                        + Add
                    </button>
                </div>
            )}
        </div>
    );
};

export default BranchItem;
