declare const _default: import("redux").Reducer<import("redux").CombinedState<{
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
}>, import("redux").AnyAction>;
export default _default;
//# sourceMappingURL=index.d.ts.map