import { getIcon, Icon as IconType } from '@srclaunch/icons';
import { memo, ReactElement } from 'react';
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
  InteractionStates,
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
  readonly states?: InteractionStates<IconProps>;
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
      return <Image alt="icon" className={`${className} icon`} path={path} />;
    }

    if (url) {
      return <Image alt="icon" className={`${className} icon`} url={url} />;
    }

    return <></>;
  },
);
