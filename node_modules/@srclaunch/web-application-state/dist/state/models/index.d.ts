import { AnyAction, Reducer } from '@reduxjs/toolkit';
import { Model } from '@srclaunch/types';
import { AppThunk } from '../../index';
declare type ModelState = {
    models?: {
        [name: string]: Model;
    };
};
export declare const createModelsReducer: (models?: Record<string, Model>) => Reducer<ModelState, AnyAction>;
export declare const showModelPanel: ({ edit, model, id, }: {
    edit?: boolean | undefined;
    model: Model['name'];
    id?: Model['id'];
}) => AppThunk;
export declare const hideModelPanel: () => AppThunk;
export {};
//# sourceMappingURL=index.d.ts.map