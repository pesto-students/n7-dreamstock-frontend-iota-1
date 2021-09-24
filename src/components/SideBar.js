import { Sidebar as SideNav } from "primereact/sidebar";
import { compose, space, position, layout, typography } from "styled-system";
import styled from "styled-components";

export const SideBar = styled(SideNav)`
  ${compose(space, position, layout, typography)};
  background-color: var(--sidebar-bg);
  width: inherit;

  .p-sidebar-content {
    padding: 0;
  }

  .p-sidebar-header {
    display: none !important;
  }
`;
