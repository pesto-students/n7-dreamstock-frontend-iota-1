import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import {
    ButtonPrimary,
    ButtonSecondary,
    ButtonTransparent,
} from "../Button";
import { userCircle, wallet } from "../IconFonts";
import { Menubar} from './style'
import { Div } from "../Div";
import { Image } from "../Image";
import { Icon } from "../Icon";
import {Span} from '../Span';
import { useDispatch, useSelector } from "react-redux";

import FullLogo from "../../assets/images/FullLogo.png";
import { logoutUser } from "../../store/actions/authAction";
const Header = (props) => {
    const {isAuthenticated} = useSelector((state)=>state.auth)
    const dispatch = useDispatch()

    const itemsBefore = [
        {
            label: "Home",
        },
        {
            label: "About Us",
        },
        {
            label: "How To Play",
        },
        {
            label: "FAQ",
        },
        {
            label: "Contact Us",
        },
    ];
    const itemsAfter = [];

    const startBefore = <Image src={FullLogo} height="40" />;
    const startAfter = (
        <Span>
            <Hamburger
                duration={0.8}
                toggled={props.visibleLeft}
                toggle={() => props.handleSideBarToggle()}
            />
            {/* <Image src={FullLogo} height="40" /> */}
        </Span>
    );

    const endBefore = (
        <Div>
            <ButtonPrimary
                label="Log In"
                mr={3}
                p={3}
            />
            <ButtonSecondary label="Sign Up" p={3} />
        </Div>
    );
    const endAfter = (
        <Div>
            <ButtonTransparent
                label="1000.00 INR"
                mr={3}
            />
            <ButtonTransparent
                label={<Icon name={wallet} size="2x" />}
                mr={3}
                p={2}
                onClick={()=>dispatch(logoutUser())}
            />
            <Div display={"inline-block"}>
                <Icon name={userCircle} size="3x" />
                <Span display={"inline-block"} ml={2} color={"title"}>
                    User Name
          </Span>
            </Div>
        </Div>
    );

    return (
        <Div>
            <Menubar
                minHeight={"8vh"}
                model={isAuthenticated ? itemsAfter : itemsBefore}
                start={isAuthenticated ? startAfter : startBefore}
                end={isAuthenticated ? endAfter : endBefore}
            />
        </Div>
    );
};

export default Header