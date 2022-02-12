import { memo, ReactElement } from 'react';
import styled from 'styled-components';

import { AppearanceStyles } from '../../styles/appearance';
import { DimensionStyles } from '../../styles/appearance/dimension';
import { LayoutStyles } from '../../styles/layout';
import {
  Color,
  CommonComponentProps,
  HeightProps,
  SizeProps,
  WidthProps,
} from '../../types';

export type SvgProps = {
  readonly color?: Color;
  readonly path?: string;
  readonly url?: string;
} & CommonComponentProps<HTMLOrSVGElement> &
  HeightProps &
  WidthProps &
  SizeProps;

const SvgMedia = styled.svg`
  ${DimensionStyles};
`;

export const Svg = memo(
  ({ as = 'span', className = '', ...props }: SvgProps): ReactElement => {
    return <SvgMedia as={as} className={`${className} svg`} {...props} />;
  },
);
