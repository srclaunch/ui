import { HttpClient } from '@srclaunch/http-client';
import { ThemeProvider } from '@srclaunch/themes';
import {
  Outlet,
  RootState,
  useSelector,
} from '@srclaunch/web-application-state';
import { memo, ReactElement, useEffect, useState } from 'react';

import { useAuthentication } from '../../hooks/use-authentication';
import { BackgroundColors, ContainerProps } from '../../types';
import { EntityPanel } from '../data/entities/EntityPanel';
import { ErrorBoundary } from '../errors/ErrorBoundary';
import { Container } from '../layout/Container';
import { Backdrop } from '../modals/Backdrop';
import { LoadingOverlay } from '../progress/LoadingOverlay';

type WebApplicationProps = ContainerProps<
  HTMLDivElement,
  {
    readonly authentication?: boolean;
    readonly actions?: Record<string, (...args: readonly any[]) => any>;
    readonly httpClient?: typeof HttpClient;
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
