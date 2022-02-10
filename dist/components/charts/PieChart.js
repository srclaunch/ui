import { jsx as _jsx } from "react/jsx-runtime";
// import { ResponsivePie } from '@nivo/pie';
import { memo } from 'react';
import styled from 'styled-components';
export const PieChart = memo(({ ...props }) => {
    // const data = [
    //   {
    //     color: 'rgba(238, 238, 238, 1)',
    //     id: 'unspent',
    //     label: 'Unspent',
    //     value: 180,
    //   },
    //   {
    //     color: 'rgba(40, 89, 55, 1)',
    //     id: 'spent',
    //     label: 'Spent',
    //     value: 32,
    //   },
    // ];
    return (_jsx(Container, { ...props }, void 0));
});
const Container = styled.div `
  height: 200px;
`;
//# sourceMappingURL=PieChart.js.map