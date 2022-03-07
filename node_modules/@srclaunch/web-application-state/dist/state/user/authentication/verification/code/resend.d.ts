import { Exception } from '@srclaunch/exceptions';
import { ISO8601String } from '@srclaunch/types';
import { AppThunk } from '../../../../../index';
declare type VerificationCodeResendState = {
    error?: Exception | Error;
    lastUpdated?: ISO8601String;
    inProgress: boolean;
    success?: boolean;
};
declare const _default: import("redux").Reducer<VerificationCodeResendState, import("redux").AnyAction>;
export default _default;
export declare const resendVerificationCode: ({ userId }: {
    userId: string;
}) => AppThunk;
//# sourceMappingURL=resend.d.ts.map