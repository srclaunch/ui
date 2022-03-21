import { css, SimpleInterpolation } from 'styled-components';
import { getContainerStyles } from './index';
import { ContainerProps } from '../../components/layout/Container';

export function getDisabledStateStyles(): SimpleInterpolation {
  return css`
    cursor: not-allowed !important;
    opacity: 0.3 !important;
  `;
}

export function getContainerStatesStyles(
  props: ContainerProps,
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

    ${current &&
    state?.current &&
    css`
      ${getContainerStyles({ ...otherProps, ...current })};
    `};

    ${disabled && state?.disabled
      ? css`
          ${getDisabledStateStyles()};
          ${getContainerStyles({ ...otherProps, ...disabled })};
        `
      : css`
          &:disabled {
            ${getDisabledStateStyles()};
            ${getContainerStyles({ ...otherProps, ...disabled })};
          }
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

export const StateStyles = css<ContainerProps>`
  ${props => getContainerStatesStyles(props)};
`;
