import { css, SimpleInterpolation } from 'styled-components';

import { Background, BackgroundColors, BackgroundSize } from '../../types';

const getBackgroundSize = (size?: BackgroundSize | string) => {
  switch (size) {
    case BackgroundSize.Auto:
      return 'auto';
    case BackgroundSize.Cover:
      return 'cover';
    case BackgroundSize.Contain:
      return 'contain';
    case BackgroundSize.Fill:
      return '100% 100%';
    case BackgroundSize.FillHorizontal:
      return '100% 0';
    case BackgroundSize.FillVertical:
      return '0 100%';
    default:
      if (!size) return 'auto';

      return size;
  }
};

export function getBackgroundStyle(
  background?: Background,
): SimpleInterpolation {
  const { color, image, opacity } = background || {};

  if (color) {
    if (color === BackgroundColors.Transparent) return 'transparent';

    if (opacity) {
      return css`
        background-color: rgba(${color}, ${opacity}%);
      `;
    }

    return css`
      background-color: rgb(${color});
    `;
  }

  if (image) {
    if (image.path || image.url) {
      return css`
        background-image: url(${image.url});
      `;
    }

    if (image.repeat) {
      return css`
        background-repeat: ${image.repeat};
      `;
    }

    if (image.size) {
      return css`
        background-size: ${getBackgroundSize(image.size)};
      `;
    }
  }
}

export const BackgroundStyles = css<{
  readonly background?: Background;
}>`
  ${props =>
    props.background &&
    css`
      ${getBackgroundStyle(props.background)};
    `};
`;

/* ${props =>
    props.backgroundColor &&
    css`
      background: ${getBackgroundColor(
        props.backgroundColor,
        props.backgroundOpacity ?? 100,
      ) ?? 'transparent'};
    `};

  ${props =>
    props.hover &&
    props.hover?.backgroundColor &&
    css`
      &:hover {
        background: ${getBackgroundColor(
          props.hover.backgroundColor,
          props.hover?.backgroundOpacity ?? 100,
        ) ?? 'transparent'};
      }
    `};

  ${props =>
    props.backgroundImage &&
    css`
      background-position: ${props.backgroundImage.position ?? 'center'};
      background-image: url(${props.backgroundImage.url});
      background-size: ${getBackgroundSize(props.backgroundImage.size)};
    `};

  ${props =>
    props.hover &&
    props.hover?.backgroundOpacity &&
    css`
      &:hover {
        background: ${getBackgroundColor(
          props.hover.backgroundColor ?? props.backgroundColor ?? 'transparent',
          props.hover.backgroundOpacity,
        )};
      }
    `};

  ${props =>
    props.focus &&
    props.focus?.backgroundColor &&
    css`
      &:focus {
        background: ${getBackgroundColor(
          props.focus.backgroundColor,
          props.focus.backgroundOpacity ?? 100,
        ) ?? 'transparent'};
      }
    `};

  ${props =>
    props.focus &&
    props.focus?.backgroundOpacity &&
    css`
      &:focus {
        background: ${getBackgroundColor(
          props.focus.backgroundColor ?? props.backgroundColor,
          props.focus?.backgroundOpacity,
        ) ?? 'transparent'};
      }
    `};

  ${props =>
    props.active &&
    props.active?.backgroundColor &&
    css`
      &:active,
      &.active {
        background: ${getBackgroundColor(
          props.active.backgroundColor,
          props.active.backgroundOpacity ?? 100,
        ) ?? 'transparent'};
      }
    `};

  ${props =>
    props.active &&
    props.active?.backgroundOpacity &&
    css`
      &:active,
      &.active {
        background: ${getBackgroundColor(
          props.active.backgroundColor ?? props.backgroundColor,
          props.active.backgroundOpacity,
        ) ?? 'transparent'};
      }
    `}; */
