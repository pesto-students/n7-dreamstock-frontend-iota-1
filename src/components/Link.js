import React from "react";
import styled from "styled-components";
import { compose, space, position, layout, typography } from "styled-system";

const StyledAnchor = styled.a`
  ${compose(space, position, layout, typography)}
  cursor: pointer;
  color: var(--link-color);
`;

export const A = (props) => <StyledAnchor {...props} />;
