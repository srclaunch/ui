import { ReactElement, useEffect, useState } from 'react';
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
import { RouteRole, Route } from '@srclaunch/types';
import { BackgroundColors, Fill, PositionBehavior } from '../../types';
import { EntityPanel } from '../data/entities/EntityPanel';
import { Container, ContainerProps } from '../layout/Container';
import { Backdrop } from '../modals/Backdrop';
import { LoadingOverlay } from '../progress/LoadingOverlay';

type WebApplicationProps = ContainerProps & {
  readonly authentication?: boolean;
  readonly actions?: Record<string, (...args: readonly any[]) => any>;
  readonly httpClient?: typeof HttpClient;
};

export const WebApplication = ({
  actions,
  authentication = false,
  background = {},
  children,
  className = '',
  httpClient,
  size = {},
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
  const routes: Route[] = useSelector(
    (state: RootState) => state.app.routes.list,
  );

  const indexPagePath =
    routes.find(r => r.role === RouteRole.Index)?.path ?? '/';
  const loginPagePath =
    routes.find(r => r.role === RouteRole.Login)?.path ?? 'login';

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

  const { current, list } = useSelector((state: RootState) => state.ui.themes);
  const loginCondition = authentication
    ? (loggedIn && (loginRequired || !loginRequired)) ||
      (!loggedIn && !loginRequired)
    : true;

  const showOutlet = !inProgress && loginCondition;

  return (
    <Container
      background={{ color: BackgroundColors.Lightest, ...background }}
      className={`${className} web-application`}
      position={{
        behavior: PositionBehavior.Absolute,
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
      }}
      size={{
        fill: Fill.Both,
        ...size,
      }}
      {...props}
    >
      <ThemeProvider theme={current} themes={list}>
        <LoadingOverlay
          states={{
            state: {
              visible: !showOutlet,
            },
          }}
        />

        {showOutlet && <Outlet />}

        <EntityPanel actions={actions} httpClient={httpClient} />
      </ThemeProvider>
    </Container>
  );
};
