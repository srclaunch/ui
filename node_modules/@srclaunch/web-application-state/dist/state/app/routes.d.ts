import { PageRoute } from '@srclaunch/types';
declare type AppState = {
    list?: Omit<PageRoute, 'component'>[];
};
export declare const setRoutes: import("@reduxjs/toolkit").ActionCreatorWithPayload<Omit<PageRoute, "component">[], string>;
declare const _default: import("redux").Reducer<AppState, import("redux").AnyAction>;
export default _default;
//# sourceMappingURL=routes.d.ts.map