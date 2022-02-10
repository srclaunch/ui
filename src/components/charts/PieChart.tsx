// import { ResponsivePie } from '@nivo/pie';
import { memo, ReactElement } from 'react';
import styled from 'styled-components';

import { ContainerProps, DimensionProps } from '../../types';

type PieChartProps = ContainerProps<HTMLDivElement, DimensionProps>;

export const PieChart = memo(({ ...props }: PieChartProps): ReactElement => {
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

  return (
    <Container {...props}>
      {/* <ResponsivePie
        data={data}
        margin={{ bottom: 80, left: 80, right: 80, top: 40 }}
        startAngle={130}
        endAngle={-130}
        innerRadius={0.5}
        padAngle={0.7}
        colors={{ datum: 'color' }}
        borderWidth={0}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        defs={[
          {
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            id: 'dots',
            padding: 1,
            size: 4,
            stagger: true,
            type: 'patternDots',
          },
        ]}
        fill={[
          {
            id: 'dots',
            match: {
              id: 'spent',
            },
          },
        ]}
      /> */}
    </Container>
  );
});

const Container = styled.div`
  height: 200px;
`;
