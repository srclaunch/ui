import { useEffect, useState } from 'react';
import { matchPath } from 'react-router';
import {
  useLocation,
  useSelector,
  RootState,
  useNavigate,
  useMatch,
  useResolvedPath,
} from '@srclaunch/web-application-state';
import { PageRole, PageRoute } from '@srclaunch/types';

export function useAuthentication({
  enabled = true,
  redirect = true,
}: {
  enabled?: boolean;
  redirect?: boolean;
}) {
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
        !inProgress &&
        redirect
      ) {
        navigate(indexPagePath);
      } else if (
        loginPagePath &&
        routePath !== loginPagePath &&
        match &&
        route.loginRequired &&
        !loggedIn &&
        !inProgress &&
        redirect
      ) {
        navigate(loginPagePath);
      }
    });
  };

  useEffect(() => {
    if (enabled) checkAuth();
  }, [location.pathname]);

  useEffect(() => {
    if (enabled) checkAuth();
  }, [loggedIn]);

  useEffect(() => {
    if (enabled) checkAuth();
  }, [inProgress]);

  useEffect(() => {
    if (enabled) checkAuth();
  }, []);

  return {
    inProgress,
    loggedIn,
    loginRequired,
  };
}
