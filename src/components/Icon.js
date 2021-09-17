import React from "react";
import styled from "styled-components";
import { compose, space, position, layout, typography } from "styled-system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  ${compose(space, position, layout, typography)};
  ${({ rounded }) => rounded && `border-radius: 50%;`};
`;

export const Icon = (props) => {
  const { name } = props;

  return <StyledFontAwesomeIcon icon={name} {...props} />;
};
