import { Dialog } from "primereact/dialog";
import { compose, space, position, layout, typography } from "styled-system";
import styled from "styled-components";

export const DialogPrimary = styled(Dialog)`
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
