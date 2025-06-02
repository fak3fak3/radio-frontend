import React, { FC, useEffect, useState } from "react";
import "./style.css";
import { useUnit } from "effector-react";
import { $isAnySelectOpen, toggleSelect } from "../../store/ui";

const SUGGESTIONS_MOCK = [
    { id: 1, name: "Suggestion 1" },
    { id: 2, name: "Suggestion 2" },
    { id: 3, name: "Suggestion 3" },
    { id: 4, name: "Suggestion 4" },
    { id: 5, name: "Suggestion 5" },
];

type Suggestion = {
    id: number;
    name: string;
};

interface MultiSelectProps {
    name: string;
}
const MultiSelect: FC<MultiSelectProps> = ({ name }) => {
    const [opened, setOpened] = useState(false);
    const [selectedSuggestion, setSelectedSuggestion] = useState<number | null>(
        null
    );
    const [suggestions, setSuggestions] =
        useState<Suggestion[]>(SUGGESTIONS_MOCK);

    const selectsCount = useUnit($isAnySelectOpen);
    const isAnySelectOpen = selectsCount < 0;
    const onOpenAnySelect = useUnit(toggleSelect);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest(".multiselect")) {
                setOpened(false);
                onOpenAnySelect(1);
            }
        };
        if (opened) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [opened]);

    function toggleSelectClick(e: React.MouseEvent) {
        if (isAnySelectOpen) {
            setTimeout(() => {
                document.body.click();
            }, 0);
        } else {
            setOpened((prev) => !prev);
            onOpenAnySelect(opened ? 1 : -1);
        }
    }

    return (
        <div className={`multiselect`}>
            <div
                className={`selected  ${opened ? "open" : ""}`}
                onClick={toggleSelectClick}
            >
                {name}
            </div>
            {opened && (
                <div className="suggestions">
                    {suggestions.map((suggestion) => (
                        <div className="item" key={suggestion.id}>
                            {suggestion.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MultiSelect;
