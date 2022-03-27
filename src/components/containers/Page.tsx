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
    loading = false,
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
        size={{
          fill: Fill.Both,
          ...size,
        }}
        {...props}
      >
        <LoadingOverlay
          states={{
            state: {
              visible: loading,
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
