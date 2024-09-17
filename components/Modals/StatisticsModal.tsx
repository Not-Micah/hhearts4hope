"use client";

import Modal from "../Modal";
import InputField from "../InputField";

import useStatisticsModal from "@/hooks/useStatisticsModal";
import { editStatistic } from "@/utils/database";
import { useState, useEffect } from "react";

const StatisticsModal = () => {
    const { onClose, isOpen, currentStatistic, updated } = useStatisticsModal();

    const [number, setNumber] = useState("");
    const [label, setLabel] = useState("");

    useEffect(() => {
        setNumber(currentStatistic?.number || "");
        setLabel(currentStatistic?.label || "");
    }, [updated]);

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (number && label && currentStatistic) {
            editStatistic(currentStatistic.index, label, number);
            onClose();
        } 
    };

    return (
        <Modal title="Manage Statistic" isOpen={isOpen} onChange={onChange}>
            <form
                className="flex flex-col justify-center items-center gap-y-4"
                onSubmit={handleSubmit}
            >
                <InputField
                    label="Number"
                    placeholder="Number..."
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
                <InputField
                    label="Label"
                    placeholder="Label..."
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                />
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

export default StatisticsModal;
