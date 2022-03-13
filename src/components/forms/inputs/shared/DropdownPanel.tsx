import { memo, ReactElement } from 'react';
import styled from 'styled-components';

import { VisibilityStyles } from '../../../../styles/container/visibility';
import { FocusStyles } from '../../../../styles/container/focus';
// import { FocusedStyles } from '../../../../styles/focused';
import {
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  Depth,
} from '../../../../types';
import { Container, ContainerProps } from '../../../layout/Container';

type DropdownPanelProps = {
  readonly visible?: boolean;
  readonly setMenuVisible?: (visible: boolean) => unknown;
} & ContainerProps;

export const DropdownPanel = memo(
  ({
    background = {},
    border = {},
    borderRadius = {},
    children,
    className = '',
    depth = Depth.Higher,
    focused,
    visible = false,
    ...props
  }: DropdownPanelProps): ReactElement => {
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
        className={`${className} dropdown-panel`}
        depth={depth}
        focused={focused}
        visible={visible}
        {...props}
      >
        {children}
      </Container>
    );
  },
);
