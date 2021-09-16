import styled from "styled-components";
import { compose, space, position, layout, typography } from "styled-system";

const StyledDiv = styled.div`
  ${compose(space, position, layout, typography)}
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px) {
    width: 540px;
  }

  @media (min-width: 768px) {
    width: 720px;
  }

  @media (min-width: 992px) {
    width: 960px;
  }
  
  @media (min-width: 1200px) {
    width: 1140px;
  }
`;

export const Container = (props) => (
  <StyledDiv {...props} className={"container"} />
);
