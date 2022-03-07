import { Exception } from '@srclaunch/exceptions';
import { CommunicationMedium, ISO8601String } from '@srclaunch/types';
import { AppThunk } from '../../../../../index';
declare type VerificationStatusState = {
    readonly delivery?: {
        readonly destination: string;
        readonly medium: CommunicationMedium.Email | CommunicationMedium.PhoneNumber;
    };
    readonly error?: Exception | Error;
    readonly inProgress: boolean;
    readonly lastUpdated?: ISO8601String;
    readonly status?: string;
    readonly success?: boolean;
};
declare const _default: import("redux").Reducer<VerificationStatusState, import("redux").AnyAction>;
export default _default;
export declare const getVerificationDetails: ({ userId }: {
    readonly userId: string;
}) => AppThunk;
//# sourceMappingURL=status.d.ts.map