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
    if (name) {
      const Ico = getIcon(name);

      if (Ico)
        return (
          <Svg
            className={`${className} icon`}
            color={color}
            height={size}
            width={size}
            {...props}
          >
            <Ico />
          </Svg>
        );
    }

    if (component) {
      return component;
    }

    if (path) {
      return (
        <Image
          alt="icon"
          className={`${className} icon`}
          path={path}
          {...props}
        />
      );
    }

    if (url) {
      return (
        <Image
          alt="icon"
          className={`${className} icon`}
          url={url}
          {...props}
        />
      );
    }

    return <></>;
  },
);
