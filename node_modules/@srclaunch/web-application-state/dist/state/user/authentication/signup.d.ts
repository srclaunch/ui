import { Exception } from '@srclaunch/exceptions';
import { ISO8601String } from '@srclaunch/types';
import { AppThunk } from '../../../index';
declare type SignupState = {
    readonly error?: Exception | Error;
    readonly lastUpdated?: ISO8601String;
    readonly inProgress: boolean;
    readonly success?: boolean;
    readonly userId?: string;
};
declare const _default: import("redux").Reducer<SignupState, import("redux").AnyAction>;
export default _default;
export declare const signUp: ({ firstName, lastName, password, username, }: {
    readonly firstName: string;
    readonly lastName: string;
    readonly password: string;
    readonly username: string;
}) => AppThunk;
//# sourceMappingURL=signup.d.ts.map