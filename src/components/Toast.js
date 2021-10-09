import { Toast as PrimeReactToast } from "primereact/toast";
import { compose, space, position, layout, typography } from "styled-system";
import styled from "styled-components";

export const Toast = styled(PrimeReactToast)`
  ${compose(space, position, layout, typography)};
`;
