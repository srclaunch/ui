import { css, SimpleInterpolation } from 'styled-components';
import { getCSSMeasurementValue } from '../../lib/css/properties';

import { Padding } from '../../types';

export const PaddingStyles = css<{
  padding?: Padding;
}>`
  ${props =>
    props.padding?.all &&
    css`
      padding: ${getCSSMeasurementValue(props.padding.all)};
    `};

  ${props =>
    props.padding?.bottom &&
    css`
      padding: ${getCSSMeasurementValue(props.padding.bottom)};
    `};

  ${props =>
    props.padding?.left &&
    css`
      padding: ${getCSSMeasurementValue(props.padding.left)};
    `};

  ${props =>
    props.padding?.right &&
    css`
      padding: ${getCSSMeasurementValue(props.padding.right)};
    `};

  ${props =>
    props.padding?.top &&
    css`
      padding: ${getCSSMeasurementValue(props.padding.top)};
    `};
`;
