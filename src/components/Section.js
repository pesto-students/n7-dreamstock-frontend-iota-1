import styled from "styled-components";
import {
  compose,
  space,
  position,
  layout,
  typography,
  background,
} from "styled-system";

const StyledSection = styled.section`
  ${compose(space, position, layout, typography, background)}

  ${({ flexCenter }) =>
    flexCenter &&
    `display: flex;
   justify-content: space-around;
   flex-direction: row;
`};
`;

export const Section = (props) => <StyledSection {...props} />;
