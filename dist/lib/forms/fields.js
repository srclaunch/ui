import { Condition } from '@srclaunch/types';
export function getFormFieldsFromModel({ entity, model, }) {
    let fields = [];
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
                    validation: Boolean(field.required) ? {
                        [Condition.IsRequired]: Boolean(field.required),
                    } : undefined,
                },
            ];
        }
    }
    return fields;
}
//# sourceMappingURL=fields.js.map