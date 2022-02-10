import { useTitle } from '@srclaunch/react-hooks';
import React, { ElementType, memo, ReactElement } from 'react';

import {
  Align,
  Amount,
  BackgroundColors,
  ContainerProps,
  Depth,
  Orientation,
  TextColor,
  TextProps,
} from '../../types';
import { Container } from '../layout/Container';
import { LoadingOverlay } from '../progress/LoadingOverlay';
import { SubTitle } from '../typography/SubTitle';
import { Title } from '../typography/Title';

type WorkspaceProps = ContainerProps<
  HTMLDivElement,
  {
    readonly header?: {
      readonly actions?: ReactElement;
      readonly title?: string | ReactElement;
      readonly subTitle?: string;
    };
    readonly layout?: ElementType;
    readonly loading?: boolean;
    readonly loginRequired?: boolean;
    readonly title?: string | null;
  }
>;

export const Workspace = memo(
  ({
    alignContent = Align.Top,
    backgroundColor = BackgroundColors.Workspace,
    className = '',
    children,
    header,
    layout: Layout,
    loading = false,
    loginRequired = false,
    orientation = Orientation.Vertical,
    padding = Amount.Most,
    title,
    ...props
  }: WorkspaceProps): ReactElement => {
    useTitle(title);

    const headerTitle = header?.title ? (
      typeof header.title === 'string' ? (
        <Title marginTop={Amount.None}>{header.title}</Title>
      ) : (
        header.title
      )
    ) : null;

    const WorkspaceComp = (props2: any) => (
      <Container
        alignContent={alignContent}
        backgroundColor={backgroundColor}
        className={`${className} workspace`}
        grow
        orientation={orientation}
        padding={padding}
        scrollable
        {...props}
        {...props2}
      >
        {(header?.title || header?.actions) && (
          <Container
            alignItems={Align.Center}
            grow={false}
            marginBottom={Amount.All}
            orientation={Orientation.Horizontal}
          >
            <Container>
              <Container
                alignItems={Align.Center}
                className="workspace-title"
                orientation={Orientation.Horizontal}
              >
                {headerTitle}
              </Container>
              <Container
                className="workspace-sub-title"
                orientation={Orientation.Horizontal}
              >
                {header?.subTitle && (
                  <SubTitle marginTop={Amount.None}>{header.subTitle}</SubTitle>
                )}
              </Container>
            </Container>

            {header?.actions && (
              <Container className="workspace-actions">
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
        React.cloneElement(
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
