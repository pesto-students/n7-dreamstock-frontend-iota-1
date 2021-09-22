import { ProgressBar as PrimeProgressBar } from "primereact/progressbar";
import { compose, space, position, layout, typography } from "styled-system";
import styled from "styled-components";

export const ProgressBar = styled(PrimeProgressBar)`
  ${compose(space, position, layout, typography)};

  background: var(--primary-bg);

  .p-progressbar-value {
    background: var(--hover-color);
  }
`;
