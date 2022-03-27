import { css, SimpleInterpolation } from 'styled-components';
import { getContainerStyles } from '.';
import { ContainerProps } from '../../components/layout/Container';
import { Animation } from '../../types/index';
import { nanoid } from 'nanoid';

export function getAnimationKeyframes(
  animation: Animation,
  name: string,
  props: ContainerProps,
): SimpleInterpolation {
  const { animations: unused, ...otherContainerProps } = props;

  return css`
    @keyframes ${name} {
      from {
        ${getContainerStyles({ ...animation.from })}
      }

      to {
        ${getContainerStyles({ ...animation.to })}
      }
    }
  `;
}

export function getAnimationStyles(props: ContainerProps): SimpleInterpolation {
  if (!props.animations || !props.animations?.length) return null;

  const animations = props.animations;

  let names: string[] = [];
  let keyframes: SimpleInterpolation[] = [];
  let iterations: (string | number | undefined)[] = [];
  let delays: number[] = [];
  let durations: number[] = [];
  let easings: string[] = [];

  for (const animation of animations) {
    if (animation.from && animation.to) {
      const name = animation.name ?? `animation_${nanoid()}`;

      names = [...names, name];
      keyframes = [...keyframes, getAnimationKeyframes(animation, name, props)];
      delays = [...delays, animation.timing?.delay ?? 0];
      durations = [...durations, animation.timing?.duration ?? 3];
      iterations = [...iterations, animation.timing?.iterations ?? 'infinite'];
      easings = [...easings, animation.timing?.easing ?? 'linear'];
    }
  }

  return css`
    ${keyframes}

    ${names &&
    names.length > 0 &&
    css`
      animation: ${names.join(', ').trim() ?? 'none'};
    `}
    ${durations &&
    durations.length > 0 &&
    css`
      animation-duration: ${durations.join(', ').trim() ?? 3}s;
    `}

    ${iterations &&
    iterations.length > 0 &&
    css`
      animation-iteration-count: ${iterations.join(', ').trim() ?? 'infinite'};
    `}


    ${easings &&
    easings.length > 0 &&
    css`
      animation-timing-function: ${easings.join(', ').trim() ?? 'linear'};
    `}

    ${delays &&
    delays.length > 0 &&
    css`
      animation-delay: ${delays.join(', ').trim() ?? 0}s;
    `}
  `;
}

export const AnimationStyles = css<ContainerProps>`
  ${props => getAnimationStyles(props)}
`;
