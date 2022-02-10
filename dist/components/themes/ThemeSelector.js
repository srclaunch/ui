import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { useDispatch, useSelector, setTheme, } from '@srclaunch/state';
import { DropdownInput, } from '../forms/inputs/menu/DropdownInput';
import { Container } from '../layout/Container';
import { InputLabel } from '../forms/labels/InputLabel';
export const ThemeSelector = memo(({ ...props }) => {
    const dispatch = useDispatch();
    const { current, list } = useSelector((state) => state.ui.themes);
    return (_jsxs(Container, { children: [_jsx(InputLabel, { children: "Theme" }, void 0), _jsx(DropdownInput, { defaultValue: current, name: "theme", menu: list.map((i) => {
                    return {
                        label: i.name,
                        value: i.id,
                    };
                }), onChange: ({ value }) => {
                    const newTheme = list.find((t) => t.id === value);
                    dispatch(setTheme(newTheme.id));
                }, placeholder: 'Choose a theme', ...props }, void 0)] }, void 0));
});
//# sourceMappingURL=ThemeSelector.js.map