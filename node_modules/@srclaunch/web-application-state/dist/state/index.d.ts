import { AnyAction, Reducer } from '@reduxjs/toolkit';
import { Model } from '@srclaunch/types';
export declare const createRootReducer: ({ models, reducers, }: {
    models?: Record<string, Model> | undefined;
    reducers?: {
        [k: string]: Reducer<unknown, AnyAction>;
    } | undefined;
}) => Reducer;
//# sourceMappingURL=index.d.ts.map