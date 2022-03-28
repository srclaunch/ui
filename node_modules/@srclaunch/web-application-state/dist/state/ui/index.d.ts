declare const _default: import("redux").Reducer<import("redux").CombinedState<{
    modals: import("@reduxjs/toolkit").EntityState<import("@srclaunch/types").Modal>;
    notifications: import("@reduxjs/toolkit").EntityState<{
        color?: string | undefined;
        id: number;
        icon?: string | undefined;
        message: string;
        timed: boolean;
        type?: import("@srclaunch/types").NotificationType | undefined;
        seconds: number;
    }>;
    themes: {
        current?: string | undefined;
        list?: import("@srclaunch/types").Theme[] | undefined;
    };
}>, import("redux").AnyAction>;
export default _default;
//# sourceMappingURL=index.d.ts.map