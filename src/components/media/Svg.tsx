import { memo, ReactElement } from 'react';
import styled from 'styled-components';

import { AppearanceStyles } from '../../styles/appearance';
import { DimensionStyles } from '../../styles/appearance/dimension';
import { LayoutStyles } from '../../styles/layout';
import { AlignmentStyles } from '../../styles/layout/alignment';
import { MarginStyles } from '../../styles/layout/margin';
import {
  Color,
  CommonComponentProps,
  HeightProps,
  SizeProps,
  WidthProps,
} from '../../types';
import { ContainerProps } from '../layout/Container';

export type SvgProps = {
  readonly color?: Color;
  readonly path?: string;
  readonly url?: string;
} & ContainerProps<HTMLOrSVGElement> &
  HeightProps &
  WidthProps &
  SizeProps;

const SvgMedia = styled.svg`
  ${DimensionStyles};
  ${MarginStyles};
  fill: ${props => props.color};
`;

export const Svg = memo(
  ({
    as = 'span',
    children,
    className = '',
    ...props
  }: SvgProps): ReactElement => {
    return (
      <SvgMedia as={as} className={`${className} svg`} {...props}>
        {children}
      </SvgMedia>
    );
  },
);
