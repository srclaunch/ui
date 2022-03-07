import { Exception } from '@srclaunch/exceptions';
import { ISO8601String } from '@srclaunch/types';
import { AppThunk } from '../../../index';
declare type LoginState = {
    readonly error?: Exception | Error;
    readonly lastUpdated?: ISO8601String;
    readonly inProgress: boolean;
    readonly success?: boolean;
};
declare const _default: import("redux").Reducer<LoginState, import("redux").AnyAction>;
export default _default;
export declare const login: ({ username, password, }: {
    readonly username: string;
    readonly password: string;
}) => AppThunk;
export declare const refreshSession: () => AppThunk;
export declare const logout: () => AppThunk;
//# sourceMappingURL=login.d.ts.map