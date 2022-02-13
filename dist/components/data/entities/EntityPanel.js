import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BasicIcons } from '@srclaunch/icons';
import { useDispatch, useSelector } from '@srclaunch/web-application-state';
import { camelCase, capitalCase } from 'change-case';
import pluralize from 'pluralize';
import { memo, useEffect, useState } from 'react';
import { useEntityEditor } from '../../../hooks/use-entity-editor';
import { Amount, Colors, Size, TextColors, } from '../../../types';
import { Container } from '../../layout/Container';
import { ModalHeader } from '../../modals/ModalHeader';
import { SlidePanel } from '../../modals/SlidePanel';
import { LoadingOverlay } from '../../progress/LoadingOverlay';
import { EntityEditor } from './EntityEditor';
import { EntityPreview } from './EntityPreview';
export const EntityPanel = memo(({ actions, ...props }) => {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    // const [model, setModel] = useState<Model | null>();
    const { entity, model, mode, hideEntityEditor } = useEntityEditor();
    const entityState = useSelector((state) => state[`${camelCase(pluralize(model?.name ?? ''))}`]);
    const inProgress = entityState?.action[`create${model?.name}`].inProgress ||
        entityState?.action[`delete${model?.name}`].inProgress ||
        entityState?.action[`get${model?.name}`].inProgress ||
        entityState?.action[`update${model?.name}`].inProgress;
    useEffect(() => {
        if (model) {
            setVisible(true);
        }
        else {
            setVisible(false);
        }
    }, [model]);
    // const id = searchParams.get('id');
    // const newEntity = searchParams.get('new');
    // const edit = searchParams.get('edit');
    // console.log('newEntity', newEntity);
    // useEffect(() => {
    //   if (entityModel && id) {
    //     const stateModel = models[entityModel];
    //     if (stateModel) {
    //       setModel(stateModel);
    //       setVisible(true);
    //     } else {
    //       setModel(null);
    //       setVisible(false);
    //     }
    //   } else {
    //     setModel(null);
    //     setVisible(false);
    //   }
    // }, [entityModel, id, models]);
    // //
    // const editItem = {
    //   label: 'Edit',
    //   onClick: () => dispatch(showModelPanel({ edit: true, id, model })),
    // };
    //
    // const detailsItem = {
    //   label: 'Details',
    //   onClick: () => dispatch(showModelPanel({ id, model })),
    // };
    // const deleteItem = {
    //   color: 'rgba(237, 81, 66, 1)',
    //   icon: Icon.TrashCan,
    //   label: 'Delete',
    //   onClick: () => {
    //     console.log('adsf');
    //     // showModal(true),
    //   },
    // };
    const getContent = () => {
        if (model && entity?.id && mode.edit) {
            return _jsx(EntityEditor, { actions: actions, model: model, id: entity.id }, void 0);
        }
        if (model && entity?.id && mode.view) {
            return _jsx(EntityPreview, { model: model, id: entity.id }, void 0);
        }
        if (model && !entity?.id) {
            return _jsx(EntityEditor, { actions: actions, model: model }, void 0);
        }
        return null;
    };
    const getHeaderTitle = () => {
        if (model && entity?.id && mode.edit) {
            return `Edit ${capitalCase(model.name)}`;
        }
        if (model && entity?.id) {
            return `${capitalCase(model.name)} Preview`;
        }
        if (model && !entity?.id) {
            return `New ${capitalCase(model.name)}`;
        }
        return '';
    };
    return (_jsx(SlidePanel, { visible: visible, children: _jsxs(Container, { borderRadius: Amount.Default, ...props, children: [_jsx(LoadingOverlay, { visible: inProgress }, void 0), _jsx(ModalHeader, { onCloseClick: () => hideEntityEditor(), moreMenu: entity?.id
                        ? {
                            menu: [
                                {
                                    icon: {
                                        color: Colors.Error,
                                        name: BasicIcons.TrashCan,
                                        size: Size.Smaller,
                                    },
                                    label: 'Delete',
                                    onClick: () => {
                                        if (model && entity?.id) {
                                            const deleteFunction = actions?.[`delete${model.name}`];
                                            if (deleteFunction)
                                                dispatch(deleteFunction(entity.id));
                                        }
                                    },
                                    textColor: TextColors.Error,
                                },
                            ],
                        }
                        : undefined, title: getHeaderTitle() }, void 0), _jsx(Container, { padding: Amount.Default, scrollable: true, style: {
                        top: '60px !important',
                    }, children: getContent() }, void 0)] }, void 0) }, void 0));
});
//# sourceMappingURL=EntityPanel.js.map