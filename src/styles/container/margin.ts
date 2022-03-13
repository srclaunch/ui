import { css } from 'styled-components';
import { getCSSMeasurementValue } from '../../lib/css/properties';

import { Margin } from '../../types';

export const MarginStyles = css<{
  margin?: Margin;
}>`
  ${props =>
    props.margin?.all &&
    css`
      margin: ${getCSSMeasurementValue(props.margin.all)};
    `};

  ${props =>
    props.margin?.bottom &&
    css`
      margin-bottom: ${getCSSMeasurementValue(props.margin.bottom)};
    `};

  ${props =>
    props.margin?.left &&
    css`
      margin-left: ${getCSSMeasurementValue(props.margin.left)};
    `};

  ${props =>
    props.margin?.right &&
    css`
      margin-right: ${getCSSMeasurementValue(props.margin.right)};
    `};

  ${props =>
    props.margin?.top &&
    css`
      margin-top: ${getCSSMeasurementValue(props.margin.top)};
    `};
`;
