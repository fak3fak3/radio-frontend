import React, { useEffect } from "react";
import { InputWithSuggestions } from "../../components";
import { useUnit } from "effector-react";
import { $medias, getMedias } from "../../store/archive";

const ArchivePage = () => {
    const medias = useUnit($medias);
    const onGetMedias = useUnit(getMedias);

    useEffect(() => {
        onGetMedias();
    }, []);

    console.log(medias);

    return (
        <div>
            <div>{medias.map((media) => null)}</div>
        </div>
    );
};

export default ArchivePage;
