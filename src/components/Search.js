import styled from "styled-components";
import { compose, space, position, layout, typography } from "styled-system";
import { AutoComplete } from "primereact/autocomplete";

export const Search = styled(AutoComplete)`
  ${compose(space, position, layout, typography)}
  width: 100%;

  .p-inputtext {
    background-color: var(--primary-bg);
    color: var(--title-color);
    border-radius: 5px;
    border: 1px solid var(--outline-color);
    width: 100%;
    font-size: var(--fs-h5);
    font-weight: var(--normal-weight);
    color: var(--title-color);
    padding: 13px 60px 13px 32px;
    background-color: #393f74;
    border: none;
    outline: none;
    border-radius: 10px;
  }
`;
