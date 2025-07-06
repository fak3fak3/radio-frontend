import React, { useEffect, useRef, useState } from "react";
import { Calendar, Card, Block, RunningText, Scene } from "../../components";
import { useUnit } from "effector-react";
import { $medias, getMedias } from "../../store/archive";

const MainPage = () => {
    const media = useUnit($medias);
    const getMedia = useUnit(getMedias);

    useEffect(() => {
        getMedia();
    }, []);

    console.log(media);

    return (
        <div>
            <RunningText>new season</RunningText>
            <Block title="GEMS">
                {media.map((item, i) => (
                    <Card key={i} isFirst={i === 0} />
                ))}
            </Block>
            <Calendar />
        </div>
    );
};

export default MainPage;
