import { memo, ReactElement, useEffect, useState } from 'react';
import { Outlet, RootState, useSelector } from '@srclaunch/state';
import { ThemeProvider } from '@srclaunch/themes';
import { HttpClient } from '@srclaunch/http-client';
import { ContainerProps, BackgroundColors } from '../../types';
import { useAuthentication } from '../../hooks/use-authentication';
import { Container } from '../layout/Container';
import { ErrorBoundary } from '../errors/ErrorBoundary';
import { EntityPanel } from '../data/entities/EntityPanel';
import { Backdrop } from '../modals/Backdrop';
import { LoadingOverlay } from '../progress/LoadingOverlay';

type WebApplicationProps = ContainerProps<
  HTMLDivElement,
  {
    authentication?: boolean;
    actions?: Record<string, (...args: any[]) => any>;
    httpClient?: typeof HttpClient;
  }
>;

export const WebApplication = memo(
  ({
    authentication = false,
    actions,
    backgroundColor = BackgroundColors.Dark,
    children,
    className = '',
    httpClient,
    ...props
  }: WebApplicationProps): ReactElement => {
    const { inProgress, loggedIn, loginRequired } = useAuthentication({
      enabled: authentication,
    });
    const { current, list } = useSelector(
      (state: RootState) => state.ui.themes,
    );
    const showOutlet =
      !inProgress &&
      ((loggedIn && (loginRequired || !loginRequired)) ||
        (!loggedIn && !loginRequired));

    return (
      <Container
        backgroundColor={backgroundColor}
        className={`${className} web-application`}
        {...props}
      >
        <ThemeProvider theme={current} themes={list}>
          <LoadingOverlay visible={inProgress || !showOutlet} />

          <Backdrop visible={false} />

          {showOutlet && <Outlet />}

          <EntityPanel actions={actions} httpClient={httpClient} />
        </ThemeProvider>
      </Container>
    );
  },
);
