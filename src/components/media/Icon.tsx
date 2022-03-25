import { getIcon, Icon as IconType } from '@srclaunch/icons';
import { memo, ReactElement, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { getContainerStyles } from '../../styles/container';
import { AlignmentStyles } from '../../styles/container/alignment';
import { MarginStyles } from '../../styles/container/margin';
import { PaddingStyles } from '../../styles/container/padding';
import { PositionStyles } from '../../styles/container/position';
import { SizeStyles } from '../../styles/container/size';
import {
  AlignHorizontal,
  AlignVertical,
  Fill,
  ForegroundColor,
  ForegroundColors,
  States,
  Sizes,
  TextColor,
  TextColors,
} from '../../types';
import { Container, ContainerProps } from '../layout/Container';
import { Image } from './Image';

export type IconProps = ContainerProps & {
  readonly color?: ForegroundColor | TextColor;
  readonly component?: ReactElement;
  readonly name?: IconType;
  readonly path?: string;
  readonly svg?: ReactElement;
  readonly url?: string;
} & {
  readonly states?: States<IconProps>;
};

const Wrapper = styled.span<IconProps>`
  ${props => getContainerStyles(props)};

  svg {
    ${props =>
      props.color &&
      css`
        fill: ${props.color === 'inherit'
          ? 'currentColor'
          : `rgb(${props.color})`};
      `};
  }
`;

export const Icon = memo(
  ({
    as = 'i',
    alignment = {},
    color = TextColors.Default,
    className = '',
    component,
    name,
    path,
    size = {},
    svg,
    url,
    ...props
  }: IconProps): ReactElement => {
    if (name) {
      const [Icon, setIcon] = useState<IconType | null>();

      const getIconByName = async () => {
        const ico = await getIcon(name);
        console.log('ico', ico);
        setIcon(ico);
      };

      useEffect(() => {
        if (name) {
          getIconByName();
        }

        return () => {
          setIcon(null);
        };
      }, [name]);

      if (Icon)
        return (
          <Wrapper
            alignment={{
              horizontal: AlignHorizontal.Center,
              vertical: AlignVertical.Center,
              ...alignment,
            }}
            as={as}
            color={color}
            className={`${className} icon`}
            size={{ height: Sizes.Default, width: Sizes.Default, ...size }}
            {...props}
          >
            {/* @ts-ignore */}
            {Icon && <Icon />}
          </Wrapper>
        );
    }

    if (component) {
      return component;
    }

    if (path) {
      return <Image alt="icon" className={`${className} icon`} path={path} />;
    }

    if (url) {
      return <Image alt="icon" className={`${className} icon`} url={url} />;
    }

    return <></>;
  },
);
