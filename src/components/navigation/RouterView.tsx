import { PageRoute } from '@srclaunch/types';
import { memo, ReactElement } from 'react';
import { Router, Routes, Route } from '@srclaunch/web-application-state';
import {
  Amount,
  BackgroundColors,
  DepthShadow,
  Fill,
  Overflow,
} from '../../types';
import { Container, ContainerProps } from '../layout/Container';

export type RouterViewProps = {
  routes: PageRoute[];
} & Omit<ContainerProps, 'children'>;

export const RouterView = memo(
  ({
    alignment = {},
    className = '',
    routes = [],
    ...props
  }: RouterViewProps): ReactElement => {
    return (
      <Routes>
        {routes.map((route, key) => {
          return (
            <Route
              element={<route.component />}
              path={route.path}
              key={key}
              {...route}
            />
          );
        })}
      </Routes>
    );
  },
);
