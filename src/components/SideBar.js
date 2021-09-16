import { Sidebar } from 'primereact/sidebar';
import { compose, space, position, layout, typography } from "styled-system";
import styled from "styled-components";

export const SideBar = styled(Sidebar)`
  ${compose(space, position, layout, typography)};
  background-color: var(--sidebar-bg);
`;
