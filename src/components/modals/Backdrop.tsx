import { memo, ReactElement } from 'react';
import styled, { css } from 'styled-components';

import { BackgroundColors, PositionBehavior } from '../../types';
import { Container, ContainerProps } from '../layout/Container';

type BackdropProps = ContainerProps;

export const Backdrop = memo(
  ({
    as = 'div',
    background = {},
    children,
    className = '',
    position = {},
    states = {},
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
        states={{
          visible: {
            visibility: {
              opacity: 1,
            },
          },
          ...states,
        }}
        visibility={{
          opacity: 0,
        }}
        {...props}
      >
        {children}
      </Container>
    );
  },
);
