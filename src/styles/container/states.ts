import { css, SimpleInterpolation } from 'styled-components';
import { ContainerStyles, getContainerStyles } from './index';
import { InteractionStates } from '../../types/states';
import { ContainerProps } from '../../components/layout/Container';

export function getStatesStyles(props: ContainerProps): SimpleInterpolation {
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

  console.log('states', states);

  return css`
    ${active &&
    state?.active &&
    css`
      ${state?.active
        ? getContainerStyles(active)
        : css`
            &:active {
              ${getContainerStyles(active)};
            }
          `};
    `};

    ${current &&
    state?.current &&
    css`
      ${getContainerStyles(current)};
    `};

    ${disabled &&
    state?.disabled &&
    css`
      ${state?.disabled
        ? getContainerStyles(disabled)
        : css`
            &:disabled {
              ${getContainerStyles(disabled)};
            }
          `};
    `};

    ${error &&
    state?.error &&
    css`
      ${getContainerStyles(error)};
    `};

    ${focused &&
    state?.focused &&
    css`
      ${state?.focused
        ? getContainerStyles(focused)
        : css`
            &:focus {
              ${getContainerStyles(focused)};
            }
          `};
    `};

    ${hovered &&
    css`
      ${state?.hovered
        ? getContainerStyles(hovered)
        : css`
            &:hover {
              ${getContainerStyles({ ...props, ...hovered })};
            }
          `};
    `};

    ${loading &&
    state?.loading &&
    css`
      ${getContainerStyles(loading)};
    `};

    ${success &&
    state?.success &&
    css`
      ${getContainerStyles(success)};
    `};

    ${visible &&
    state?.visible &&
    css`
      ${getContainerStyles(visible)};
    `};

    ${warning &&
    state?.warning &&
    css`
      ${getContainerStyles(warning)};
    `};
  `;
}

export const StateStyles = css<ContainerProps>`
  ${props => getStatesStyles(props)};
`;
