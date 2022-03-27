import { css, SimpleInterpolation } from 'styled-components';
import { Visibility } from '../../types/appearance/visibility';

export function getVisibilityStyles(
  visibility?: Visibility,
): SimpleInterpolation {
  return css`
    ${visibility?.hidden === true &&
    css`
      visibility: hidden;
    `}

    ${visibility?.opacity &&
    css`
      opacity: ${visibility.opacity}%;
    `}
  `;
}

export const VisibilityStyles = css<{
  visibility?: Visibility;
}>`
  ${props => getVisibilityStyles(props.visibility)}
`;
