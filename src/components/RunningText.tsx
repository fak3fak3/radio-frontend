import React, { useRef, useEffect, useState } from "react";

interface MarqueeProps extends React.PropsWithChildren {}

const Marquee: React.FC<MarqueeProps> = ({ children }) => {
    return (
        <div className="flex w-fit overflow-hidden items-ce">
            {Array.from({ length: 3 }, (_, i) => (
                <h1
                    key={i}
                    className="text-stroke  text-white self-center font-modak text-[200px] pr-[100px] leading-[0.85] h-[150px] uppercase select-none whitespace-nowrap overflow-hidden"
                    style={{
                        animation: `marquee ${20}s linear infinite`,
                    }}
                >
                    {children}
                </h1>
            ))}

            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%) }
          100% { transform: translateX(-100%) }
        }
      `}</style>
        </div>
    );
};

export default Marquee;
