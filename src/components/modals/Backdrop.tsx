import { memo, ReactElement } from 'react';
import styled, { css } from 'styled-components';

import { BackgroundColors, PositionBehavior } from '../../types';
import { Container, ContainerProps } from '../layout/Container';

type BackdropProps = {
  onClick?: () => unknown;
  visible: boolean;
} & ContainerProps;

export const Backdrop = memo(
  ({
    as = 'div',
    background = {},
    children,
    className = '',
    onClick,
    position = {},
    visible,
    ...props
  }: BackdropProps): ReactElement => {
    return (
      <Container
        as={as}
        background={{ color: BackgroundColors.Darker, ...background }}
        className={`${className} backdrop`}
        position={{
          behavior: PositionBehavior.Absolute,
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          ...position,
        }}
        visibility={{
          hidden: !visible,
        }}
        {...props}
      >
        {children}
      </Container>
    );
  },
);
