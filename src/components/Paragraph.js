import styled from "styled-components";
import { compose, space, position, layout, typography } from "styled-system";

const StyledParagraph = styled.p`
  ${compose(space, position, layout, typography)}
  margin: 1em 0;
`;

export const P = (props) => <StyledParagraph {...props} />;
