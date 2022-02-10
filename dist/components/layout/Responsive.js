import { jsx as _jsx } from "react/jsx-runtime";
import { memo } from 'react';
import styled from 'styled-components';
export const Responsive = memo(({ children }) => {
    return _jsx(Container, { children: children }, void 0);
});
const Container = styled.div `
  /* padding: 0 15px; */

  /* @media (min-width: 480px) {
    padding: 0 25px;
  }

  @media (min-width: 992px) {
    margin: 0 auto;
    padding: 0 50px;
    width: 960px;
  }

  @media (min-width: 1200px) {
    width: 1160px;
  } */
`;
//# sourceMappingURL=Responsive.js.map