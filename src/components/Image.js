import styled from "styled-components";
import { compose, space, position, layout, typography } from "styled-system";

const StyledImage = styled.img`
  ${compose(space, position, layout, typography)}
  ${({ rounded }) => rounded && `border-radius: 50%;`};
`;

export const Image = (props) => <StyledImage {...props} />;
