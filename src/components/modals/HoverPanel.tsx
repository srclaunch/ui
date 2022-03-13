import { memo, ReactElement } from 'react';

import {
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  Depth,
  DepthShadow,
  FocusProps,
} from '../../types';
import { Container, ContainerProps } from '../layout/Container';

type HoverPanelProps = ContainerProps<HTMLDivElement> & {
  readonly detached?: boolean;
  readonly visible?: boolean;
  readonly setMenuVisible?: (visible: boolean) => unknown;
};

export const HoverPanel = memo(
  ({
    background = {},
    border = {},
    borderRadius = {},
    children,
    className = '',
    depth = Depth.Higher,
    detached = true,
    focused,
    visible = true,
    setMenuVisible,
    ...props
  }: HoverPanelProps): ReactElement => {
    return (
      <Container
        background={{ color: BackgroundColors.Lightest, ...background }}
        border={{
          all: {
            color: BorderColors.Transparent,
            style: BorderStyle.Solid,
            width: 1,
          },
          ...border,
        }}
        borderRadius={{ all: Amount.Less, ...borderRadius }}
        className={`${className} hover-panel`}
        depth={depth}
        focused={focused}
        shadow={visible ? DepthShadow.Higher : DepthShadow.Surface}
        visible={visible}
        {...props}
      >
        {children}
      </Container>
    );
  },
);
