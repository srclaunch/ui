import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Condition } from '@srclaunch/types';
import { 
// getValidationProblemLabel,
validate, } from '@srclaunch/validation';
import { memo, useEffect, useRef, useState, } from 'react';
import styled from 'styled-components';
import { FocusedStyles } from '../../../../styles/focused';
import { TextStyles } from '../../../../styles/typography';
import { Align, Amount, BackgroundColors, BorderColors, BorderStyle, Cursor, DepthShadow, Orientation, Size, TextColors, TextSize, TextWeight, } from '../../../../types';
import { ErrorLabel } from '../../../errors/ErrorLabel';
import { Container } from '../../../layout/Container';
import { ProgressSpinner } from '../../../progress/ProgressSpinner';
import { Label } from '../../../typography/Label';
import { InputLabel } from '../../labels/InputLabel';
import { InputContainer } from '../shared/InputContainer';
export const SSNInput = memo(({ as, backgroundColor = BackgroundColors.InputControl, boxShadow = DepthShadow.Low, border = {
    color: BorderColors.InputControl,
    style: BorderStyle.Solid,
    width: 1,
}, className = '', cursor = Cursor.Text, defaultValue, error, hidden = false, icon, inProgress = false, label, name, onChange, onKeyPress, placeholder = '', size = Size.Default, textColor = TextColors.InputControl, textWeight = TextWeight.Default, validation = { [Condition.IsSSN]: true }, ...props }) => {
    const [value, setValue] = useState(defaultValue
        ? [
            Number.parseInt(defaultValue?.toString().slice(0, 3) || '000'),
            Number.parseInt(defaultValue?.toString().slice(3, 5) || '00'),
            Number.parseInt(defaultValue?.toString().slice(5) || '0000'),
        ]
        : []);
    const [valueChanged, setValueChanged] = useState(false);
    const [focused, setFocused] = useState(false);
    const [problems, setProblems] = useState([]);
    const firstInputRef = useRef();
    const secondInputRef = useRef();
    const thirdInputRef = useRef();
    useEffect(() => {
        setValueChanged(true);
        if (valueChanged) {
            const probs = validate(value, validation);
            setProblems(probs);
            if (onChange && value)
                onChange({
                    problems: probs,
                    validated: probs.length === 0,
                    value: Number.parseInt(value.join('')),
                });
        }
    }, [value]);
    return (_jsxs(_Fragment, { children: [_jsxs(Container, { orientation: Orientation.Horizontal, children: [label && _jsx(InputLabel, { children: label }, void 0), problems.length > 0 ? (_jsx(ErrorLabel, { alignContent: Align.Right, children: problems[0]?.message.short }, void 0)) : null] }, void 0), _jsxs(InputContainer, { backgroundColor: backgroundColor, border: border, boxShadow: boxShadow, cursor: cursor, className: `${className} ssn-input`, error: problems, focused: focused, onClick: () => {
                    if (!focused && firstInputRef.current) {
                        firstInputRef.current.focus();
                    }
                }, orientation: Orientation.Horizontal, paddingLeft: Amount.Least, paddingRight: Amount.Least, size: size, ...props, children: [icon && _jsx(_Fragment, { children: icon }, void 0), _jsx(Input, { alignText: Align.Center, 
                        // defaultValue={defaultValue}
                        hidden: hidden, max: 999, min: 100, name: name, onBlur: () => setFocused(false), 
                        // @ts-ignore
                        onChange: (e) => {
                            setValueChanged(true);
                            setValue([e.target.value, value[1], value[2]]);
                            if (e.target.value.length === 3 && secondInputRef.current) {
                                secondInputRef.current?.focus();
                            }
                        }, onFocus: () => setFocused(true), lineHeight: size, placeholder: "123", onKeyPress: (e) => {
                            if (e.target.value.length === 3) {
                                e.preventDefault();
                            }
                        }, 
                        // @ts-ignore
                        ref: firstInputRef, textColor: textColor, type: "number" }, void 0), _jsx(Label, { textSize: TextSize.Larger, children: "-" }, void 0), _jsx(Input, { alignText: Align.Center, 
                        // defaultValue={defaultValue}
                        hidden: hidden, max: 99, min: 1, name: name, onBlur: () => setFocused(false), 
                        // @ts-ignore
                        onChange: (e) => {
                            setValueChanged(true);
                            setValue([value[0], e.target.value, value[2]]);
                            if (e.target.value.length === 2) {
                                thirdInputRef.current?.focus();
                            }
                        }, onFocus: () => setFocused(true), lineHeight: size, placeholder: "45", onKeyPress: (e) => {
                            if (e.target.value.length === 2) {
                                e.preventDefault();
                            }
                        }, onKeyDown: (e) => {
                            if (e.key === 'Backspace' && e.target.value.length === 0) {
                                firstInputRef.current?.focus();
                            }
                        }, 
                        // @ts-ignore
                        ref: secondInputRef, textColor: textColor, type: "number" }, void 0), _jsx(Label, { textSize: TextSize.Larger, children: "-" }, void 0), _jsx(Input, { alignText: Align.Center, 
                        // defaultValue={defaultValue}
                        hidden: hidden, max: 9999, min: 1000, name: name, onBlur: () => setFocused(false), onChange: (e) => {
                            setValueChanged(true);
                            setValue([value[0], value[1], e.target.value]);
                        }, onFocus: () => setFocused(true), lineHeight: size, placeholder: "6789", onKeyPress: (e) => {
                            if (e.target.value.length === 4) {
                                e.preventDefault();
                            }
                        }, onKeyDown: (e) => {
                            if (e.key === 'Backspace' && e.target.value.length === 0) {
                                secondInputRef.current?.focus();
                            }
                        }, 
                        // @ts-ignore
                        ref: thirdInputRef, textColor: textColor, type: "number" }, void 0), inProgress && (_jsx(Container, { grow: false, children: _jsx(ProgressSpinner, { size: Size.Small }, void 0) }, void 0))] }, void 0)] }, void 0));
});
// const Container = styled.div<LayoutProps<AppearanceProps<null>>>`
//   ${LayoutStyles};
//   ${AppearanceStyles};
//   ${ElementStyles};
//   ${InputStyles};
//   ${FocusedStyles};
//   cursor: text;
// `;
const Input = styled.input `
  ${FocusedStyles};
  ${TextStyles};

  background: transparent;
  border: none;
  outline: none;
  padding: 0 ${Amount.Least};
  -moz-appearance: textfield;

  &::placeholder {
    color: rgb(${TextColors.InputPlaceholder});
  }
  &::-webkit-input-placeholder {
    color: rgb(${TextColors.InputPlaceholder});
  }
  &::-moz-placeholder {
    color: rgb(${TextColors.InputPlaceholder});
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
//# sourceMappingURL=SSNInput.js.map