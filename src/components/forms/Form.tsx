import { Model, ValidationProblem } from '@srclaunch/types';
import { memo, ReactElement, useEffect, useState } from 'react';

import { Amount, FormField, Orientation, Size } from '../../types';
// import { getFormFieldsFromModel } from '../../lib/forms/fields';
import { Container, ContainerProps } from '../layout/Container';
import { Button, ButtonProps, ButtonType } from './buttons/Button';
import { FormActions } from './FormActions';
import { FormFields } from './FormFields';

type FormProps = {
  readonly cancelButton?: {
    readonly label: string;
  };
  readonly className?: string;
  readonly entity?:
    | ({ readonly [f: string]: unknown } & { readonly id?: string })
    | undefined;
  readonly fields?: readonly FormField[];
  readonly inProgress?: boolean;
  readonly model?: Model;
  readonly name: string;
  readonly onChange?: ({
    fields,
    validated,
    problems,
  }: {
    readonly fields: {
      readonly [name: string]: FormField;
    };
    readonly validated?: boolean;
    readonly problems?: readonly ValidationProblem[];
  }) => unknown;
  readonly onSubmit?: ({
    fields,
    validated,
    values,
    problems,
  }: {
    readonly fields: {
      readonly [name: string]: FormField;
    };
    readonly validated?: boolean;
    readonly values?: { readonly [name: string]: unknown };
    readonly problems?: readonly ValidationProblem[];
  }) => unknown;
  readonly padding?: Amount;
  readonly submitButton?:
    | ({
        readonly label: string;
      } & ButtonProps)
    | null;
} & ContainerProps;

export const Form = memo(
  ({
    borderRadius = {},
    className = '',
    entity,
    fields,
    inProgress = false,
    onChange,
    onSubmit,
    model,
    name,
    padding = Amount.None,
    submitButton,
    ...props
  }: FormProps): ReactElement => {
    const [fieldValues, setFieldValues] = useState<{
      [name: string]: FormField;
    }>({});
    const [validationProblems, setValidationProblems] =
      useState<ValidationProblem[]>();
    const [isValidated, setValidated] = useState(false);
    const [requiresValidation, setRequiresValidation] = useState(false);

    const submitButtonProps = {
      label: 'Submit',
      // size: Size.Large,
      type: ButtonType.Primary,
      ...submitButton,
    };

    useEffect(() => {
      let problems: ValidationProblem[] = [];
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

      const validated =
        requiresValidation &&
        Object.values(fieldValues).filter(
          field => field.validation && !field.validated,
        ).length === 0;

      setValidated(validated);

      if (onChange) onChange({ fields: fieldValues, problems, validated });
    }, [fieldValues]);

    return (
      <Container
        as="form"
        borderRadius={borderRadius}
        className={`${className} form`}
        id={name}
        name={name}
        padding={padding}
        {...props}
      >
        {fields && (
          <FormFields
            entity={entity}
            fields={fields}
            onChange={ff => setFieldValues(ff)}
          />
        )}

        {submitButton && (
          <FormActions>
            <Button
              disabled={(requiresValidation && !isValidated) || inProgress}
              form={name}
              onClick={e => {
                e.preventDefault();

                if (onSubmit)
                  onSubmit({
                    fields: fieldValues,
                    problems: validationProblems,
                    validated: isValidated,
                    values: Object.entries(fieldValues).map(
                      ([fieldName, field]) => ({
                        [fieldName]: field.value,
                      }),
                    ) as unknown as { readonly [name: string]: unknown },
                  });
              }}
              onKeyPress={e => {
                if (e.key === 'Enter' && onSubmit)
                  onSubmit({
                    fields: fieldValues,
                    problems: validationProblems,
                    validated: isValidated,
                  });
              }}
              {...submitButtonProps}
            >
              {submitButton.label}
            </Button>
          </FormActions>
        )}
      </Container>
    );
  },
);
