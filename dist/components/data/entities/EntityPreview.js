import { jsx as _jsx } from "react/jsx-runtime";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { memo } from 'react';
import { LoadingOverlay } from '../../progress/LoadingOverlay';
import { Container } from '../../layout/Container';
// import Edit from './Edit';
// import AccountMoreMenu from './MoreMenu';
// import New from './New';
// import Preview from './Preview';
export const EntityPreview = memo(({ id, model }) => {
    return (_jsx(Container, { "data-testid": "account-pane", children: _jsx(LoadingOverlay, { visible: false }, void 0) }, void 0));
});
//# sourceMappingURL=EntityPreview.js.map