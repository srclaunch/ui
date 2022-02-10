import { memo, ReactElement } from 'react';
import styled from 'styled-components';

import { Size } from '../../types';

type ProgressSpinnerProps = {
  size?: Size;
};

export const ProgressSpinner = memo(
  ({ size = Size.Default }: ProgressSpinnerProps): ReactElement => {
    return <Container size={size} />;
  },
);

const Container = memo(styled.div<{ size: Size }>`
  animation: loop 0.8s infinite linear;
  border-top: calc(${props => props.size} / 5) solid rgba(200, 200, 200, 0.2);
  border-right: calc(${props => props.size} / 5) solid rgba(200, 200, 200, 0.2);
  border-bottom: calc(${props => props.size} / 5) solid rgba(200, 200, 200, 0.2);
  border-left: calc(${props => props.size} / 5) solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  display: inline-block;
  font-size: 10px;
  height: ${props => props.size};
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  width: ${props => props.size};

  &:after {
    border-radius: 50%;
    width: calc(${props => props.size} / 3);
    height: calc(${props => props.size} / 3);
  }

  @keyframes loop {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`);
