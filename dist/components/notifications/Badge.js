import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import styled from 'styled-components';
export const Badge = memo(({ children, label, ...props }) => {
    return _jsx(Container, { ...props, children: label?.toString() ?? children }, void 0);
});
const Container = styled.div `
  background: #f2f2f2;
  color: #7b7b7b;
  border-radius: 4px;
  float: left;
  font-size: 9px;
  margin: 0 10px 0 0;
  padding: 4px 6px 5px 6px;
  position: relative;
  text-transform: capitalize;
`;
//# sourceMappingURL=Badge.js.map