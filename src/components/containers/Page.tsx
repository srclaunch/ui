import { useTitle } from '@srclaunch/react-hooks';
import { cloneElement, ElementType, memo, ReactElement } from 'react';
import { AlignVertical, BackgroundColors, Fill, Overflow } from '../../types';
import { Container, ContainerProps } from '../layout/Container';
import { LoadingOverlay } from '../progress/LoadingOverlay';

type PageProps = ContainerProps & {
  readonly layout?: ElementType;
  readonly loading?: boolean;
  readonly loginRequired?: boolean;
  readonly title?: string | null;
};

export const Page = memo(
  ({
    alignment = {},
    background = {},
    children,
    className = '',
    layout: Layout,
    states = {},
    size = {},
    title,
    ...props
  }: PageProps): ReactElement => {
    useTitle(title);

    const PageComp = () => (
      <Container
        alignment={{
          overflow: Overflow.ScrollVertical,
          vertical: AlignVertical.Top,
          ...alignment,
        }}
        background={{ color: BackgroundColors.Page, ...background }}
        className={`${className} page`}
        states={states}
        size={{
          fill: Fill.Both,
          ...size,
        }}
        {...props}
      >
        <LoadingOverlay
          states={{
            state: {
              visible: Boolean(states.state?.loading),
            },
          }}
        />

        {children}
      </Container>
    );

    const Child = () =>
      Layout ? (
        cloneElement(<Layout {...props} />, props, <PageComp />)
      ) : (
        <PageComp />
      );

    return <Child />;
  },
);
