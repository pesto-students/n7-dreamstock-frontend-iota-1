import { compose, space, position, layout, typography } from "styled-system";
import styled from "styled-components";

const StyledTable = styled.table`
  ${compose(space, position, layout, typography)};
`;

const StyledTd = styled.td`
  ${compose(space, position, layout, typography)};
`;

const StyledTr = styled.tr`
  padding: 10px;
  ${compose(space, position, layout, typography)};
`;

const StyledTh = styled.th`
  ${compose(space, position, layout, typography)};
  text-align: left;
`;

export const Table = (props) => <StyledTable {...props} />;

export const Th = (props) => <StyledTh {...props} />;

export const Td = (props) => <StyledTd {...props} />;

export const Tr = (props) => <StyledTr {...props} />;
