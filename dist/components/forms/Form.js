import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useEffect, useState } from 'react';
import { Amount, Orientation, Size } from '../../types';
// import { getFormFieldsFromModel } from '../../lib/forms/fields';
import { Container } from '../layout/Container';
import { Button, ButtonType } from './buttons/Button';
import { FormActions } from './FormActions';
import { FormFields } from './FormFields';
export const Form = memo(({ className = '', entity, fields, inProgress = false, onChange, onSubmit, model, name, padding = Amount.None, submitButton, ...props }) => {
    const [fieldValues, setFieldValues] = useState({});
    const [validationProblems, setValidationProblems] = useState();
    const [isValidated, setValidated] = useState(false);
    const [requiresValidation, setRequiresValidation] = useState(false);
    const submitButtonProps = {
        fullWidth: false,
        label: 'Submit',
        size: Size.Large,
        type: ButtonType.Primary,
        ...submitButton,
    };
    useEffect(() => {
        let problems = [];
        let validationRequired = false;
        for (const field of Object.entries(fieldValues)) {
            if (field[1].validation) {
                validationRequired = true;
            }
            if (field[1].problems) {
                problems = [...problems, ...field[1].problems];
            }
        }
        setRequiresValidation(validationRequired);
        setValidationProblems(problems);
        const validated = requiresValidation &&
            Object.values(fieldValues).filter(field => field.validation && !field.validated).length === 0;
        setValidated(validated);
        if (onChange)
            onChange({ fields: fieldValues, problems, validated });
    }, [fieldValues]);
    return (_jsxs(Container, { as: "form", borderRadius: Amount.More, className: `${className} form`, id: name, orientation: Orientation.Vertical, name: name, padding: padding, ...props, children: [fields && (_jsx(FormFields, { entity: entity, fields: fields, onChange: ff => setFieldValues(ff) }, void 0)), submitButton && (_jsx(FormActions, { children: _jsx(Button, { disabled: (requiresValidation && !isValidated) || inProgress, form: name, fullWidth: submitButtonProps.fullWidth, onClick: e => {
                        e.preventDefault();
                        if (onSubmit)
                            onSubmit({
                                fields: fieldValues,
                                problems: validationProblems,
                                validated: isValidated,
                                values: Object.entries(fieldValues).map(([fieldName, field]) => ({
                                    [fieldName]: field.value,
                                })),
                            });
                    }, onKeyPress: e => {
                        if (e.key === 'Enter' && onSubmit)
                            onSubmit({
                                fields: fieldValues,
                                problems: validationProblems,
                                validated: isValidated,
                            });
                    }, size: submitButtonProps.size ?? Size.Large, type: submitButtonProps.type ?? ButtonType.Primary, children: submitButton.label }, void 0) }, void 0))] }, void 0));
});
//# sourceMappingURL=Form.js.map