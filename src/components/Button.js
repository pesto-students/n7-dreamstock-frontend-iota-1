import styled from "styled-components";
import { compose, space, position, layout, typography } from "styled-system";
import { Button } from "primereact/button";

export const ButtonPrimary = styled(Button)`
  ${compose(space, position, layout, typography)};
  color: var(--title-color);
  font-weight: var(--semibold-weight);
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 5px;
  background-color: var(--primary-bg);
  border: 1px solid var(--outline-color);
  transition: all 0.6s;

  :not(a):not(.p-disabled):hover {
    background-color: var(--card-bg);
    color: var(--title-color);
  }
`;

export const ButtonSecondary = styled(ButtonPrimary)`
  background-color: var(--primary-bg);
  background-image: linear-gradient(
    90deg,
    var(--hover-color) 50%,
    var(--hover-secondary-color) 100%
  );

  :not(a):not(.p-disabled):hover {
    background-color: var(--hover-color);
    color: var(--title-color);
  }
`;

export const ButtonTertiary = styled(ButtonPrimary)`
  background-color: var(--title-color);
  color: var(--primary-bg);
`;

export const ButtonTransparent = styled(ButtonPrimary)`
  background-color: transparent;
  color: var(--title-color);
  border: 1px var(--title-color) solid;
`;
