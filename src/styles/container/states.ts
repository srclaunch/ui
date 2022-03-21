import { css, SimpleInterpolation } from 'styled-components';
import { getContainerStyles } from './index';
import { ContainerProps } from '../../components/layout/Container';

export function getDisabledStateStyles(): SimpleInterpolation {
  return css`
    cursor: not-allowed !important;
    opacity: 0.3;
  `;
}

export function getVisibleStateStyles(): SimpleInterpolation {
  return css`
    opacity: 1;
    pointer-events: all;
    visibility: visible;
  `;
}

export function getHiddenStateStyles(): SimpleInterpolation {
  return css`
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
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
          ${getContainerStyles({ ...otherProps, ...disabled })};
          ${getDisabledStateStyles()};
        `
      : css`
          &:disabled {
            ${getContainerStyles({ ...otherProps, ...disabled })};
            ${getDisabledStateStyles()};
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
      ${getVisibleStateStyles()};
    `};

    ${visible &&
    state?.visible === false &&
    css`
      ${getContainerStyles({ ...otherProps, ...visible })};
      ${getHiddenStateStyles()};
    `};

    ${visible &&
    state?.visible === false &&
    css`
      ${getContainerStyles({ ...otherProps, ...visible })};
      ${getHiddenStateStyles()};
    `};

    ${!visible &&
    state?.visible === false &&
    css`
      ${getHiddenStateStyles()};
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
