import { createStore, renderReduxWebApp } from '@srclaunch/state';
import { WebApplicationConfig } from '@srclaunch/types';
// import { AppLabDarkTheme } from '@srclaunch/themes';

import routes from './routes';
import reducers from './state/index';
import { AppLabLightTheme } from '@srclaunch/themes';
import { WebApplication } from '..';

const config: WebApplicationConfig = {
  ui: {
    themes: {
      default: AppLabLightTheme.id,
    },
  },
};

export const store = createStore({
  reducers,
});

renderReduxWebApp({
  authentication: false,
  container: <WebApplication />,
  config,
  routes,
  store,
});
