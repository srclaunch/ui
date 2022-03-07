import { Exception } from '@srclaunch/exceptions';
import { ISO8601String } from '@srclaunch/types';
import { AppThunk } from '../../../index';
declare type UsernameAvailabilityState = {
    readonly available?: boolean;
    readonly error?: Exception | Error;
    readonly lastUpdated?: ISO8601String;
    readonly inProgress: boolean;
    readonly success?: boolean;
};
declare const _default: import("redux").Reducer<UsernameAvailabilityState, import("redux").AnyAction>;
export default _default;
export declare const checkUsernameAvailability: ({ username }: {
    readonly username: string;
}) => AppThunk;
//# sourceMappingURL=username-availability.d.ts.map