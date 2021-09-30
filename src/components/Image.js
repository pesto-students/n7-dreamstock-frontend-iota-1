import styled from "styled-components";
import { compose, space, position, layout, typography } from "styled-system";

const StyledImage = styled.img`
  ${compose(space, position, layout, typography)}
`;

export const Image = (props) => <StyledImage {...props} />;
