import styled from "styled-components";
import { compose, space, position, layout, typography } from "styled-system";

const StyledDiv = styled.div`
  ${compose(space, position, layout, typography)}
  ${({ rounded }) => rounded && `border-radius: 50%;`};

  ${({ center }) =>
    center &&
    `display: flex;
     align-items: center;
     flex-flow: row wrap;
     justify-content: center;
  `};
`;

export const Div = (props) => <StyledDiv {...props} />;
