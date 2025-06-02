import React, { FC } from "react";
import "./style.css";
import { NavLink } from "react-router";
import { NavRoute, navRoutes } from "../../routes";

interface NavButtonProps extends NavRoute {}
const NavButton: FC<NavButtonProps> = ({ to, label }) => {
    return (
        <NavLink to={to} className="nav-button">
            {label}
        </NavLink>
    );
};

const Nav = () => {
    return (
        <div className="nav">
            {navRoutes.map((route) => (
                <NavButton key={route.to} {...route} />
            ))}
        </div>
    );
};

export default Nav;
