import { css, SimpleInterpolation } from 'styled-components';
import { getTextStyles } from '../typography';
import { TextProps } from '../../components/typography/Text';

export function getDisabledStateStyles(): SimpleInterpolation {
  return css`
    opacity: 0.1 !important;
    background-color: yellow !important;
  `;
}

export function getTextStatesStyles(props: TextProps): SimpleInterpolation {
  const { states, ...otherProps } = props;

  if (!states) {
    return;
  }

  const {
    active,
    current,
    disabled,
    error,
    focused,
    hovered,
    loading,
    state,
    success,
    visible,
    warning,
  } = states;
  return css`
    ${current &&
    state?.current &&
    !state?.active &&
    css`
      ${getTextStyles({ ...otherProps, ...current })};
    `};

    ${disabled &&
    css`
      ${state?.disabled
        ? css`
            ${getTextStyles({ ...otherProps, ...disabled })};
            ${getDisabledStateStyles()};
          `
        : css`
            &:disabled {
              ${getTextStyles({ ...otherProps, ...disabled })};
              ${getDisabledStateStyles()};
            }
          `};
    `};

    ${error &&
    state?.error &&
    css`
      ${getTextStyles({ ...otherProps, ...error })};
    `};

    ${focused &&
    css`
      ${state?.focused
        ? css`
            ${getTextStyles({ ...otherProps, ...focused })};
          `
        : css`
            &:focus {
              ${getTextStyles({ ...otherProps, ...focused })};
            }
          `};
    `};

    ${hovered &&
    !state?.active &&
    css`
      ${state?.hovered
        ? css`
            ${getTextStyles({ ...otherProps, ...hovered })};
          `
        : css`
            &:hover {
              ${getTextStyles({ ...otherProps, ...hovered })};
            }
          `};
    `};

    ${active &&
    css`
      ${state?.active
        ? css`
            ${getTextStyles({ ...otherProps, ...active })};
          `
        : css`
            &::active {
              ${getTextStyles({ ...otherProps, ...active })};
            }
          `};
    `};

    ${loading &&
    state?.loading &&
    css`
      ${getTextStyles({ ...otherProps, ...loading })};
    `};

    ${success &&
    state?.success &&
    css`
      ${getTextStyles({ ...otherProps, ...success })};
    `};

    ${visible &&
    state?.visible &&
    css`
      ${getTextStyles({ ...otherProps, ...visible })};
    `};

    ${warning &&
    state?.warning &&
    css`
      ${getTextStyles({ ...otherProps, ...warning })};
    `};
  `;
}

export const StateStyles = css<TextProps>`
  ${props => getTextStatesStyles(props)};
`;
