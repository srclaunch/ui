import { Theme } from '@srclaunch/types';
declare type ThemeState = {
    current?: Theme['id'];
    list?: Theme[];
};
export declare const addThemes: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>, setTheme: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>;
declare const _default: import("redux").Reducer<ThemeState, import("redux").AnyAction>;
export default _default;
//# sourceMappingURL=themes.d.ts.map