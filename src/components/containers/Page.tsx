import { useTitle } from '@srclaunch/react-hooks';
import { cloneElement, ElementType, memo, ReactElement } from 'react';

import { Align, BackgroundColors, ContainerProps } from '../../types';
import { Container } from '../layout/Container';
import { LoadingOverlay } from '../progress/LoadingOverlay';

type PageProps = {
  readonly layout?: ElementType;
  readonly loading?: boolean;
  readonly loginRequired?: boolean;
  readonly title?: string | null;
} & ContainerProps<HTMLDivElement>;

export const Page = memo(
  ({
    alignContent = Align.Top,
    backgroundColor = BackgroundColors.Page,
    children,
    className = '',
    grow = true,
    layout: Layout,
    loading = false,
    title,
    ...props
  }: PageProps): ReactElement => {
    useTitle(title);

    const PageComp = () => (
      <Container
        alignContent={alignContent}
        backgroundColor={backgroundColor}
        className={`${className} page`}
        grow={grow}
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
