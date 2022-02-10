import { memo, ReactElement, useEffect, useState } from 'react';
import { Model } from '@srclaunch/types';
import { useDispatch, useSelector } from '@srclaunch/state';
import pluralize from 'pluralize';
import { getFormFieldsFromModel } from '../../../lib/forms/fields';
import { Container, ContainerProps } from '../../layout/Container';
import { LoadingOverlay } from '../../progress/LoadingOverlay';
import { Form } from '../../forms/Form';
import { ErrorLabel } from '../../errors/ErrorLabel';
import { Amount } from '../../../types';
import { useEntityEditor } from '../../../hooks/use-entity-editor';

type EntityEditorProps = ContainerProps<
  HTMLDivElement,
  {
    actions?: Record<string, (...args: any[]) => any>;
    id?: string;
    model: Model;
  }
>;

export const EntityEditor = memo(
  ({ actions, className = '', id, model }: EntityEditorProps): ReactElement => {
    const dispatch = useDispatch();
    const { entity: entityFields , hideEntityEditor } = useEntityEditor();
    const [dispatched, setDispatched] = useState(false);
    const inProgress = useSelector(
      (state: any) => state[`${model?.name}.inProgress`],
    );
    const pluralizedCamel = pluralize(
      model?.name?.[0]?.toLowerCase() + model?.name.slice(1),
    );
    const entity = useSelector(
      (state: any) => state[pluralizedCamel].entities[id ?? ''],
    );

    useEffect(() => {
      if (actions && id && !entity && !dispatched) {
        const action = actions[`get${model.name}`]?.(id);

        setDispatched(true);
        dispatch(action);
      }
    }, [id, entity]);

    if (id && !entity && !inProgress) {
      return (
        <Container
          className={`${className} entity-editor`}
          padding={Amount.More}
        >
          <ErrorLabel>Entity not found</ErrorLabel>
        </Container>
      );
    }

    return (
      <Container className={`${className} entity-editor`}>
        <Form
          fields={getFormFieldsFromModel({ model })}
          entity={{ ...entity, ...entityFields,}}
          inProgress={inProgress}
          model={model}
          name="entity-editor"
          onSubmit={async ({ fields, problems, validated }) => {
            let fieldData = {};
            for (const [key, props] of Object.entries(fields)) {
              fieldData = { ...fieldData, [key]: props.value };
            }

            if (id) {
              const editFunction = actions?.[`update${model.name}`];

              if (editFunction)
                await dispatch(editFunction({ id, ...fieldData }));

              hideEntityEditor();
            } else {
              const createFunction = actions?.[`create${model.name}`];

              if (createFunction) await dispatch(createFunction(fieldData));

              hideEntityEditor();
            }
          }}
          submitButton={{
            label: id ? 'Update' : 'Create',
          }}
        />

        {/* <Form action={id ? 'new' : 'update'} model={model} fields={fields}> */}
        {/* {[...Object.entries(model.fields)].map((field, k) => {
          console.log('field', field);

          return (
            <DynamicInput
              onChange={val => updateField(field[0], val)}
              label={field[1].label}
              type={field[1].type}
              key={k}
            />
          );
        })} */}

        {/* <FormActions>
          <Button
            disabled={false}
            onClick={() => {
              if (id) {
                ModelService.update({ model });
              }

              ModelService.create({ model: { fields, name: model.name } });
            }}
          >
            {id ? 'Update' : 'Create'} {model.name}
          </Button>
          <Button onClick={() => dispatch(hideModelPanel())}>Cancel</Button>
        </FormActions> */}
        {/* </Form> */}
      </Container>
    );
  },
);
