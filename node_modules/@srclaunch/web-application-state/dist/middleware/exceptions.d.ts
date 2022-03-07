import { Middleware } from 'redux';
import { RootState } from '../index';
declare const exceptionLogger: Middleware<{}, // Most middleware do not modify the dispatch return value
RootState>;
export default exceptionLogger;
//# sourceMappingURL=exceptions.d.ts.map