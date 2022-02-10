import { Exception } from '@srclaunch/exceptions';
import { DateTime } from 'luxon';
export declare const selectors: import("@reduxjs/toolkit").EntitySelectors<{}, any>;
declare type PropertyState = {
    readonly error?: Exception | Error;
    readonly in_progress: boolean;
    readonly initialized: boolean;
    readonly last_updated?: DateTime;
};
export declare function getProperty(): Promise<void>;
export declare function getProperties(): Promise<void>;
export declare function createProperty(): Promise<void>;
export declare function updateProperty(): Promise<void>;
export declare function deleteProperty(): Promise<void>;
declare const _default: import("redux").Reducer<import("@reduxjs/toolkit").EntityState<{}> & PropertyState, import("redux").AnyAction>;
export default _default;
//# sourceMappingURL=example.d.ts.map