import React, { FC } from "react";

interface BlockProps extends React.PropsWithChildren {
    title: string;
    className?: string;
}

const Block: FC<BlockProps> = ({ children, title, className }) => {
    return (
        <div className={`w-full flex-row overflow-x-auto ${className || ""}`}>
            <h2 className="sticky pl-0 -mt-[80px] top-0 z-20 left-4 font-modak text-white text-[70px] leading-20 ml-4 text-stroke">
                {title}
            </h2>
            <div className="relative gap-[10px] flex">{children}</div>
        </div>
    );
};

export default Block;
