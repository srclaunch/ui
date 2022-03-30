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
  Sizes,
} from '../../types';
import { Container, ContainerProps } from '../layout/Container';
import { LoadingOverlay } from '../progress/LoadingOverlay';
import { SubTitle } from '../typography/SubTitle';
import { Title } from '../typography/Title';

type WorkspaceProps = ContainerProps & {
  readonly header?: {
    readonly actions?: ReactElement;
    readonly title?: string | ReactElement;
    readonly subTitle?: string;
  };
  readonly layout?: ElementType;
  readonly loginRequired?: boolean;
  readonly title?: string | null;
};

export const Workspace = memo(
  ({
    alignment = {},
    background = {},
    className = '',
    children,
    header,
    layout: Layout,
    loginRequired = false,
    padding = {},
    size = {},
    states = {},
    title,
    ...props
  }: WorkspaceProps): ReactElement => {
    useTitle(title);

    const WorkspaceComp = (props2: any) => (
      <Container
        alignment={{
          overflow: Overflow.ScrollVertical,
          vertical: AlignVertical.Top,
          ...alignment,
        }}
        background={{ color: BackgroundColors.Workspace, ...background }}
        className={`${className} workspace`}
        padding={{ all: Amount.Most, ...padding }}
        size={{
          fill: Fill.Both,
          ...size,
        }}
        states={states}
        {...props}
        {...props2}
      >
        <LoadingOverlay
          states={{ state: { visible: Boolean(states.state?.loading) } }}
        />

        {(header?.title || header?.actions) && (
          <Container
            alignment={{
              horizontal: AlignHorizontal.Stretch,
              orientation: Orientation.Horizontal,
              vertical: AlignVertical.Top,
            }}
            className="workspace-header"
            margin={{
              bottom: Amount.All,
            }}
          >
            {(header?.title || header.subTitle) && (
              <Container
                size={{
                  fill: Fill.Horizontal,
                }}
              >
                {header?.title && (
                  <Container className="workspace-title">
                    {typeof header.title === 'string' ? (
                      <Title lineHeight={Sizes.Default}>{header.title}</Title>
                    ) : (
                      header.title
                    )}
                  </Container>
                )}

                {header?.subTitle && (
                  <Container className="workspace-sub-title">
                    {<SubTitle>{header.subTitle}</SubTitle>}
                  </Container>
                )}
              </Container>
            )}

            {header?.actions && (
              <Container
                alignment={{
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
