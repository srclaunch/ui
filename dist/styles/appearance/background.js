import { css } from 'styled-components';
import { BackgroundColors, BackgroundSize } from '../../types';
const getBackgroundColor = (color, opacity) => {
    if (!color)
        return null;
    if (color === BackgroundColors.Transparent)
        return 'transparent';
    if (opacity) {
        return `rgba(${color}, ${opacity}%)`;
    }
    return `rgb(${color})`;
};
const getBackgroundSize = (size) => {
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
            if (!size)
                return 'auto';
            return size;
    }
};
export const BackgroundStyles = css `
  ${props => props.backgroundColor &&
    css `
      background: ${getBackgroundColor(props.backgroundColor, props.backgroundOpacity ?? 100) ?? 'transparent'};
    `};

  ${props => props.hover &&
    props.hover?.backgroundColor &&
    css `
      &:hover {
        background: ${getBackgroundColor(props.hover.backgroundColor, props.hover?.backgroundOpacity ?? 100) ?? 'transparent'};
      }
    `};

  ${props => props.backgroundImage &&
    css `
      background-position: ${props.backgroundImage.position ?? 'center'};
      background-image: url(${props.backgroundImage.url});
      background-size: ${getBackgroundSize(props.backgroundImage.size)};
    `};

  ${props => props.hover &&
    props.hover?.backgroundOpacity &&
    css `
      &:hover {
        background: ${getBackgroundColor(props.hover.backgroundColor ?? props.backgroundColor ?? 'transparent', props.hover.backgroundOpacity)};
      }
    `};

  ${props => props.focus &&
    props.focus?.backgroundColor &&
    css `
      &:focus {
        background: ${getBackgroundColor(props.focus.backgroundColor, props.focus.backgroundOpacity ?? 100) ?? 'transparent'};
      }
    `};

  ${props => props.focus &&
    props.focus?.backgroundOpacity &&
    css `
      &:focus {
        background: ${getBackgroundColor(props.focus.backgroundColor ?? props.backgroundColor, props.focus?.backgroundOpacity) ?? 'transparent'};
      }
    `};

  ${props => props.active &&
    props.active?.backgroundColor &&
    css `
      &:active,
      &.active {
        background: ${getBackgroundColor(props.active.backgroundColor, props.active.backgroundOpacity ?? 100) ?? 'transparent'};
      }
    `};

  ${props => props.active &&
    props.active?.backgroundOpacity &&
    css `
      &:active,
      &.active {
        background: ${getBackgroundColor(props.active.backgroundColor ?? props.backgroundColor, props.active.backgroundOpacity) ?? 'transparent'};
      }
    `};
`;
//# sourceMappingURL=background.js.map