import { memo, PropsWithChildren, ReactElement } from 'react';
import styled from 'styled-components';
import {
  Alignment,
  AlignHorizontal,
  AlignVertical,
  Background,
  Border,
  BorderRadius,
  CommonComponentProps,
  ContainerAnimation,
  Cursor,
  Depth,
  Fill,
  Margin,
  Orientation,
  Padding,
  Size,
  Shadow,
  Position,
  Overflow,
  DepthShadow,
} from '../../types';
import { ContainerAnimationStyles } from '../../styles/container/animation';
import { BackgroundStyles } from '../../styles/container/background';
import { BorderStyles } from '../../styles/container/border';
import { BorderRadiusStyles } from '../../styles/container/border-radius';
import { CursorStyles } from '../../styles/container/cursor';
import { DepthStyles } from '../../styles/container/depth';
import { FocusStyles } from '../../styles/container/focus';
import { MarginStyles } from '../../styles/container/margin';
import { OpacityStyles } from '../../styles/container/opacity';
import { PaddingStyles } from '../../styles/container/padding';
import { PositionStyles } from '../../styles/container/position';
import { ShadowStyles } from '../../styles/container/shadow';
import { SizeStyles } from '../../styles/container/size';
import { VisibilityStyles } from '../../styles/container/visibility';
import { AlignmentStyles } from '../../styles/container/alignment';

export type ContainerProps<E = HTMLDivElement> = PropsWithChildren<{
  alignment?: Alignment;
  animation?: ContainerAnimation;
  background?: Background;
  border?: Border;
  borderRadius?: BorderRadius;
  cursor?: Cursor;
  depth?: Depth;
  disable?: boolean;
  margin?: Margin;
  opacity?: number;
  overflow?: Overflow;
  padding?: Padding;
  position?: Position;
  shadow?: DepthShadow | Shadow;
  size?: Size;
  visible?: boolean;
}> & {
  readonly active?: ContainerProps<E>;
  readonly disabled?: ContainerProps<E>;
  readonly hover?: ContainerProps<E>;
  readonly focus?: ContainerProps<E>;
} & CommonComponentProps<any>;

// ${props =>
//   props.transform?.rotate &&
//   css`
//     transform: rotate(${`${props.transform?.rotate}deg` ?? 'none'});
//   `};

const Wrapper = styled.div<ContainerProps>`
  ${AlignmentStyles};
  ${ContainerAnimationStyles};
  ${BackgroundStyles};
  ${BorderStyles};
  ${BorderRadiusStyles};
  ${CursorStyles};
  ${DepthStyles};
  ${MarginStyles};
  ${OpacityStyles};
  ${PaddingStyles};
  ${PositionStyles};
  ${ShadowStyles};
  ${FocusStyles};
  ${SizeStyles};
  ${VisibilityStyles};

  transition: opacity 0.13s ease-in-out, background 0.13s ease-in-out,
    background-color 0.13s ease-in-out, border-radius 0.13s ease-in-out,
    border-bottom-left-radius 0.13s ease-in-out,
    border-bottom-right-radius 0.13s ease-in-out,
    border-top-left-radius 0.13s ease-in-out,
    border-top-right-radius 0.13s ease-in-out, border 0.13s ease-in-out,
    border-color 0.13s ease-in-out, box-shadow 0.13s ease-in-out,
    color 0.13s ease-in, transform 0.13s ease-in-out;
`;

export const Container = memo(
  ({
    alignment,
    as = 'div',
    children,
    className = '',
    /* fadeIn = false, */
    ...props
  }: ContainerProps): ReactElement => {
    return (
      <Wrapper
        alignment={{
          horizontal: AlignHorizontal.Stretch,
          orientation: Orientation.Vertical,
          overflow: Overflow.Hidden,
          vertical: AlignVertical.Stretch,
          ...alignment,
        }}
        as={as}
        className={`${className} container`}
        /* fadeIn={fadeIn} */
        {...props}
      >
        {children}
      </Wrapper>
    );
  },
);
