import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { Logger } from '@srclaunch/logger';
import { Exception } from '@srclaunch/exceptions';
export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { exception: undefined, hasError: false };
    }
    static getDerivedStateFromError(err) {
        const logger = new Logger();
        const exception = new Exception(err.name + ': ' + err.message, {
            cause: err,
        });
        logger.exception(exception.toJSON());
        return { exception, hasError: true };
    }
    componentDidCatch(err) { }
    render() {
        return this.state.hasError ? (_jsx(_Fragment, { children: this.state.exception?.message }, void 0)) : (_jsx(_Fragment, { children: this.props.children }, void 0));
    }
}
//# sourceMappingURL=ErrorBoundary.js.map