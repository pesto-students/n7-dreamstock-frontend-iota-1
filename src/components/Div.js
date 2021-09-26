import styled from "styled-components";
import { compose, space, position, layout, typography } from "styled-system";

const StyledDiv = styled.div`
  -webkit-transition: width .5s ease-in-out;
  -moz-transition: width .5s ease-in-out;
  -o-transition: width .5s ease-in-out;
  transition: width .5s ease-in-out;

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
  `};

  ${({ flexCenter }) =>
    flexCenter &&
    `display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `};

  ${compose(space, position, layout, typography)}
`;

export const Div = (props) => <StyledDiv {...props} />;
