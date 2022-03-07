import { HttpClient } from '@srclaunch/http-client';
import { ThemeProvider } from '@srclaunch/themes';
import {
  Outlet,
  useLocation,
  matchPath,
  useNavigate,
  RootState,
  useSelector,
} from '@srclaunch/web-application-state';
import { memo, ReactElement, useEffect, useState } from 'react';
import { PageRole, PageRoute } from '@srclaunch/types';

import { BackgroundColors, ContainerProps } from '../../types';
import { EntityPanel } from '../data/entities/EntityPanel';
import { ErrorBoundary } from '../errors/ErrorBoundary';
import { Container } from '../layout/Container';
import { Backdrop } from '../modals/Backdrop';
import { LoadingOverlay } from '../progress/LoadingOverlay';

type WebApplicationProps = {
  readonly authentication?: boolean;
  readonly actions?: Record<string, (...args: readonly any[]) => any>;
  readonly httpClient?: typeof HttpClient;
} & ContainerProps<HTMLDivElement>;

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
    const [loginRequired, setLoginRequired] = useState(true);

    const location = useLocation();
    const navigate = useNavigate();

    const inProgress = useSelector(
      (state: RootState) => state.user.authentication.login.inProgress,
    );
    const loggedIn = useSelector(
      (state: RootState) => state.user.authentication.state.loggedIn,
    );
    const routes: PageRoute[] = useSelector(
      (state: RootState) => state.app.routes.list,
    );

    const indexPagePath =
      routes.find(r => r.role === PageRole.Index)?.path ?? '/';
    const loginPagePath =
      routes.find(r => r.role === PageRole.Login)?.path ?? 'login';

    const checkAuth = () => {
      routes.forEach(route => {
        const routePath = route?.path ?? '';
        const match = matchPath(route?.path ?? '', location.pathname);

        if (match) {
          setLoginRequired(route?.loginRequired ?? false);
        }

        if (
          loginPagePath &&
          match &&
          routePath === loginPagePath &&
          loggedIn &&
          !inProgress
        ) {
          navigate(indexPagePath);
        } else if (
          loginPagePath &&
          routePath !== loginPagePath &&
          match &&
          route.loginRequired &&
          !loggedIn &&
          !inProgress
        ) {
          navigate(loginPagePath);
        }
      });
    };

    useEffect(() => {
      if (authentication) checkAuth();
    }, [location.pathname]);

    useEffect(() => {
      if (authentication) checkAuth();
    }, [loggedIn]);

    useEffect(() => {
      if (authentication) checkAuth();
    }, [inProgress]);

    useEffect(() => {
      if (authentication) checkAuth();
    }, []);

    const { current, list } = useSelector(
      (state: RootState) => state.ui.themes,
    );
    const loginCondition = authentication
      ? (loggedIn && (loginRequired || !loginRequired)) ||
        (!loggedIn && !loginRequired)
      : true;

    const showOutlet = !inProgress && loginCondition;

    return (
      <Container
        backgroundColor={backgroundColor}
        className={`${className} web-application`}
        {...props}
      >
        <ThemeProvider theme={current} themes={list}>
          <LoadingOverlay visible={!showOutlet} />

          <Backdrop visible={false} />

          {showOutlet && <Outlet />}

          <EntityPanel actions={actions} httpClient={httpClient} />
        </ThemeProvider>
      </Container>
    );
  },
);
