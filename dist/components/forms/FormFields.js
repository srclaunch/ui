import { jsx as _jsx } from "react/jsx-runtime";
import { Primitives } from '@srclaunch/types';
import { memo, useEffect, useState } from 'react';
import { getInputElementByFieldType } from '../../lib/forms/inputs';
import { Amount, Orientation } from '../../types';
import { Container } from '../layout/Container';
import { InputRow } from './layout/InputRow';
export const FormFields = memo(({ entity, fields, onChange, 
// setFieldValues,
...props }) => {
    const [fieldValues, setFieldValues] = useState(Object.fromEntries(fields.map(field => [
        field.name,
        {
            ...field,
            value: entity?.[field.name] ?? field.value ?? field.defaultValue,
        },
    ])));
    useEffect(() => {
        setFieldValues(Object.fromEntries(fields.map(field => [
            field.name,
            {
                ...field,
                ...fieldValues[field.name],
            },
        ])));
    }, [entity, fields]);
    useEffect(() => {
        if (onChange)
            onChange(fieldValues);
    }, [fieldValues]);
    useEffect(() => {
        setFieldValues(Object.fromEntries(fields.map(field => [
            field.name,
            {
                ...field,
                value: entity?.[field.name] ?? field.value ?? field.defaultValue,
            },
        ])));
    }, [entity]);
    return (_jsx(Container, { className: "form-fields", borderRadius: Amount.More, orientation: Orientation.Vertical, ...props, children: Object.entries(fieldValues)?.map(([fieldName, field]) => {
            if (field.name === 'created_date' || field.name === 'updated_date')
                return null;
            return (_jsx(InputRow, { style: {
                    height: field.type === Primitives.UUID ? 0 : undefined,
                    marginBottom: field.type === Primitives.UUID ? 0 : undefined,
                    visibility: field.type === Primitives.UUID ? 'hidden' : 'visible',
                }, children: getInputElementByFieldType({
                    ...field,
                    onChange: ({ problems, value, validated, }) => setFieldValues({
                        ...fieldValues,
                        [field.name]: { ...field, problems, validated, value },
                    }),
                }) }, field.name));
        }) }, void 0));
});
//# sourceMappingURL=FormFields.js.map