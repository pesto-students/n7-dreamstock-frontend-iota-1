import styled from "styled-components";
import { compose, space, position, layout, typography } from "styled-system";

const StyledDiv = styled.div`
  ${compose(space, position, layout, typography)}
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  // @media (min-width: 576px) {
  //   width: 540px;
  // }

  // @media (min-width: 768px) {
  //   width: 720px;
  // }

  // @media (min-width: 992px) {
  //   width: 960px;
  // }

  // @media (min-width: 1920px) {
  //   width: 1920px;
  //   margin-right: auto;
  //   margin-left: auto;
  // }

  ${({ flexCenter }) =>
    flexCenter &&
    `display: flex;
     justify-content: space-around;
     flex-direction: row;
  `};

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
     align-items: flex-start;
     flex-wrap: wrap
`};
`;

export const Container = (props) => (
  <StyledDiv {...props} className={"container"} />
);
