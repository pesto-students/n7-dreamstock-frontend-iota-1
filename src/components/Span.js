import styled from "styled-components";
import { compose, space, position, layout, typography } from "styled-system";

const StyledSpan = styled.span`
  ${compose(space, position, layout, typography)}
  color: ${({ color }) =>
    color === "green"
      ? "var(--green-color)"
      : color === "red"
      ? "var(--red-color)"
      : color === "title"
      ? "var(--title-color)"
      : "var(--user-text)"};

  font-weight: ${({ fontWeight }) =>
    fontWeight === "light" ? "var(--light-weight)" : "var(--normal-weight)"};
`;

export const Span = (props) => <StyledSpan {...props} />;
