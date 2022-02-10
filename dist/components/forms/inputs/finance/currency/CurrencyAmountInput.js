import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Condition } from '@srclaunch/types';
import { validate } from '@srclaunch/validation';
import { memo, useEffect, useRef, useState } from 'react';
import CurrencyInputField from 'react-currency-input-field';
import { Amount, BackgroundColors, BorderColors, BorderStyle, DepthShadow, Size, TextColors, TextWeight, } from '../../../../../types';
import { Label } from '../../../../typography/Label';
import { InputLabel } from '../../../labels/InputLabel';
import { InputContainer } from '../../shared/InputContainer';
export const CurrencyAmountInput = memo(({ backgroundColor = BackgroundColors.InputControl, boxShadow = DepthShadow.Low, border = {
    color: BorderColors.InputControl,
    style: BorderStyle.Solid,
    width: 1,
}, className = '', defaultValue, label, name, onChange, size = Size.Default, textColor = TextColors.InputControl, textWeight = TextWeight.Default, validation = { [Condition.IsCurrency]: true }, }) => {
    const [value, setValue] = useState(defaultValue ?? 0);
    const [focused, setFocused] = useState(false);
    const [problems, setProblems] = useState([]);
    const inputRef = useRef(null);
    const [valueChanged, setValueChanged] = useState(false);
    useEffect(() => {
        if (validation && valueChanged) {
            const probs = validate(value, validation);
            setProblems(probs);
            if (onChange)
                onChange({
                    problems: probs,
                    validated: probs.length === 0,
                    value,
                });
        }
        else {
            setProblems([]);
            if (onChange && value)
                onChange({
                    problems: [],
                    validated: true,
                    value,
                });
        }
    }, [value]);
    return (_jsxs(_Fragment, { children: [(label || problems.length > 0) && (_jsx(InputLabel, { errorMessage: problems[0]?.message.short, children: label }, void 0)), _jsxs(InputContainer, { backgroundColor: backgroundColor, border: border, boxShadow: boxShadow, className: `${className} currency-amount-input`, onClick: () => {
                    if (inputRef.current)
                        inputRef.current.focus();
                }, error: problems, focused: focused, children: [_jsx(Label, { marginLeft: Amount.Less, marginRight: Amount.Least, textColor: !value ? TextColors.InputPlaceholder : textColor, children: "$" }, void 0), _jsx(CurrencyInputField, { className: "currency-input", onBlur: () => setFocused(false), onFocus: () => setFocused(true), name: name, defaultValue: value ? Number(value).toFixed(2) : 0, 
                        // fixedDecimalLength={2}
                        onValueChange: v => {
                            setValueChanged(true);
                            setValue(Number.parseInt(v ?? '0'));
                        }, style: {
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: !value
                                ? `rgb(${TextColors.InputPlaceholder})`
                                : `rgb(${TextColors.InputControl})`,
                            flexGrow: 1,
                            fontWeight: textWeight,
                            lineHeight: size,
                        } }, void 0)] }, void 0)] }, void 0));
});
//# sourceMappingURL=CurrencyAmountInput.js.map