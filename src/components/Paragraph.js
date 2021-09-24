import styled from "styled-components";
import { compose, space, position, layout, typography } from "styled-system";

const StyledParagraph = styled.p`
  margin: 1em 0;
  font-weight: var(--normal-weight);
  ${compose(space, position, layout, typography)}
`;

export const P = (props) => <StyledParagraph {...props} />;
