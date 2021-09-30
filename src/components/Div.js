import styled from "styled-components";
import {
  compose,
  space,
  position,
  layout,
  typography,
  background,
} from "styled-system";

const StyledDiv = styled.div`
  // -webkit-transition: width 1s ease-in-out;
  // -moz-transition: width 1s ease-in-out;
  // -o-transition: width 1s ease-in-out;
  // transition: width 1s ease-in-out;

  ${({ rounded }) => rounded && `border-radius: 50%;`};

  ${({ flexColumn }) =>
    flexColumn &&
    `display: flex;
     flex-direction: column;
     justify-content: space-between;
  `};

  ${({ flexRow }) =>
    flexRow &&
    `display: flex;
     flex-direction: row;
     justify-content: space-between;
     flex-wrap: wrap;
  `};

  ${({ flexCenter }) =>
    flexCenter &&
    `display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `};

  ${({ flexLeft }) =>
    flexLeft &&
    `display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
  `};

  ${compose(space, position, layout, typography, background)}
`;

export const Div = (props) => <StyledDiv {...props} />;
