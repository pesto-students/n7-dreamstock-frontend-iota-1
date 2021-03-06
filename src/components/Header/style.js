import { Menubar as PrimeMenubar } from "primereact/menubar";
import { compose, space, position, layout, typography } from "styled-system";
import styled from "styled-components";

export const Menubar = styled(PrimeMenubar)`
  ${compose(space, position, layout, typography)};
  color: var(--title-color);
  background: var(--secondary-bg);

  ${({ hideBurger }) =>
    hideBurger === true &&
    `.p-menubar-button {
     display: none;
  }`}

  .p-menubar-root-list {
    background: var(--secondary-bg);
  }

  .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-text {
    color: var(--title-color);
    text-transform: uppercase;
    transition: all 0.6s;
  }

  .p-menubar-root-list
    > .p-menuitem
    > .p-menuitem-link:not(.p-disabled):hover
    .p-menuitem-text {
    color: var(--hover-color);
  }
`;
