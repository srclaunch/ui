import { css, SimpleInterpolation } from 'styled-components';
import { getContainerStyles } from './index';
import { ContainerProps } from '../../components/layout/Container';

export function getDisabledStateStyles(): SimpleInterpolation {
  return css`
    cursor: not-allowed !important;
    opacity: 0.3;
  `;
}

/*

  ${props =>
    props.focused &&
    css`
      outline: none;

      & :focus {
        &:before {
          opacity: 1;
        }
      }
    `};
    */
export function getFocusedStyles(): SimpleInterpolation {
  return css`
    outline: none;
    &:before {
      transition: opacity 0.2s ease-in-out;
    }

    &:before {
      bottom: -4px;
      content: '';
      display: block;
      border-color: blue;
      border-style: solid;
      border-width: 2px;
      opacity: 1;
      left: -4px;
      position: absolute;
      pointer-events: none;
      right: -4px;
      top: -4px;
      transition: opacity 0.2s ease-in-out;
      // z-index: 0;
    }
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
  const { animations, events, states, ...otherProps } = props;

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
    hidden,
    loaded,
    loading,
    on,
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
            ${getContainerStyles({ ...otherProps, ...active })}
          `
        : css`
            &::active {
              ${getContainerStyles({ ...otherProps, ...active })}
            }
          `}
    `}

    ${current &&
    state?.current &&
    css`
      ${getContainerStyles({ ...otherProps, ...current })}
    `}

    ${disabled &&
    css`
      ${state?.disabled
        ? css`
            ${getContainerStyles({ ...otherProps, ...disabled })}
            ${getDisabledStateStyles()}
          `
        : css`
            &:disabled {
              ${getContainerStyles({ ...otherProps, ...disabled })}
              ${getDisabledStateStyles()}
            }
          `}
    `}

    ${error &&
    state?.error &&
    css`
      ${getContainerStyles({ ...otherProps, ...error })}
    `}

    ${focused &&
    css`
      ${state?.focused
        ? css`
            ${getContainerStyles({ ...otherProps, ...focused })}
            ${getFocusedStyles()}
          `
        : css`
            &:focus {
              ${getContainerStyles({ ...otherProps, ...focused })}
              ${getFocusedStyles()}
            }
          `}
    `}

    ${hovered &&
    !state?.current &&
    css`
      ${state?.hovered
        ? css`
            ${getContainerStyles({ ...otherProps, ...hovered })}
          `
        : css`
            &:hover {
              ${getContainerStyles({ ...otherProps, ...hovered })}
            }
          `}
    `}

    ${loaded &&
    state?.loaded &&
    css`
      ${getContainerStyles({ ...otherProps, ...loaded })}
    `}

    ${loading &&
    state?.loading &&
    css`
      ${getContainerStyles({ ...otherProps, ...loading })}
    `}

    ${on &&
    state?.on &&
    css`
      ${getContainerStyles({ ...otherProps, ...on })}
    `}

    ${success &&
    state?.success &&
    css`
      ${getContainerStyles({ ...otherProps, ...success })}
    `}

    ${visible &&
    state?.visible &&
    css`
      ${getContainerStyles({ ...otherProps, ...visible })}
      ${getVisibleStateStyles()}
    `}

    ${hidden &&
    (state?.visible === false || state?.hidden) &&
    css`
      ${getContainerStyles({ ...otherProps, ...hidden })}
      ${getHiddenStateStyles()}
    `}

    ${!visible &&
    state?.visible === false &&
    css`
      ${getHiddenStateStyles()}
    `}

    ${warning &&
    state?.warning &&
    css`
      ${getContainerStyles({ ...otherProps, ...warning })}
    `}
  `;
}

export const StateStyles = css<ContainerProps>`
  ${props => getContainerStatesStyles(props)}
`;
