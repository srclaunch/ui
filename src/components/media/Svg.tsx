import { memo, ReactElement } from 'react';
import styled from 'styled-components';

import { Color, Sizes } from '../../types';
import { Container, ContainerProps } from '../layout/Container';

export type SvgProps = ContainerProps & {
  readonly color?: Color;
  readonly path?: string;
  readonly url?: string;
};

const SvgMedia = styled.svg<SvgProps>`
  align-items: center;
  display: flex;
  justify-content: center;

  svg {
    fill: rgb(${props => props.color});
  }
`;

export const Svg = memo(
  ({
    as = 'span',
    children,
    className = '',
    size = {
      height: Sizes.Small,
      width: Sizes.Small,
    },
    ...props
  }: SvgProps): ReactElement => {
    return (
      <Container as={as} className={`${className} svg`} size={size} {...props}>
        {children}
      </Container>
    );
  },
);
