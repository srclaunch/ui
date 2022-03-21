import { css, SimpleInterpolation } from 'styled-components';
import { getContainerStyles } from './index';
import { ContainerProps } from '../../components/layout/Container';
import { getTextStyles } from '../typography';
import { TextProps } from '../../components/typography/Text';

export function getDisabledStateStyles(): SimpleInterpolation {
  return css`
    opacity: 0.1 !important;
    background-color: yellow !important;
  `;
}

export function getContainerStatesStyles(
  props: ContainerProps & TextProps,
): SimpleInterpolation {
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
    css`
      ${getContainerStyles({ ...otherProps, ...current })};
    `};

    ${disabled &&
    css`
      ${state?.disabled
        ? css`
            ${getContainerStyles({ ...otherProps, ...disabled })};

            ${getDisabledStateStyles()};
          `
        : css`
            &:disabled {
              ${getContainerStyles({ ...otherProps, ...disabled })};

              ${getDisabledStateStyles()};
            }
          `};
    `};

    ${error &&
    state?.error &&
    css`
      ${getContainerStyles({ ...otherProps, ...error })};
    `};

    ${focused &&
    css`
      ${state?.focused
        ? css`
            ${getContainerStyles({ ...otherProps, ...focused })};
          `
        : css`
            &:focus {
              ${getContainerStyles({ ...otherProps, ...focused })};
            }
          `};
    `};

    ${hovered &&
    !state?.current &&
    css`
      ${state?.hovered
        ? css`
            ${getContainerStyles({ ...otherProps, ...hovered })};
          `
        : css`
            &:hover {
              ${getContainerStyles({ ...otherProps, ...hovered })};
            }
          `};
    `};

    ${active &&
    css`
      ${state?.active
        ? css`
            ${getContainerStyles({ ...otherProps, ...active })};
          `
        : css`
            &::active {
              ${getContainerStyles({ ...otherProps, ...active })};
            }
          `};
    `};

    ${loading &&
    state?.loading &&
    css`
      ${getContainerStyles({ ...otherProps, ...loading })};
    `};

    ${success &&
    state?.success &&
    css`
      ${getContainerStyles({ ...otherProps, ...success })};
    `};

    ${visible &&
    state?.visible &&
    css`
      ${getContainerStyles({ ...otherProps, ...visible })};
    `};

    ${warning &&
    state?.warning &&
    css`
      ${getContainerStyles({ ...otherProps, ...warning })};
    `};
  `;
}

export const StateStyles = css<ContainerProps & TextProps>`
  ${props => getContainerStatesStyles(props)};
`;
