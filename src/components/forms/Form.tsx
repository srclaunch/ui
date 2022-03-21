import { Model, ValidationProblem } from '@srclaunch/types';
import {
  memo,
  FormEvent,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Amount, FormField, States } from '../../types';
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
  readonly states?: States;
  readonly fields?: readonly FormField[];
  readonly inProgress?: boolean;
  readonly model?: Model;
  readonly name: string;
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
    events = {},
    fields,
    inProgress = false,
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
    const fieldValuesRef = useRef(fieldValues);
    const requiresValidationRef = useRef(requiresValidation);
    const validationProblemsRef = useRef(validationProblems);
    const isValidatedRef = useRef(isValidated);

    const submitButtonProps = {
      label: 'Submit',
      // size: Size.Large,
      type: ButtonType.Primary,
      ...submitButton,
    };

    const checkValidation = () => {
      let problems: ValidationProblem[] = [];
      let validationRequired = false;

      for (const field of Object.entries(fieldValues)) {
        if (field[1].validation) {
          validationRequired = true;
        }

        if (field[1].validation?.problems) {
          problems = [...problems, ...field[1].validation?.problems];
        }
      }

      requiresValidationRef.current = validationRequired;
      setRequiresValidation(validationRequired);
      validationProblemsRef.current = problems;
      setValidationProblems(problems);

      const validated =
        Object.values(fieldValues).filter(
          field => field.validation && !field.validation?.validated,
        ).length === 0;

      isValidatedRef.current = validated;
      setValidated(validated);
    };

    useEffect(() => {
      checkValidation();
    }, [fieldValues]);

    const submitForm = (event: FormEvent<HTMLFormElement>) => {
      if (requiresValidationRef.current) {
        if (events.form?.onSubmitted)
          events.form.onSubmitted({
            fields: fieldValuesRef.current,
            validation: {
              problems: validationProblemsRef.current,
              validated: isValidatedRef.current,
            },
          });
      } else {
        if (events.form?.onSubmitted)
          events.form.onSubmitted({
            fields: fieldValuesRef.current,
          });
      }

      event.preventDefault();
    };

    return (
      <Container
        as="form"
        borderRadius={borderRadius}
        className={`${className} form`}
        events={{
          form: {
            onSubmit: submitForm,
          },
        }}
        id={name}
        name={name}
        padding={padding}
        {...props}
      >
        {fields && (
          <FormFields
            entity={entity}
            fields={fields}
            onChange={ff => {
              fieldValuesRef.current = ff;
              setFieldValues(ff);
            }}
          />
        )}

        {submitButton && (
          <FormActions>
            <Button
              form={name}
              states={{
                state: {
                  disabled: (requiresValidation && !isValidated) || inProgress,
                },
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
