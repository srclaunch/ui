import { useTitle } from '@srclaunch/react-hooks';
import { cloneElement, ElementType, memo, ReactElement } from 'react';

import { AlignVertical, BackgroundColors } from '../../types';
import { Container, ContainerProps } from '../layout/Container';
import { LoadingOverlay } from '../progress/LoadingOverlay';

type PageProps = {
  readonly layout?: ElementType;
  readonly loading?: boolean;
  readonly loginRequired?: boolean;
  readonly title?: string | null;
} & ContainerProps;

export const Page = memo(
  ({
    alignment = {},
    background = {},
    children,
    className = '',
    layout: Layout,
    loading = false,
    title,
    ...props
  }: PageProps): ReactElement => {
    useTitle(title);

    const PageComp = () => (
      <Container
        alignment={{ vertical: AlignVertical.Top, ...alignment }}
        background={{ color: BackgroundColors.Page, ...background }}
        className={`${className} page`}
        {...props}
      >
        <LoadingOverlay visible={loading} />

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
