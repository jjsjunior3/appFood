import React from "react";
import { LinkArea, LinkIcon } from "./styled";
import { Link, useLocation } from "react-router-dom";

const MenuItem = ({icon, Link }) => {
    const location = useLocation();

    let isActive = location.pathname == Link;

    return(
        <LinkArea active={isActive}>
            <LinkIcon src={icon}/>
        </LinkArea>
    );
}

export default MenuItem;