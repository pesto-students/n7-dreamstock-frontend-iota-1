import styled from "styled-components";
import { compose, space, position, layout, typography } from "styled-system";

const StyledSection = styled.section`
  ${compose(space, position, layout, typography)}
`;

export const Section = (props) => <StyledSection {...props} />;
