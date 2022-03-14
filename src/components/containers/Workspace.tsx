import { cloneElement, ElementType, memo, ReactElement } from 'react';
import { useTitle } from '@srclaunch/react-hooks';
import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColors,
  Fill,
  Orientation,
  Overflow,
} from '../../types';
import { Container, ContainerProps } from '../layout/Container';
import { LoadingOverlay } from '../progress/LoadingOverlay';
import { SubTitle } from '../typography/SubTitle';
import { Title } from '../typography/Title';

type WorkspaceProps = {
  readonly header?: {
    readonly actions?: ReactElement;
    readonly title?: string | ReactElement;
    readonly subTitle?: string;
  };
  readonly layout?: ElementType;
  readonly loading?: boolean;
  readonly loginRequired?: boolean;
  readonly title?: string | null;
} & ContainerProps<HTMLDivElement>;

export const Workspace = memo(
  ({
    alignment = {},
    background = {},
    className = '',
    children,
    header,
    layout: Layout,
    loading = false,
    loginRequired = false,
    padding = {},
    title,
    ...props
  }: WorkspaceProps): ReactElement => {
    useTitle(title);

    const headerTitle = header?.title ? (
      typeof header.title === 'string' ? (
        <Title>{header.title}</Title>
      ) : (
        header.title
      )
    ) : null;

    const WorkspaceComp = (props2: any) => (
      <Container
        alignment={{ vertical: AlignVertical.Top, ...alignment }}
        background={{ color: BackgroundColors.Workspace, ...background }}
        className={`${className} workspace`}
        overflow={Overflow.ScrollVertical}
        padding={{ all: Amount.Most, ...padding }}
        {...props}
        {...props2}
      >
        {(header?.title || header?.actions) && (
          <Container
            alignment={{
              fill: Fill.Both,
              orientation: Orientation.Horizontal,
              vertical: AlignVertical.Center,
            }}
            margin={{
              bottom: Amount.All,
            }}
          >
            <Container>
              <Container
                alignment={{
                  orientation: Orientation.Horizontal,
                  vertical: AlignVertical.Center,
                }}
                className="workspace-title"
              >
                {headerTitle}
              </Container>
              <Container
                className="workspace-sub-title"
                alignment={{
                  orientation: Orientation.Horizontal,
                }}
              >
                {header?.subTitle && <SubTitle>{header.subTitle}</SubTitle>}
              </Container>
            </Container>

            {header?.actions && (
              <Container
                alignment={{
                  fill: Fill.Horizontal,
                  horizontal: AlignHorizontal.Right,
                }}
                className="workspace-actions"
              >
                {header.actions}
              </Container>
            )}
          </Container>
        )}

        <LoadingOverlay visible={loading} />

        {children}
      </Container>
    );

    const Child = () =>
      Layout ? (
        cloneElement(
          <Layout scrollable {...props} />,
          props,
          <WorkspaceComp {...props} />,
        )
      ) : (
        <WorkspaceComp {...props} />
      );

    return <Child />;
  },
);
