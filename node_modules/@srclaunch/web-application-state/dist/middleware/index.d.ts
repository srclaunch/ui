import { AnyAction, Dispatch, Middleware } from '@reduxjs/toolkit';
import { History } from 'history';
export declare function createMiddleware(history: History, appMiddleware: readonly Middleware[]): readonly Middleware<{}, any, Dispatch<AnyAction>>[];
//# sourceMappingURL=index.d.ts.map