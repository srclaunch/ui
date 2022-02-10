import { memo, PropsWithChildren, ReactElement } from 'react';
import styled from 'styled-components';

import { AppearanceStyles } from '../../styles/appearance';
import { DimensionStyles } from '../../styles/appearance/dimension';
import { VisibilityStyles } from '../../styles/appearance/visibility';
import { LayoutStyles } from '../../styles/layout';
import {
  Align,
  AppearanceProps,
  BehaviorProps,
  CommonComponentProps,
  DimensionProps,
  FocusEventProps,
  FocusProps,
  KeyboardEventProps,
  LayoutProps,
  MouseEventProps,
  Orientation,
  VisibilityProps,
} from '../../types';

export type ContainerProps<
  E = HTMLElement,
  P = Record<string, unknown>,
> = CommonComponentProps<
  PropsWithChildren<
    LayoutProps<
      AppearanceProps<
        FocusProps<
          DimensionProps<
            VisibilityProps<
              FocusEventProps<
                E,
                MouseEventProps<
                  E,
                  KeyboardEventProps<E, FocusEventProps<BehaviorProps>>
                >
              >
            >
          >
        >
      >
    >
  >
> &
  P;

const Wrapper = styled.div<ContainerProps>`
  ${LayoutStyles};
  ${AppearanceStyles};
  ${DimensionStyles};
  ${VisibilityStyles};
`;

export const Container = memo(
  ({
    alignItems = Align.Stretch,
    as = 'div',
    children,
    className = '',
    fadeIn = false,
    grow = true,
    orientation = Orientation.Vertical,
    ...props
  }: ContainerProps): ReactElement => {
    return (
      <Wrapper
        alignItems={alignItems}
        as={as}
        className={`${className} container`}
        fadeIn={fadeIn}
        grow={grow}
        orientation={orientation}
        {...props}
      >
        {children}
      </Wrapper>
    );
  },
);
