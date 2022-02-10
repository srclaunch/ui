import { memo, ReactElement } from 'react';
import styled from 'styled-components';

import { AppearanceStyles } from '../../styles/appearance';
import { DimensionStyles } from '../../styles/appearance/dimension';
import { LayoutStyles } from '../../styles/layout';
import { ContainerProps } from '../layout/Container';

type SvgProps<
  E = HTMLSpanElement,
  P = Record<string, unknown>,
> = ContainerProps<
  E,
  {
    readonly path?: string;
    readonly url?: string;
  }
> &
  P;

const Wrapper = styled.span`
  ${LayoutStyles};
  ${AppearanceStyles};
  ${DimensionStyles};

  svg {
    height: 100%;
    width: 100%;
  }
`;

export const Svg = memo(
  ({
    as = 'span',
    children,
    className = '',
    ...props
  }: SvgProps): ReactElement => {
    return (
      <Wrapper as={as} className={`${className} svg`} {...props}>
        {children}
      </Wrapper>
    );
  },
);
