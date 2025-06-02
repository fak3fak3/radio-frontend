import React from "react";
import "./style.css";
const Player = () => {
    return (
        <div className="player-wrapper">
            <div className="player-play-button">
                <svg className="player" viewBox="0 0 100 100">
                    <path d="M35 30 L35 70 L70 50 Z" fill="#FFFFFF" />
                </svg>
            </div>
        </div>
    );
};

export default Player;
