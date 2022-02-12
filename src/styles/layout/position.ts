import { css } from 'styled-components';

import { getDepthZIndex } from '../../lib/css/depth/z-index';
import { getCSSMeasurementValue } from '../../lib/css/properties';
import { getOverflowStyle } from '../../lib/layout/overflow';
import { Amount, LayoutProps, PositionProps } from '../../types';

function getPositionProperty(
  value:
    | LayoutProps['bottom']
    | LayoutProps['left']
    | LayoutProps['right']
    | LayoutProps['top'],
): Amount | string | null | undefined {
  if (typeof value === 'number') {
    return getCSSMeasurementValue(value);
  }

  return value;
}

export const PositionStyles = css<PositionProps>`
  bottom: ${props => getPositionProperty(props.bottom) ?? 'auto'};
  left: ${props => getPositionProperty(props.left) ?? 'auto'};
  position: ${props => props.position ?? 'relative'};
  right: ${props => getPositionProperty(props.right) ?? 'auto'};
  top: ${props => getPositionProperty(props.top) ?? 'auto'};
`;
