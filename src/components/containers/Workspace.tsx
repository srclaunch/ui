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

    const WorkspaceComp = (props2: any) => (
      <Container
        alignment={{
          fill: Fill.Both,
          overflow: Overflow.ScrollVertical,
          vertical: AlignVertical.Top,
          ...alignment,
        }}
        background={{ color: BackgroundColors.Workspace, ...background }}
        className={`${className} workspace`}
        padding={{ all: Amount.Most, ...padding }}
        {...props}
        {...props2}
      >
        <LoadingOverlay visible={loading} />

        {(header?.title || header?.actions) && (
          <Container
            alignment={{
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
                {header?.title &&
                  (typeof header.title === 'string' ? (
                    <Title>{header.title}</Title>
                  ) : (
                    header.title
                  ))}
              </Container>
              <Container
                className="workspace-sub-title"
                alignment={{
                  orientation: Orientation.Horizontal,
                  vertical: AlignVertical.Center,
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
