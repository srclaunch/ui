import { memo, ReactElement } from 'react';
import styled, { css } from 'styled-components';

import { ContainerProps, MouseEventProps } from '../../types';

type BackdropProps = ContainerProps<
  {
    onClick?: () => unknown;
    visible: boolean;
  } & MouseEventProps<HTMLDivElement>
>;

export const Backdrop = memo(
  ({
    as = 'div',
    children,
    className = '',
    onClick,
    visible,
    ...props
  }: BackdropProps): ReactElement => {
    return (
      <Container
        as={as}
        className={`${className} backdrop`}
        onClick={onClick}
        visible={visible}
        {...props}
      >
        {children}
      </Container>
    );
  },
);

const Container = styled.div<BackdropProps>`
  background: var(--bg-color-backdrop-hidden);
  bottom: 0;
  display: block;
  left: 0;
  position: absolute;
  pointer-events: none;
  right: 0;
  top: 0;
  transition: background 0.3s ease-in-out;
  z-index: 6000;

  ${props =>
    props.visible &&
    css`
      background: var(--bg-color-backdrop-visible);
      pointer-events: all;
    `}
`;
