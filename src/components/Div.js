import styled from "styled-components";
import { compose, space, position, layout, typography } from "styled-system";

const StyledDiv = styled.div`
  ${compose(space, position, layout, typography)}
`;

export const Div = (props) => <StyledDiv {...props} />;
