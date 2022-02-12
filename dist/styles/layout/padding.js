import { css } from 'styled-components';
import { getCSSMeasurementValue } from '../../lib/css/properties';
export const PaddingStyles = css `
  ${props => props.padding &&
    css `
      padding: ${getCSSMeasurementValue(props.padding) ?? 0};
    `};

  ${props => props.paddingBottom &&
    css `
      padding-bottom: ${getCSSMeasurementValue(props.paddingBottom)};
    `};

  ${props => props.paddingLeft &&
    css `
      padding-left: ${getCSSMeasurementValue(props.paddingLeft)};
    `};

  ${props => props.paddingRight &&
    css `
      padding-right: ${getCSSMeasurementValue(props.paddingRight)};
    `};

  ${props => props.paddingTop &&
    css `
      padding-top: ${getCSSMeasurementValue(props.paddingTop)};
    `};
`;
//# sourceMappingURL=padding.js.map