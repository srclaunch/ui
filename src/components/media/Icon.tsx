import { getIcon, Icon as IconType } from '@srclaunch/icons';
import { memo, ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { AlignmentStyles } from '../../styles/container/alignment';
import { SizeStyles } from '../../styles/container/size';
import {
  AlignHorizontal,
  AlignVertical,
  Fill,
  ForegroundColor,
  ForegroundColors,
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
};

const Wrapper = styled.i<IconProps>`
  ${AlignmentStyles};

  svg {
    ${props =>
      props.color &&
      css`
        fill: ${props.color === 'inherit'
          ? 'currentColor'
          : `rgb(${props.color})`};
      `};
    ${SizeStyles};
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
      const Ico = getIcon(name);

      if (Ico)
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
            <Ico />
          </Wrapper>
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
