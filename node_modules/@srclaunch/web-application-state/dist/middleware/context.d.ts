import { RootState } from '..';
import { Middleware } from 'redux';
declare const contextMiddleware: Middleware<{}, // Most middleware do not modify the dispatch return value
RootState>;
export default contextMiddleware;
//# sourceMappingURL=context.d.ts.map