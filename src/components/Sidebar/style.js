import { Sidebar as SideNav } from "primereact/sidebar";
import { compose, space, position, layout, typography } from "styled-system";
import styled from "styled-components";

export const SideBar = styled(SideNav)`
  background-color: var(--sidebar-bg);
  width: inherit;
  filter: drop-shadow(4px 4px 4px rgba(0,0,0,0.25));

  .p-sidebar-content {
    padding: 0;
  }

  // .p-sidebar-icon {
  //   display: none;
  // }

  ${compose(space, position, layout, typography)};
`;
