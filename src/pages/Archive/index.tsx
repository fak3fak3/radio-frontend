import React, { useEffect } from "react";
import { Card, InputWithSuggestions, MultiSelect } from "../../components";
import "./style.css";
import { useUnit } from "effector-react";
import { $medias, getMedias } from "../../store/archive";

type ArchiveFindResult = {
    id: number;
    title: string;
    cover: string;
    description: string;
};

const ArchivePage = () => {
    const medias = useUnit($medias);
    const onGetMedias = useUnit(getMedias);

    useEffect(() => {
        onGetMedias();
    }, []);

    console.log(medias);

    return (
        <div className="content archive-page">
            <InputWithSuggestions />
            <div className="filters">
                <MultiSelect name="media" />
                <MultiSelect name="program" />
                <MultiSelect name="tag" />
            </div>
            <div className="cards">
                {medias.map((media) => (
                    <Card
                        key={media.id}
                        id={media.id!}
                        title={media.title}
                        cover={media.cover.path!}
                        description={media.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default ArchivePage;
