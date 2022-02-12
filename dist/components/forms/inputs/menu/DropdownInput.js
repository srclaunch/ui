import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { validate } from '@srclaunch/validation';
import { memo, useEffect, useState } from 'react';
import { Amount, BackgroundColors, BorderColors, BorderStyle, Depth, DepthShadow, Orientation, Size, } from '../../../../types';
import { Container } from '../../../layout/Container';
import { Menu } from '../../../menus/Menu';
import { InputLabel } from '../../labels/InputLabel';
import { DropdownControl } from '../shared/DropdownControl';
import { DropdownPanel } from '../shared/DropdownPanel';
export const DropdownInput = memo(({ backgroundColor = BackgroundColors.DropdownMenu, border = {
    color: BorderColors.InputControl,
    style: BorderStyle.Solid,
    width: 1,
}, borderRadius = Amount.Least, className = '', defaultValue, label, menu, maxWidth = 300, minWidth = 240, name, onChange, padding = 5, placeholder, size = Size.Default, validation, ...props }) => {
    // const [value, setValue] = useState(defaultValue);
    const [focused, setFocused] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [problems, setProblems] = useState([]);
    const [item, setItem] = useState(menu?.find((i) => i.value === defaultValue));
    const [valueChanged, setValueChanged] = useState(false);
    // useEffect(() => {
    //   if (onChange && item)
    //     onChange({
    //       value: item.value as CountryCode | CurrencyCode | LanguageCode,
    //     });
    // }, [item]);
    useEffect(() => {
        if (validation && valueChanged) {
            const probs = validate(item, validation);
            setProblems(probs);
            if (onChange)
                onChange({
                    problems: probs,
                    validated: probs.length === 0,
                    value: item?.value,
                });
        }
        else {
            setProblems([]);
            if (onChange)
                onChange({
                    problems: [],
                    validated: true,
                    value: item?.value,
                });
        }
    }, [item]);
    useEffect(() => {
        setItem(menu?.find((i) => i.value === defaultValue) ??
            item ??
            undefined);
    }, [defaultValue]);
    return (_jsxs(_Fragment, { children: [(label || problems.length > 0) && (_jsx(InputLabel, { error: problems, children: label }, void 0)), _jsxs(Container, { boxShadow: menuVisible ? DepthShadow.Higher : DepthShadow.Surface, borderRadius: borderRadius, className: `${className} dropdown-input`, depth: menuVisible ? Depth.Higher : Depth.Surface, grow: false, minWidth: minWidth, orientation: Orientation.Vertical, onMouseLeave: () => setMenuVisible(false), height: size, ...props, children: [_jsx(DropdownControl, { backgroundColor: backgroundColor, border: border, boxShadow: DepthShadow.Low, component: item?.component, depth: Depth.High, error: problems, focused: focused, icon: item?.icon, label: item?.label, menuVisible: menuVisible, name: name, onBlur: () => {
                            setFocused(false);
                        }, onFocus: () => setFocused(true), onClick: () => setMenuVisible(!menuVisible), placeholder: placeholder, size: size }, void 0), _jsx(DropdownPanel, { backgroundColor: backgroundColor, borderRadius: borderRadius, focused: focused, padding: padding, visible: menuVisible, children: _jsx(Menu, { backgroundColor: BackgroundColors.Light, borderRadius: borderRadius, menu: menu, onItemClick: i => {
                                setValueChanged(true);
                                setItem(i);
                                setMenuVisible(false);
                            }, padding: padding }, void 0) }, void 0)] }, void 0)] }, void 0));
});
//# sourceMappingURL=DropdownInput.js.map