import { css, SimpleInterpolation } from 'styled-components';
import { getCSSMeasurementValue } from '../../lib/css/properties';
import { Transform } from '../../types/appearance/transform';

export function getTransformArgumentValue(transform?: Transform): string {
  if (!transform) return '';

  let cssValue = '';

  const { rotate, scale, skew, translate } = transform;

  if (rotate) {
    if (rotate.x && rotate.y && rotate.z) {
      cssValue += `rotate3d(${rotate.x}, ${rotate.y}, ${rotate.z}, ${rotate.angle}) `;
    } else if (rotate.x && rotate.y) {
      cssValue += `rotate3d(${rotate.x}, ${rotate.y}, ${rotate.angle}) `;
    } else {
      cssValue += `rotate(${rotate.angle}) `;
    }
  }

  if (scale) {
    if (scale.x && scale.y && scale.z) {
      cssValue += `scale3d(${scale.x}, ${scale.y}, ${scale.z}) `;
    } else if (scale.x && scale.y) {
      cssValue += `scale3d(${scale.x}, ${scale.y}, ${scale.x}) `;
    } else {
      cssValue += `scale(${scale.x}) `;
    }
  }

  if (skew) {
    if (skew.x && skew.y) {
      cssValue += `skew(${skew.x}, ${skew.y}) `;
    } else {
      cssValue += `skew(${skew.x}) `;
    }
  }

  if (translate) {
    if (translate.x && translate.y) {
      cssValue += `translate(${getCSSMeasurementValue(
        translate.x,
      )}, ${getCSSMeasurementValue(translate.y)}) `;
    } else {
      cssValue += `translate(${getCSSMeasurementValue(translate.x)}) `;
    }
  }

  return cssValue;
}

export function getTransformStyles(transform?: Transform): SimpleInterpolation {
  if (!transform) return;

  return css`
    ${transform?.origin &&
    css`
      transform-origin: ${getCSSMeasurementValue(transform.origin)};
    `};

    ${(transform?.rotate ||
      transform?.scale ||
      transform?.skew ||
      transform?.translate) &&
    css`
      transform: ${getTransformArgumentValue(transform)};
    `};
  `;
}
export const TransformStyles = css<{
  transform?: Transform;
}>`
  ${props => getTransformStyles(props.transform)};
`;
