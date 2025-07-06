import React, { FC } from "react";
import { NavLink } from "react-router";
import { NavRoute, navRoutes } from "../routes";

interface NavButtonProps extends NavRoute {}
const NavButton: FC<NavButtonProps> = ({ to, label }) => {
    return (
        <NavLink to={to}>
            <div className="py-[10px] px-[35px] border-r uppercase">
                {label}
            </div>
        </NavLink>
    );
};

const Nav = () => {
    return (
        <div className="flex z-100 bg-blue-bg border m-2 fixed left-0 right-0">
            {navRoutes.map((route) => (
                <NavButton key={route.to} {...route} />
            ))}
        </div>
    );
};

export default Nav;
