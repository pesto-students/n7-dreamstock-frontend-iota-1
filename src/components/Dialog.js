import { Dialog as PrimeDialog} from "primereact/dialog";
import { compose, space, position, layout, typography } from "styled-system";
import styled from "styled-components";

export const Dialog = styled(PrimeDialog)`
  ${compose(space, position, layout, typography)};
  color: var(--title-color);
  .p-dialog-header,
  .p-dialog-content,
  .p-dialog-footer {
    background: var(--card-bg);
  }

  .p-dialog-content {
    font-size: var(--fs-h5);
  }
`;
