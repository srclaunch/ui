import { getIcon, Icon as IconType } from '@srclaunch/icons';
import { memo, ReactElement } from 'react';
import styled from 'styled-components';

import { AppearanceStyles } from '../../styles/appearance';
import { DimensionStyles } from '../../styles/appearance/dimension';
import { LayoutStyles } from '../../styles/layout';
import {
  Align,
  Color,
  ContainerProps,
  ForegroundColors,
  Size,
  SizeProps,
} from '../../types';
import { Image } from './Image';
import { Svg } from './Svg';

export type IconProps<P = Record<string, unknown>> = SizeProps<{
  readonly color?: Color;
  readonly component?: ReactElement;
  readonly name?: IconType;
  readonly path?: string;
  readonly svg?: ReactElement;
  readonly url?: string;
}> &
  P;

const Wrapper = styled.span<IconProps>`
  ${LayoutStyles};
  ${AppearanceStyles};
  ${DimensionStyles};

  img,
  svg {
    display: inherit;
    height: ${props => props.size};
    fill: ${props => `rgb(${props.color})`};
    transition: fill 0.1s ease-in-out;
    width: ${props => props.size};
  }
`;

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
  }: ContainerProps<HTMLSpanElement, IconProps>): ReactElement => {
    const getElement = () => {
      if (name) {
        const Ico = getIcon(name);

        if (Ico)
          return (
            <Svg size={size} {...props}>
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
      <Wrapper
        alignItems={Align.Center}
        alignContent={Align.Center}
        as="span"
        className={`${className} icon ${name ? `icon-${name}` : ''}`}
        color={color}
        {...props}
      >
        {getElement()}
      </Wrapper>
    );
  },
);
