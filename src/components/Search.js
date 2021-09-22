import styled from "styled-components";
import { compose, space, position, layout, typography } from "styled-system";
import { AutoComplete } from "primereact/autocomplete";

export const Search = styled(AutoComplete)`
  ${compose(space, position, layout, typography)}
  background-color: var(--primary-bg);
  color: var(--title-color);
  border-radius: 5px;
  border: 1px solid var(--outline-color);
  width: 100%;
`;
