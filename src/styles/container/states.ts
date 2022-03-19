import { css, SimpleInterpolation } from 'styled-components';
import { ContainerStyles, getContainerStyles } from './index';
import { InteractionStates } from '../../types/states';
import { ContainerProps } from '../../components/layout/Container';
import { getTextStyles } from '../typography';
import { TextProps } from '../../components/typography/Text';

export function getStatesStyles(
  props: ContainerProps & TextProps,
): SimpleInterpolation {
  const { states } = props;

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
      ${getContainerStyles(current)};
      ${getTextStyles(current)};
    `};

    ${disabled &&
    css`
      ${state?.disabled
        ? css`
            ${getContainerStyles(disabled)};
            ${getTextStyles(disabled)};
          `
        : css`
            &:disabled {
              ${getContainerStyles(disabled)};
              ${getTextStyles(disabled)};
            }
          `};
    `};

    ${error &&
    state?.error &&
    css`
      ${getContainerStyles(error)};
      ${getTextStyles(error)};
    `};

    ${focused &&
    css`
      ${state?.focused
        ? css`
            ${getContainerStyles(focused)};
            ${getTextStyles(focused)};
          `
        : css`
            &:focus {
              ${getContainerStyles(focused)};
              ${getTextStyles(focused)};
            }
          `};
    `};

    ${hovered &&
    !state?.active &&
    css`
      ${state?.hovered
        ? css`
            ${getContainerStyles(hovered)};
            ${getTextStyles(hovered)};
          `
        : css`
            &:hover {
              ${getContainerStyles(hovered)};
              ${getTextStyles(hovered)};
            }
          `};
    `};

    ${active &&
    css`
      ${state?.active
        ? css`
            ${getContainerStyles(active)};
            ${getTextStyles(active)};
          `
        : css`
            &::active {
              ${getContainerStyles(active)};
              ${getTextStyles(active)};
            }
          `};
    `};

    ${loading &&
    state?.loading &&
    css`
      ${getContainerStyles(loading)};
      ${getTextStyles(loading)};
    `};

    ${success &&
    state?.success &&
    css`
      ${getContainerStyles(success)};
      ${getTextStyles(success)};
    `};

    ${visible &&
    state?.visible &&
    css`
      ${getContainerStyles(visible)};
      ${getTextStyles(visible)};
    `};

    ${warning &&
    state?.warning &&
    css`
      ${getContainerStyles(warning)};
      ${getTextStyles(warning)};
    `};
  `;
}

export const StateStyles = css<ContainerProps & TextProps>`
  ${props => getStatesStyles(props)};
`;
