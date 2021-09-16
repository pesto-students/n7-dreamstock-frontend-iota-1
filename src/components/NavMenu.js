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

  .p-sidebar-content {
    padding: 0;
  }

  .p-submenu-header {
    background: transparent;
    font-size: var(--fs-h4);
  }

  .p-menuitem {
    margin: 5px 0;
    background-image: linear-gradient(
      90deg,
      var(--gradient-color-primary) 0%,
      var(--gradient-color-secondary) 100%
    );
  }
`;
