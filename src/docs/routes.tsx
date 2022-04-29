import { RouteRole, Route } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import { Introduction } from './pages/Introduction';

import { PageNotFound } from './pages/PageNotFound';

// import { LinearGauge, RadialGauge } from '../../dist';
import { Component } from './types/component';
import { ComponentCategoryPage } from './pages/ComponentCategory';
import { ComponentPage } from './pages/Component';
import { RouterView } from '../components/navigation/RouterView';
import componentLibrary from './component-library';

export const getRoutes = (components?: Component[]): Component[] => {
  if (!components || components.length === 0) {
    return [];
  }

  let routes: Component[] = [];

  for (const component of components) {
    routes = [
      ...routes,
      {
        ...component,
      },
    ];

    if (component.components) {
      routes = [...routes, ...getRoutes(component.components)];
    }
  }

  return routes;
};

export const ComponentLibraryPage = memo((): ReactElement => {
  const routes = getRoutes(componentLibrary.components);

  return (
    <RouterView
      routes={[
        ...routes.map(route => ({
          path: route.path,
          component: route.component ? ComponentPage : ComponentCategoryPage,
        })),
        {
          component: PageNotFound,
          path: '*',
          role: RouteRole.PageNotFound,
        },
      ]}
    />
  );
});

export default [
  {
    component: ComponentLibraryPage,
    path: '*',
  },
  {
    component: Introduction,
    role: RouteRole.Index,
  },
] as Route[];
