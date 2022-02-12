import { memo, MouseEventHandler, ReactElement } from 'react';
import styled from 'styled-components';

import { AppearanceStyles } from '../../styles/appearance';
import { DimensionStyles } from '../../styles/appearance/dimension';
import { LayoutStyles } from '../../styles/layout';
import {
  Amount,
  BackgroundColors,
  ContainerProps,
  DepthShadow,
  Orientation,
} from '../../types';
import { ErrorBoundary } from '../errors/ErrorBoundary';
import { Container } from '../layout/Container';
import { NavigationLink } from '../navigation/NavigationLink';

type CardProps = {
  readonly draggable?: boolean;
  readonly id?: string;
  readonly linkTo?: string;
  readonly onClick?: MouseEventHandler<any>;
  readonly title?: string;
} & ContainerProps<HTMLDivElement>;

export const Card = memo(
  ({
    backgroundColor = BackgroundColors.Card,
    borderRadius = Amount.Less,
    boxShadow = DepthShadow.Higher,
    children,
    draggable = false,
    id,
    linkTo,
    onClick,
    title,
    width,
    ...props
  }: CardProps): ReactElement => {
    const content = (
      <Container
        borderRadius={borderRadius}
        boxShadow={boxShadow}
        className={`card${id ? `-${id}` : ''}`}
        grow
        onClick={onClick}
        width={linkTo ? '100%' : width ?? 'auto'}
        {...props}
      >
        {title && <h4>{title}</h4>}

        <ErrorBoundary>{children}</ErrorBoundary>
      </Container>
    );

    if (draggable) {
      return (
        <DragWrapper className="draggable-card" {...props}>
          {content}
        </DragWrapper>
      );
    }

    if (linkTo) {
      return (
        <NavigationLink
          borderRadius={borderRadius}
          grow
          orientation={Orientation.Vertical}
          to={linkTo}
          width={width}
        >
          {content}
        </NavigationLink>
      );
    }

    return content;
  },
);

const DragWrapper = styled.div<CardProps>`
  ${LayoutStyles};
  ${AppearanceStyles};
  ${DimensionStyles};

  //position: absolute;
  //margin: 0 0 25px 0;
  transition: box-shadow 0.3s ease-in-out;
  //width: 100%;
`;
