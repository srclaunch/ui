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
  FocusProps,
  HeightProps,
  LayoutProps,
  Orientation,
  SizeProps,
  VisibilityProps,
  WidthProps,
} from '../../types';

export type ContainerProps<E = HTMLElement> = PropsWithChildren<
  LayoutProps &
    AppearanceProps &
    CommonComponentProps<E> &
    FocusProps &
    HeightProps &
    SizeProps &
    VisibilityProps &
    WidthProps
>;

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
