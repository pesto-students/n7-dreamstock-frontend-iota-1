import React from "react";
import PropTypes from 'prop-types';
import { Squash as Hamburger } from "hamburger-react";
import { ButtonPrimary, ButtonSecondary, ButtonTransparent } from "../Button";
import { wallet } from "../IconFonts";
import { Menubar } from "./style";
import { Div } from "../Div";
import { Image } from "../Image";
import Icon from "../Icon";
import { Span } from "../Span";
import { useDispatch, useSelector } from "react-redux";
import FullLogo from "../../assets/images/FullLogo.png";
import { logoutUser } from "../../store/actions/authAction";
import { useHistory } from "react-router";

const Header = (props) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { wallet_balance } = useSelector((state) => state.auth.user);
  const history = useHistory();
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

  const startBefore = (
    <Image
      src={FullLogo}
      height={["30", "40"]}
      onClick={() => {
        window.location.href = "/";
      }}
    />
  );
  const startAfter = (
    <Span display={props.visibleLeft ? "none" : "block"}>
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
        p={[2, 3]}
        onClick={() => {
          history.push("/login");
        }}
      />
      <ButtonSecondary
        label="Sign Up"
        p={[2, 3]}
        onClick={() => {
          history.push("/signup");
        }}
      />
    </Div>
  );
  const endAfter = (
    <Div>
      <ButtonTransparent
        label={
          <Span>
            <Icon name={wallet} />{" "}
            <Span color={"title"}>
              {Number(wallet_balance).toFixed(2) + " INR"}
            </Span>
          </Span>
        }
        mr={3}
        p={[2, 3]}
      />
      <ButtonSecondary
        label="Log Out"
        p={[2, 3]}
        onClick={() => dispatch(logoutUser())}
      />
    </Div>
  );

  return (
    <Div>
      <Menubar
        hideBurger={isAuthenticated}
        model={isAuthenticated ? itemsAfter : itemsBefore}
        start={isAuthenticated ? startAfter : startBefore}
        end={isAuthenticated ? endAfter : endBefore}
      />
    </Div>
  );
};

Header.propTypes = {
  handleSideBarToggle: PropTypes.any,
  visibleLeft: PropTypes.any,
};

export default Header;
