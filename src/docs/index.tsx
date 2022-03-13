import { AppLabLightTheme } from '@srclaunch/themes';
import { WebApplicationConfig } from '@srclaunch/types';
import {
  createStore,
  renderReduxWebApp,
} from '@srclaunch/web-application-state';

import reducers from './state/index';
import routes from './routes';
import { WebApplication } from '../components/containers/WebApplication';

const config: WebApplicationConfig = {
  ui: {
    themes: {
      default: AppLabLightTheme.id,
    },
  },
};

const store = createStore({
  // @ts-ignore
  reducers,
});

renderReduxWebApp({
  authentication: false,
  config,
  container: <WebApplication />,
  // @ts-ignore
  routes,
  store,
});
