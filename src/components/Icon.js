import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { compose, space, position, layout, typography } from "styled-system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  ${compose(space, position, layout, typography)};
  ${({ rounded }) => rounded && `border-radius: 50%;`};
  ${({ topright }) =>
    topright &&
    `position: fixed;
     top:5px;
     right:5px;
     cursor: pointer;
  `};
`;

const Icon = (props) => {
  const { name } = props;
  return <StyledFontAwesomeIcon icon={name} {...props} />;
};

Icon.propTypes = {
  name: PropTypes.any,
};

export default Icon;
