import { memo, ReactElement } from 'react';
import styled from 'styled-components';

import { Color, SizeProps } from '../../types';

type RadialGaugeProps = {
  color: Color;
  size: number;
  value: number;
} & SizeProps;

export const RadialGauge = memo(
  ({ color, size, value }: RadialGaugeProps): ReactElement => {
    const getGaugePercent = () => {
      const normalized = 198 - value * 1.98;

      return normalized >= 0 ? normalized : 0;
    };

    const gaugePercent = getGaugePercent();

    return (
      <Container color={color} size={size} value={gaugePercent}>
        <svg viewBox="0 0 105 105">
          <path className="grey" d="M30,90 A40,40 0 1,1 80,90" fill="none" />
          <path
            id="value"
            fill="none"
            className="value"
            d="M30,90 A40,40 0 1,1 80,90"
          />
        </svg>
      </Container>
    );
  },
);

const Container = styled.div<{ size: number; value: number }>`
  margin: 0 auto;
  position: relative;
  width: ${props => props.size + 9}px;

  svg {
    display: inline-block;
    height: ${props => props.size}px;
    position: relative;
    top: -4px;
    width: ${props => props.size}px;
  }

  path {
    stroke-linecap: round;
    stroke-width: 12;
  }

  path.grey {
    stroke: #eee;
  }

  path.value {
    stroke: rgba(162, 192, 80, 1);
    stroke: rgba(${props => props.color});
    stroke-dasharray: 198;
    stroke-dashoffset: ${props => props.value};
    transition: all 0.3s ease-out;
  }
`;
