import { css } from 'styled-components';

import { getCSSMeasurementValue } from '../../lib/css/properties';
import { MarginProps } from '../../types';

export const MarginStyles = css<MarginProps>`
  ${props =>
    props.margin &&
    css`
      margin: ${getCSSMeasurementValue(props.margin) ?? 0};
    `};

  ${props =>
    props.marginBottom &&
    css`
      margin-bottom: ${getCSSMeasurementValue(props.marginBottom)};
    `};

  ${props =>
    props.marginLeft &&
    css`
      margin-left: ${getCSSMeasurementValue(props.marginLeft)};
    `};

  ${props =>
    props.marginRight &&
    css`
      margin-right: ${getCSSMeasurementValue(props.marginRight)};
    `};

  ${props =>
    props.marginTop &&
    css`
      margin-top: ${getCSSMeasurementValue(props.marginTop)};
    `};
`;
