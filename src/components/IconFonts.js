import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faWallet } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { compose, space, position, layout, typography } from "styled-system";

export const FAIcon = styled(FontAwesomeIcon)`
  ${compose(space, position, layout, typography)};
`;

export const WalletIcon = (props) => <FAIcon icon={faWallet} {...props} />;

export const UserIcon = (props) => <FAIcon icon={faUser} {...props} />;
