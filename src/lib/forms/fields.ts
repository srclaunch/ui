import { Condition, Entity, ModelProps } from '@srclaunch/types';
import { FormField } from '../../types';

export function getFormFieldsFromModel({
  entity,
  model,
}: {
  entity?: Entity;
  model: ModelProps;
}): FormField[] {
  let fields: FormField[] = [];

  for (const [fieldName, field] of Object.entries(model.fields)) {
    if (fieldName !== 'created_date' && fieldName !== 'updated_date') {
      fields = [
        // @ts-ignore
        ...fields,
        // @ts-ignore
        {
          ...field,
          name: fieldName,
          type: field.type,
          validation: Boolean(field.required)
            ? {
                conditions: { [Condition.IsRequired]: Boolean(field.required) },
              }
            : undefined,
        },
      ];
    }
  }

  return fields;
}
