import { Exception } from '@srclaunch/exceptions';
import { ISO8601String } from '@srclaunch/types';
import { AppThunk } from '../../../../../index';
declare type VerificationCodeVerifyState = {
    error?: Exception | Error;
    lastUpdated?: ISO8601String;
    inProgress: boolean;
    success?: boolean;
};
declare const _default: import("redux").Reducer<VerificationCodeVerifyState, import("redux").AnyAction>;
export default _default;
export declare const verifyCode: ({ code, userId }: {
    code: string;
    userId: string;
}) => AppThunk;
//# sourceMappingURL=verify.d.ts.map