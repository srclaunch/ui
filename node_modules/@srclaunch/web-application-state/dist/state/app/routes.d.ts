import { Route as RouteType } from '@srclaunch/types';
declare type AppState = {
    list?: Omit<RouteType, 'component'>[];
};
export declare const setRoutes: import("@reduxjs/toolkit").ActionCreatorWithPayload<Omit<RouteType, "component">[], string>;
declare const _default: import("redux").Reducer<AppState, import("redux").AnyAction>;
export default _default;
//# sourceMappingURL=routes.d.ts.map