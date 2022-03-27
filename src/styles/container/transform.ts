import { css, SimpleInterpolation } from 'styled-components';
import { getCSSMeasurementValue } from '../../lib/css/properties';
import { Transform } from '../../types/appearance/transform';

export function getTransformArgumentValue(
  transform?: Transform,
): string | null {
  if (!transform) return null;

  let cssValue = '';

  const { rotate, scale, skew, translate } = transform;

  if (rotate) {
    if (rotate.x && rotate.y && rotate.z) {
      cssValue += `rotate3d(${rotate.x}, ${rotate.y}, ${rotate.z}, ${rotate.angle}deg) `;
    } else if (rotate.x && rotate.y) {
      cssValue += `rotate3d(${rotate.x}, ${rotate.y}, ${rotate.angle}deg) `;
    } else {
      cssValue += `rotate(${rotate.angle}deg) `;
    }
  }

  if (scale) {
    if (scale.x && scale.y && scale.z) {
      cssValue += `scale3d(${scale.x}, ${scale.y}, ${scale.z}) `;
    } else if (scale.x && scale.y) {
      cssValue += `scale3d(${scale.x}, ${scale.y}) `;
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
    } else if (translate.x && !translate.y) {
      cssValue += `translateX(${getCSSMeasurementValue(translate.x)}) `;
    } else if (translate.y && !translate.x) {
      cssValue += `translateY(${getCSSMeasurementValue(translate.y)}) `;
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
    `}

    ${(transform?.rotate ||
      transform?.scale ||
      transform?.skew ||
      transform?.translate) &&
    css`
      transform: ${getTransformArgumentValue(transform) ?? 'none'};
    `}
  `;
}
export const TransformStyles = css<{
  transform?: Transform;
}>`
  ${props => getTransformStyles(props.transform)}
`;
