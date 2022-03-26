import { getIcon, Icon as IconType } from '@srclaunch/icons';
import { memo, ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { getContainerStyles } from '../../styles/container';
import {
  AlignHorizontal,
  AlignVertical,
  ForegroundColor,
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
    height: 100%;
    width: 100%;
    transition: fill 0.13s ease-in-out;
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
      const IconComponent = getIcon(name);

      if (IconComponent)
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
            {IconComponent && <IconComponent />}
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
