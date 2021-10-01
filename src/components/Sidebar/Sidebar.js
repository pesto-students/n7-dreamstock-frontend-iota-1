import React, { useState } from "react";
import { Div } from "../Div";
import { NavMenu } from "../NavMenu";
import {
    CardContent,
    CardHorizontalTransparent,
} from "../Card";
import { Image } from "../Image";
import { Icon } from "../Icon";

import FullLogo from "../../assets/images/FullLogo.png";
import { userCircle, wallet } from "../IconFonts";
import { SideBar as SideNav } from "./style";

const items = [
    {
        label: "",
        items: [
            {
                label: "Dashboard",
                icon: "pi pi-fw pi-briefcase",
                command: (e) => {
                    window.location.href = "/dashboard";
                },
            },
            {
                label: "Summary",
                icon: "pi pi-fw pi-th-large",
                command: (e) => {
                    window.location.href = "/summary";
                },
            },
            {
                label: "Passbook",
                icon: "pi pi-fw pi-book",
                command: (e) => {
                    window.location.href = "/passbook";
                },
            },
            {
                label: "Transactions",
                icon: "pi pi-fw pi-money-bill",
                command: (e) => {
                    window.location.href = "/transactions";
                },
            },
            {
                label: "Profile",
                icon: "pi pi-fw pi-user-edit",
                command: (e) => {
                    window.location.href = "/profile";
                },
            },
        ],
    },
];

const SideNavBar = (props) => {
    const [visibleLeft, setVisibleLeft] = useState(false);
    return (
        <SideNav
            modal={false}
            appendTo={"self"}
            visible={true}
            onHide={() => setVisibleLeft(false)}
            icons={
                <CardHorizontalTransparent pt={3}>
                    <Image src={FullLogo} height="42" />
                </CardHorizontalTransparent>
            }
            showCloseIcon={true}
            {...props}
        >
            <hr />
            <CardContent m={3}>
                <Div flexCenter>
                    <Icon name={userCircle} size="5x" />
                </Div>
            </CardContent>
            <hr />
            <NavMenu model={items} />
        </SideNav>
    );
};

export default SideNavBar;