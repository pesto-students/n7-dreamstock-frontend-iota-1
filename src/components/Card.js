import { Card as PrimeCard } from "primereact/card";
import styled from "styled-components";
import { compose, space, position, layout, typography } from "styled-system";

export const Card = styled(PrimeCard)`
  ${compose(space, position, layout, typography)};
  background-color: var(--card-bg);
  color: var(--title-color);
  border-radius: 5px;
`;

export const CardContent = styled(Card)`
font-weight: bold;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  .p-card-body {
    width: 100%;
  }

  ${({ flexCenter }) =>
    flexCenter &&
    `display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `};
`;

export const CardHorizontal = styled(CardContent)`
  width: 100%;
  background-color: var(--primary-bg);
  .p-card-body {
    padding: 0;
  }
  .p-card-body .p-card-content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .p-card-content {
    padding: 0;
  }
`;

export const CardHorizontalTransparent = styled(CardHorizontal)`
  background-color: transparent;
  box-shadow: none;
`;

export const CardFooter = styled(CardHorizontal)`
  background-color: var(--secondary-bg);
  font-weight: var(--light-weight);
  font-size: var(--para-font);
  border-top: 1px var(--card-bg) solid;
  filter: none;
  border-radius: 0 0 5px 5px;
  font-size: var(--fs-micro);

  .p-card-body .p-card-content {
    justify-content: space-between;
  }

  .p-card-content {
    padding-top: 1em;
    padding-bottom: 1em;
  }
`;
