import React, { FC } from "react";
import "./style.css";

interface CardProps {
    id: number;
    title: string;
    cover: string;
    description: string;
}
const Card: FC<CardProps> = ({ id, title, cover, description }) => {
    return (
        <div className="card">
            <img src={cover} alt={title} />
            <div className="details">
                <h2> {title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;
