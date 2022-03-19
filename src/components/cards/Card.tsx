import { memo, MouseEventHandler, ReactElement } from 'react';

import {
  Amount,
  BackgroundColors,
  DepthShadow,
  Orientation,
} from '../../types';
import { ErrorBoundary } from '../errors/ErrorBoundary';
import { Container, ContainerProps } from '../layout/Container';
import { NavigationLink } from '../navigation/NavigationLink';

type CardProps = ContainerProps & {
  readonly draggable?: boolean;
  readonly id?: string;
  readonly linkTo?: string;
  readonly onClick?: MouseEventHandler<any>;
  readonly title?: string;
};

export const Card = memo(
  ({
    background = {},
    borderRadius = {},
    children,
    draggable = false,
    id,
    linkTo,
    shadow = DepthShadow.Higher,
    title,
    ...props
  }: CardProps): ReactElement => {
    const content = (
      <Container
        background={{
          color: BackgroundColors.Card,
          ...background,
        }}
        borderRadius={{ all: Amount.Less, ...borderRadius }}
        className={`card${id ? `-${id}` : ''}`}
        shadow={shadow}
        {...props}
      >
        {title && <h4>{title}</h4>}

        <ErrorBoundary>{children}</ErrorBoundary>
      </Container>
    );

    if (draggable) {
      return (
        <Container className="draggable-card" {...props}>
          {content}
        </Container>
      );
    }

    if (linkTo) {
      return (
        <NavigationLink
          className="link-card"
          //   transition: box-shadow 0.3s ease-in-out;
          to={linkTo}
        >
          {content}
        </NavigationLink>
      );
    }

    return content;
  },
);
