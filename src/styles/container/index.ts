import { css, SimpleInterpolation } from 'styled-components';
import { ContainerProps } from '../../components/layout/Container';
import { getAlignmentStyles } from './alignment';
import { getAnimationStyles } from './animation';
import { getBackgroundStyles } from './background';
import { getBorderStyles } from './border';
import { getBorderRadiusStyles } from './border-radius';
import { getCursorStyles } from './cursor';
import { getDepthStyles } from './depth';
import { getEventStyles } from './events';
import { getMarginStyles } from './margin';
import { getPaddingStyles } from './padding';
import { getPositionStyles } from './position';
import { getShadowStyles } from './shadow';
import { getSizeStyles } from './size';
import { getStatesStyles } from './states';
import { getVisibilityStyles } from './visibility';

export const getContainerStyles = (
  props: ContainerProps,
): SimpleInterpolation => {
  return css`
    ${getAlignmentStyles(props.alignment)};
    ${getAnimationStyles(props.animations)};
    ${getBackgroundStyles(props.background)};
    ${getBorderStyles(props.border)};
    ${getBorderRadiusStyles(props.borderRadius)};
    ${getCursorStyles(props.cursor)};
    ${getDepthStyles(props.depth)};
    ${getEventStyles(props.events)};
    ${getMarginStyles(props.margin)};
    ${getPaddingStyles(props.padding)};
    ${getPositionStyles(props.position)};
    ${getShadowStyles(props.shadow)};
    ${getSizeStyles(props.size)};
    ${getVisibilityStyles(props.visibility)};

    transition: opacity 0.13s ease-in-out, background 0.13s ease-in-out,
      background-color 0.13s ease-in-out, border-radius 0.13s ease-in-out,
      border-bottom-left-radius 0.13s ease-in-out,
      border-bottom-right-radius 0.13s ease-in-out,
      border-top-left-radius 0.13s ease-in-out,
      border-top-right-radius 0.13s ease-in-out, border 0.13s ease-in-out,
      border-color 0.13s ease-in-out, box-shadow 0.13s ease-in-out,
      color 0.13s ease-in, transform 0.13s ease-in-out;
  `;
};

export const ContainerStyles = css<ContainerProps>`
  ${props => getContainerStyles(props)};
`;