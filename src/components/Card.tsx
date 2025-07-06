import React, { FC } from "react";

interface CardProps extends React.PropsWithChildren {
    key: number;
    isFirst: boolean;
}

const Card: FC<CardProps> = ({ isFirst }) => {
    return (
        <div
            className={`flex-none border aspect-3/2 w-2/5 ${isFirst && `ml-2`}`}
        >
            CAAARD
        </div>
    );
};

export default Card;
