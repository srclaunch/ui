import { css, SimpleInterpolation } from 'styled-components';
import { ContainerProps } from '../../components/layout/Container';
import { Amount } from '../../types';
import { getAlignmentStyles } from './alignment';
import { getAnimationStyles } from './animation';
import { getBackgroundStyles } from './background';
import { getBorderStyles } from './border';
import { getBorderRadiusStyles } from './border-radius';
import { getCursorStyles } from './cursor';
import { getDepthStyles } from './depth';
import { getMarginStyles } from './margin';
import { getPaddingStyles } from './padding';
import { getPositionStyles } from './position';
import { getShadowStyles } from './shadow';
import { getSizeStyles } from './size';
import { getFocusedOutlineColor } from './states';
import { getTransformStyles } from './transform';
import { getVisibilityStyles } from './visibility';

export const getContainerStyles = (
  props: ContainerProps,
): SimpleInterpolation => {
  const {
    alignment,
    animations,
    background,
    border,
    borderRadius,
    cursor,
    depth,
    margin,
    padding,
    position,
    shadow,
    size,
    transform,
    visibility,
  } = props || {};

  return css`
    ${alignment && getAlignmentStyles(alignment)}
    ${animations && getAnimationStyles(animations)}
    ${background && getBackgroundStyles(background)}
    ${border && getBorderStyles(border)}
    ${borderRadius && getBorderRadiusStyles(borderRadius)}
    ${cursor && getCursorStyles(cursor)}
    ${depth && getDepthStyles(depth)}
    ${margin && getMarginStyles(margin)}
    ${padding && getPaddingStyles(padding)}
    ${getPositionStyles(position)}
    ${shadow && getShadowStyles(shadow)}
    ${size && getSizeStyles(size)}
    ${transform && getTransformStyles(transform)}
    ${visibility && getVisibilityStyles(visibility)}

    /* Focused outline */
    &:before {
      bottom: -4px;
      border-style: solid;
      border-width: 2px;
      ${getBorderRadiusStyles(borderRadius ?? { all: Amount.All })}
      border-color: ${getFocusedOutlineColor(background?.color)};
      content: '';
      display: block;
      content: '';
      opacity: 0;
      left: -4px;
      position: absolute;
      pointer-events: none;
      right: -4px;
      top: -4px;
      transition: opacity 0.13s ease-in-out;
      z-index: 0;
    }

    transition: background 0.13s ease-in-out, background-color 0.13s ease-in-out,
      border-radius 0.13s ease-in-out,
      border-bottom-left-radius 0.13s ease-in-out,
      border-bottom-right-radius 0.13s ease-in-out,
      border-top-left-radius 0.13s ease-in-out,
      border-top-right-radius 0.13s ease-in-out, border 0.13s ease-in-out,
      border-bottom 0.13s ease-in-out, border-left 0.13s ease-in-out,
      border-right 0.13s ease-in-out, border-top 0.13s ease-in-out,
      border-color 0.13s ease-in-out, box-shadow 0.13s ease-in-out,
      color 0.13s ease-in, opacity 0.13s ease-in-out,
      transform 0.13s ease-in-out;
  `;
};

export const ContainerStyles = css<ContainerProps>`
  ${props => getContainerStyles(props)}
`;
