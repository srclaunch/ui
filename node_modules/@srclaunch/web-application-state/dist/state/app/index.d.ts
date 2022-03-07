declare const _default: import("redux").Reducer<import("redux").CombinedState<{
    config: import("@srclaunch/types").WebApplicationConfig;
    navigation: {
        detail: string;
        history: {
            page: string;
            detail: string;
        }[];
        page: string;
    };
    routes: {
        list?: Omit<import("@srclaunch/types").PageRoute, "component">[] | undefined;
    };
}>, import("redux").AnyAction>;
export default _default;
//# sourceMappingURL=index.d.ts.map