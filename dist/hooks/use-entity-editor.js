import { useLocation, useSearchParams, useSelector, } from '@srclaunch/web-application-state';
import queryString from 'query-string';
import { useEffect, useState } from 'react';
export function useEntityEditor() {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const [modelName, setModelName] = useState(null);
    const [entity, setEntity] = useState();
    const [mode, setMode] = useState({
        edit: false,
        new: false,
        view: false,
    });
    const [modelDef, setModelDef] = useState(null);
    const models = useSelector((state) => state.models.models);
    useEffect(() => {
        const new_ = searchParams.get('new');
        const edit = searchParams.get('edit');
        const view = searchParams.get('view');
        if (new_) {
            setMode({ edit: false, new: true, view: false });
            setModelName(new_);
            const params = queryString.parse(location.search);
            const { new: _new, ...props } = params;
            setEntity(props);
        }
        else if (edit) {
            const id = searchParams.get('id');
            setModelName(edit);
            if (id) {
                setEntity({ id });
            }
            setMode({ edit: true, new: false, view: false });
        }
        else if (view) {
            const id = searchParams.get('id');
            setModelName(view);
            if (id) {
                setEntity({ id });
            }
            setMode({ edit: false, new: false, view: true });
        }
        return () => {
            setMode({ edit: false, new: false, view: false });
            setModelName(null);
            // eslint-disable-next-line unicorn/no-useless-undefined
            setEntity(undefined);
        };
    }, [location.search]);
    useEffect(() => {
        if (models && modelName) {
            const model = models[modelName];
            if (model) {
                setModelDef(model);
            }
        }
        else {
            setModelDef(null);
        }
        return () => {
            setModelDef(null);
        };
    }, [models, modelName]);
    const showEntityEditor = ({ edit, new: new_, set = {}, view, id, }) => {
        if (id && edit) {
            setSearchParams({ edit, id });
        }
        else if (id && view) {
            setSearchParams({ id, view });
        }
        else if (new_) {
            // @ts-ignore
            setSearchParams({ new: new_, ...set });
        }
    };
    const hideEntityEditor = () => {
        setSearchParams({});
    };
    return {
        entity,
        hideEntityEditor,
        mode,
        model: modelDef,
        showEntityEditor,
    };
}
//# sourceMappingURL=use-entity-editor.js.map