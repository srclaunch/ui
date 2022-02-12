import { getIcon, Icon as IconType } from '@srclaunch/icons';
import { memo, ReactElement } from 'react';
import styled from 'styled-components';

import { AppearanceStyles } from '../../styles/appearance';
import { DimensionStyles } from '../../styles/appearance/dimension';
import { LayoutStyles } from '../../styles/layout';
import {
  Align,
  Color,
  ForegroundColors,
  HeightProps,
  Size,
  SizeProps,
  WidthProps,
} from '../../types';
import { Container, ContainerProps } from '../layout/Container';
import { Image } from './Image';
import { Svg } from './Svg';

export type IconProps = {
  readonly color?: Color;
  readonly component?: ReactElement;
  readonly name?: IconType;
  readonly path?: string;
  readonly svg?: ReactElement;
  readonly url?: string;
} & ContainerProps<HTMLSpanElement> &
  HeightProps &
  SizeProps &
  WidthProps;

export const Icon = memo(
  ({
    color = ForegroundColors.Default,
    className = '',
    component,
    name,
    path,
    size = Size.Default,
    svg,
    url,
    ...props
  }: IconProps): ReactElement => {
    const getElement = () => {
      if (name) {
        const Ico = getIcon(name);

        if (Ico)
          return (
            <Svg {...props}>
              <Ico />
            </Svg>
          );
      }

      if (component) {
        return component;
      }

      if (path) {
        return <Image alt="icon" size={size} path={path} {...props} />;
      }

      if (url) {
        return <Image alt="icon" size={size} url={url} {...props} />;
      }
    };

    return (
      <Container
        alignItems={Align.Center}
        alignContent={Align.Center}
        as="span"
        height={size}
        width={size}
        {...props}
      >
        {getElement()}
      </Container>
    );
  },
);
