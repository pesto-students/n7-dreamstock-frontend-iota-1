import styled from "styled-components";
import { compose, space, position, layout, typography } from "styled-system";

const StyledImage = styled.img`
  ${compose(space, position, layout, typography)}
`;

export const Image = (props) => (
  <StyledImage
    {...props}
    onError={(e) =>
      (e.target.src =
        "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
    }
    height="40"
  />
);
