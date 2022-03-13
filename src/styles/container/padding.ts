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
      padding-bottom: ${getCSSMeasurementValue(props.padding.bottom)};
    `};

  ${props =>
    props.padding?.left &&
    css`
      padding-left: ${getCSSMeasurementValue(props.padding.left)};
    `};

  ${props =>
    props.padding?.right &&
    css`
      padding-right: ${getCSSMeasurementValue(props.padding.right)};
    `};

  ${props =>
    props.padding?.top &&
    css`
      padding-top: ${getCSSMeasurementValue(props.padding.top)};
    `};
`;
