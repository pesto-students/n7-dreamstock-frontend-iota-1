import { InputText } from "primereact/inputtext";
import { compose, space, position, layout, typography } from "styled-system";
import styled from "styled-components";

const StyledInput = styled(InputText)`
  ${compose(space, position, layout, typography)};
  background-color: var(--primary-bg);
  color: var(--title-color);
  border-radius: 5px;
  border: 1px solid var(--outline-color);
  width: 100%;
`;

export const Input = (props) => <StyledInput {...props} />;
