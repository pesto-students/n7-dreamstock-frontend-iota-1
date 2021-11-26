import React from "react";
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
  ${compose(space, position, layout, typography, background)}
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  ${({ responsive }) =>
    responsive &&
    `@media (min-width: 576px) {
    width: 540px;
  }

  @media (min-width: 768px) {
    width: 720px;
  }

  @media (min-width: 992px) {
    width: 960px;
  }

  @media (min-width: 1200px) {
    width: 1140px;
    margin-right: auto;
    margin-left: auto;
   }
  `};

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
