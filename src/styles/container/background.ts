import { css, SimpleInterpolation } from 'styled-components';

import {
  Background,
  BackgroundColors,
  BackgroundSize,
  Color,
} from '../../types';
import { BackgroundRepeat } from '../../types/appearance/background';

export function getBackgroundColorStyle(
  color?: Color,
  opacity?: number,
): SimpleInterpolation {
  if (color === BackgroundColors.Transparent)
    return css`
      background-color: transparent;
    `;

  if (color && !opacity)
    return css`
      background-color: rgb(${color});
    `;

  if (color && opacity)
    return css`
      background-color: rgba(${color}, ${opacity}%);
    `;

  if (!color && opacity)
    return css`
      background-color: rgba(initial, ${opacity}%);
    `;

  return css`
    background-color: ${color};
  `;
}

const getBackgroundImageSizeStyle = (
  size?: BackgroundSize | string,
): SimpleInterpolation => {
  if (!size)
    return css`
      background-size: auto;
    `;

  switch (size) {
    case BackgroundSize.Auto:
      return css`
        background-size: auto;
      `;
    case BackgroundSize.Cover:
      return css`
        background-size: cover;
      `;
    case BackgroundSize.Contain:
      return css`
        background-size: contain;
      `;
    case BackgroundSize.Fill:
      return css`
        background-size: '100% 100%';
      `;
    case BackgroundSize.FillHorizontal:
      return css`
        background-size: '100% 0';
      `;
    case BackgroundSize.FillVertical:
      return css`
        background-size: '0 100%';
      `;
    default:
      return css`
        background-size: ${size};
      `;
  }
};

export function getBackgroundImageRepeatStyle(
  repeat: BackgroundRepeat,
): SimpleInterpolation {
  return css`
    background-repeat: ${repeat};
  `;
}

export function getBackgroundImageStyle(
  image: Background['image'],
): SimpleInterpolation {
  return css`
    background-image: url(${image?.path ?? image?.url});

    ${image?.size && getBackgroundImageSizeStyle(image.size)}
    ${image?.repeat && getBackgroundImageSizeStyle(image.size)}
  `;
}

export function getBackgroundStyles(
  background?: Background,
): SimpleInterpolation {
  const { color, image, opacity } = background || {};

  return css`
    ${color && getBackgroundColorStyle(color, opacity)}
    ${image && getBackgroundImageStyle(image)}
    ${image?.size && getBackgroundImageSizeStyle(image.size)}
    ${image?.repeat && getBackgroundImageRepeatStyle(image?.repeat)}
  `;
}

export const BackgroundStyles = css<{
  readonly background?: Background;
}>`
  ${props => getBackgroundStyles(props.background)}
`;
