import { getIcon, Icon as IconType } from '@srclaunch/icons';
import { memo, ReactElement } from 'react';

import {
  ForegroundColor,
  ForegroundColors,
  Sizes,
  TextColor,
} from '../../types';
import { Container, ContainerProps } from '../layout/Container';
import { Image } from './Image';

export type IconProps = ContainerProps<HTMLSpanElement> & {
  readonly color?: ForegroundColor | TextColor;
  readonly component?: ReactElement;
  readonly name?: IconType;
  readonly path?: string;
  readonly svg?: ReactElement;
  readonly url?: string;
};

export const Icon = memo(
  ({
    as = 'span',
    color = ForegroundColors.Default,
    className = '',
    component,
    name,
    path,
    size = {
      height: Sizes.Default,
      width: Sizes.Default,
    },
    svg,
    url,
    ...props
  }: IconProps): ReactElement => {
    if (name) {
      const Ico = getIcon(name);

      if (Ico)
        return (
          <Container
            as={as}
            className={`${className} icon`}
            size={size}
            {...props}
          >
            <Ico />
          </Container>
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
