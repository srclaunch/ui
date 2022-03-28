import { css, SimpleInterpolation } from 'styled-components';
import { Visibility } from '../../types/appearance/visibility';

export function getOpacityStyle(visibility?: Visibility): SimpleInterpolation {
  if (!visibility) return null;

  if (visibility?.hidden === true || visibility?.visible === false) {
    return css`
      opacity: 0;
    `;
  }

  if (visibility?.opacity) {
    return css`
      opacity: ${visibility.opacity}%;
    `;
  }

  return css`
    opacity: 1;
  `;
}

export function getPointerEventsStyle(
  visibility?: Visibility,
): SimpleInterpolation {
  if (!visibility) return null;

  if (visibility?.hidden === true || visibility?.visible === false) {
    return css`
      pointer-events: none;
    `;
  }

  if (visibility?.opacity && visibility.opacity === 0) {
    return css`
      pointer-events: none;
    `;
  }

  return css`
    pointer-events: all;
  `;
}

export function getVisibilityStyle(
  visibility?: Visibility,
): SimpleInterpolation {
  if (!visibility) return null;

  if (visibility?.hidden === true || visibility?.visible === false) {
    return css`
      display: none;
      visibility: hidden;
    `;
  }

  if (visibility?.opacity && visibility.opacity === 0) {
    return css`
      display: none;
      visibility: hidden;
    `;
  }

  return css`
    visibility: visible;
  `;
}
export function getVisibilityStyles(
  visibility?: Visibility,
): SimpleInterpolation {
  return css`
    ${getOpacityStyle(visibility)}
    ${getPointerEventsStyle(visibility)}
    ${getVisibilityStyle(visibility)}
  `;
}

export const VisibilityStyles = css<{
  visibility?: Visibility;
}>`
  ${props => getVisibilityStyles(props.visibility)}
`;
