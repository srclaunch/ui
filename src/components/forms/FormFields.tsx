import { Primitives, ValidationProblem } from '@srclaunch/types';
import { memo, ReactElement, useEffect, useState } from 'react';

import { getInputElementByFieldType } from '../../lib/forms/inputs';
import { Amount, FormField } from '../../types';
import { Validation } from '../../types/validation';
import { Container } from '../layout/Container';
import { InputRow } from './layout/InputRow';

export type FormFieldsProps = {
  readonly entity?: { readonly [f: string]: unknown } & {
    readonly id?: string;
  };
  readonly fields: readonly FormField[];
  readonly onChange?: (fields: {
    readonly [name: string]: FormField;
  }) => unknown;
};

export const FormFields = memo(
  ({
    entity,
    fields,
    onChange,
    // setFieldValues,
    ...props
  }: FormFieldsProps): ReactElement => {
    const [fieldValues, setFieldValues] = useState<{
      [name: string]: FormField;
    }>(
      Object.fromEntries(
        fields.map(field => [
          field.name,
          {
            ...field,
            value: entity?.[field.name] ?? field.value ?? field.defaultValue,
          },
        ]),
      ) as { [name: string]: FormField },
    );

    useEffect(() => {
      setFieldValues(
        Object.fromEntries(
          fields.map(field => [
            field.name,
            {
              ...field,
              ...fieldValues[field.name],
            },
          ]),
        ) as { [name: string]: FormField },
      );
    }, [entity, fields]);

    useEffect(() => {
      if (onChange) onChange(fieldValues);
    }, [fieldValues]);

    useEffect(() => {
      setFieldValues(
        Object.fromEntries(
          fields.map(field => [
            field.name,
            {
              ...field,
              value: entity?.[field.name] ?? field.value ?? field.defaultValue,
            },
          ]),
        ) as { [name: string]: FormField },
      );
    }, [entity]);

    return (
      <Container
        className="form-fields"
        borderRadius={{ all: Amount.More }}
        {...props}
      >
        {Object.entries(fieldValues)?.map(([fieldName, field]) => {
          if (field.name === 'created_date' || field.name === 'updated_date')
            return null;

          return (
            <InputRow
              key={field.name}
              style={{
                height: field.type === Primitives.UUID ? 0 : undefined,
                marginBottom: field.type === Primitives.UUID ? 0 : undefined,
                visibility:
                  field.type === Primitives.UUID ? 'hidden' : 'visible',
              }}
            >
              {getInputElementByFieldType({
                ...field,
                onChange: ({
                  validation,
                  value,
                }: {
                  validation?: Validation;
                  value?: any;
                }) =>
                  setFieldValues({
                    ...fieldValues,
                    [field.name]: { ...field, validation, value },
                  }),
              })}
            </InputRow>
          );
        })}
      </Container>
    );
  },
);
