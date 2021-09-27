import { Menu } from "primereact/menu";
import { compose, space, position, layout, typography } from "styled-system";
import styled from "styled-components";

export const NavMenu = styled(Menu)`
  ${compose(space, position, layout, typography)};
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 0;
  width: 100%;

  .p-submenu-header {
    background: transparent;
    font-size: var(--fs-h4);
  }

  .p-menuitem {
    margin: 5px 0;
  }

  .p-menuitem-link {
    font-size: var(--fs-h4);
    padding: 20px;
    background: linear-gradient(
      90deg,
      var(--gradient-color-primary) 0%,
      var(--gradient-color-secondary) 100%
    );
    border-left: 3px solid transparent;
    transition: all 0.6s;
    transition-property: all;
    transition-duration: 0.6s;
    transition-timing-function: ease;
    transition-delay: 0s;
    z-index: 1;
  }

  .p-menuitem-link:not(.p-disabled):hover {
    color: #f5f5ff;
    border-left: 3px solid var(--hover-color);
  }

  .p-menuitem-link:not(.p-disabled):active {
    border-left: 3px solid var(--hover-color);
    background: linear-gradient(
      90deg,
      var(--hover-color) 0%,
      var(--gradient-color-secondary) 100%
    );
  }
`;
