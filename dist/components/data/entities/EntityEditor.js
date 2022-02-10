import { jsx as _jsx } from "react/jsx-runtime";
import { useDispatch, useSelector } from '@srclaunch/web-application-state';
import pluralize from 'pluralize';
import { memo, useEffect, useState } from 'react';
import { useEntityEditor } from '../../../hooks/use-entity-editor';
import { getFormFieldsFromModel } from '../../../lib/forms/fields';
import { Amount } from '../../../types';
import { ErrorLabel } from '../../errors/ErrorLabel';
import { Form } from '../../forms/Form';
import { Container } from '../../layout/Container';
export const EntityEditor = memo(({ actions, className = '', id, model }) => {
    const dispatch = useDispatch();
    const { entity: entityFields, hideEntityEditor } = useEntityEditor();
    const [dispatched, setDispatched] = useState(false);
    const inProgress = useSelector((state) => state[`${model?.name}.inProgress`]);
    const pluralizedCamel = pluralize(model?.name?.[0]?.toLowerCase() + model?.name.slice(1));
    const entity = useSelector((state) => state[pluralizedCamel].entities[id ?? '']);
    useEffect(() => {
        if (actions && id && !entity && !dispatched) {
            const action = actions[`get${model.name}`]?.(id);
            setDispatched(true);
            dispatch(action);
        }
    }, [id, entity]);
    if (id && !entity && !inProgress) {
        return (_jsx(Container, { className: `${className} entity-editor`, padding: Amount.More, children: _jsx(ErrorLabel, { children: "Entity not found" }, void 0) }, void 0));
    }
    return (_jsx(Container, { className: `${className} entity-editor`, children: _jsx(Form, { fields: getFormFieldsFromModel({ model }), entity: { ...entity, ...entityFields }, inProgress: inProgress, model: model, name: "entity-editor", onSubmit: async ({ fields, problems, validated }) => {
                let fieldData = {};
                for (const [key, props] of Object.entries(fields)) {
                    fieldData = { ...fieldData, [key]: props.value };
                }
                if (id) {
                    const editFunction = actions?.[`update${model.name}`];
                    if (editFunction)
                        await dispatch(editFunction({ id, ...fieldData }));
                    hideEntityEditor();
                }
                else {
                    const createFunction = actions?.[`create${model.name}`];
                    if (createFunction)
                        await dispatch(createFunction(fieldData));
                    hideEntityEditor();
                }
            }, submitButton: {
                label: id ? 'Update' : 'Create',
            } }, void 0) }, void 0));
});
//# sourceMappingURL=EntityEditor.js.map