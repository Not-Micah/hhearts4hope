"use state";

import { DocumentData } from "firebase/firestore";
import { deleteGalleryItem } from "@/utils/database";
import useGalleryModal from "@/hooks/useGalleryModal";

import { FaImage } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

interface BranchItemGalleryProps {
  branch: DocumentData;
  galleryItems: DocumentData[];
}

const BranchItemGallery: React.FC<BranchItemGalleryProps> = ({
  branch, galleryItems
}) => {
  const {
    onOpen,
    //////
    currentGalleryItem,
    setCurrentGalleryItem,
    //////
    setNewGalleryItem,
    //////
    updated,
    setUpdated,
    setGalleryBranch
  } = useGalleryModal();

  return (
    <div className="flex flex-col gap-y-2 w-full">
      {galleryItems.length > 0 ? (
        galleryItems.map((item, index) => (
            <div key={index} className="w-full flex justify-between items-center gap-x-4">
                <div className="flex justify-center items-center gap-x-4">
                    <FaImage />
                    <p>{item.title}</p>
                </div>
                <div className="flex justify-center items-center gap-x-4
                text-black/50">
                    <button onClick={() => {
                        // Identify the right document!
                        setCurrentGalleryItem(item);
                        setGalleryBranch(branch);
                      
                        setNewGalleryItem(false);
                        setUpdated(!updated);
                        onOpen();
                    }}>
                        <MdModeEdit />
                    </button>
                    <button onClick={() => {
                      // Identify the right document!
                      setCurrentGalleryItem(item);
                      setGalleryBranch(branch);

                      deleteGalleryItem(branch.city, branch.highschool, currentGalleryItem?.title, currentGalleryItem?.description)
                    }}>
                        <MdDelete />
                    </button>
                </div>
            </div>
        ))
      ) : (
        <p className="font-title text-md">No items found in the gallery.</p>
      )}
    </div>
  );
};

export default BranchItemGallery;
