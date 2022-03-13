import { css } from 'styled-components';
import { getCSSMeasurementValue } from '../../lib/css/properties';
import { BorderColors, BorderRadius } from '../../types';
import { getBorderRadiusValue } from './border-radius';
/* border-radius: calc(${props => props.borderRadius} + 3px); */
/* border-color: rgb(${() => BorderColors.Primary}); */

export const FocusStyles = css<{
  borderRadius?: BorderRadius;
  focus?: any;
  focused?: boolean;
}>`
  &:before {
    transition: opacity 0.2s ease-in-out;
  }

  ${props =>
    props.focused &&
    css`
      outline: none;

      &:before {
        bottom: -4px;
        content: '';
        display: block;
        border-color: rgb(${BorderColors.Primary});
        border-radius: ${getBorderRadiusValue(props.borderRadius)};
        border-style: solid;
        border-width: 2px;
        opacity: ${props.focused ? 1 : 0};
        left: -4px;
        position: absolute;
        pointer-events: none;
        right: -4px;
        top: -4px;
        transition: opacity 0.2s ease-in-out;
        /* z-index: 0; */
      }

      &:focus {
        &:before {
          opacity: 1;
        }
      }
    `};
`;
