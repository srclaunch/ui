import { ISO8601String } from '@srclaunch/types';
declare type AuthenticationState = {
    initialized: boolean;
    lastUpdated?: ISO8601String;
    loggedIn: boolean;
    tokens?: {
        accessToken: string;
    };
};
export declare const setLoggedIn: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    accessToken: string;
}, string>, setLoggedOut: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>;
declare const _default: import("redux").Reducer<import("redux").CombinedState<{
    state: AuthenticationState;
    login: {
        readonly error?: import("@srclaunch/exceptions").Exception | Error | undefined;
        readonly lastUpdated?: string | undefined;
        readonly inProgress: boolean;
        readonly success?: boolean | undefined;
    };
    signup: {
        readonly error?: import("@srclaunch/exceptions").Exception | Error | undefined;
        readonly lastUpdated?: string | undefined;
        readonly inProgress: boolean;
        readonly success?: boolean | undefined;
        readonly userId?: string | undefined;
    };
    usernameAvailability: {
        readonly available?: boolean | undefined;
        readonly error?: import("@srclaunch/exceptions").Exception | Error | undefined;
        readonly lastUpdated?: string | undefined;
        readonly inProgress: boolean;
        readonly success?: boolean | undefined;
    };
    verification: import("redux").CombinedState<{
        code: import("redux").CombinedState<{
            resend: {
                error?: import("@srclaunch/exceptions").Exception | Error | undefined;
                lastUpdated?: string | undefined;
                inProgress: boolean;
                success?: boolean | undefined;
            };
            status: {
                readonly delivery?: {
                    readonly destination: string;
                    readonly medium: import("@srclaunch/types").CommunicationMedium;
                } | undefined;
                readonly error?: import("@srclaunch/exceptions").Exception | Error | undefined;
                readonly inProgress: boolean;
                readonly lastUpdated?: string | undefined;
                readonly status?: string | undefined;
                readonly success?: boolean | undefined;
            };
            verify: {
                error?: import("@srclaunch/exceptions").Exception | Error | undefined;
                lastUpdated?: string | undefined;
                inProgress: boolean;
                success?: boolean | undefined;
            };
        }>;
    }>;
}>, import("redux").AnyAction>;
export default _default;
//# sourceMappingURL=index.d.ts.map