import { memo, ReactElement, useEffect, useState } from 'react';
// import { Model } from '@srclaunch/types';
// import { RootState, useSearchParams, useSelector } from '@srclaunch/state';
// import { Entity } from '@srclaunch/actions';
import { HttpClient } from '@srclaunch/http-client';
import { useDispatch, useSelector } from '@srclaunch/state';
import { BasicIcons } from '@srclaunch/icons';
import { camelCase, capitalCase } from 'change-case';
import pluralize from 'pluralize';
import { useEntityEditor } from '../../../hooks/use-entity-editor';
import { Container } from '../../layout/Container';
import { ModalHeader } from '../../modals/ModalHeader';
import { SlidePanel } from '../../modals/SlidePanel';
import { EntityEditor } from './EntityEditor';
import { EntityPreview } from './EntityPreview';
import {
  Amount,
  Colors,
  ContainerProps,
  Size,
  TextColors,
} from '../../../types';
import { LoadingOverlay } from '../../progress/LoadingOverlay';

type EntityPanelProps = ContainerProps<
  HTMLDivElement,
  {
    actions?: Record<string, (...args: any[]) => any>;
    httpClient?: typeof HttpClient;
  }
>;

export const EntityPanel = memo(
  ({ actions, ...props }: EntityPanelProps): ReactElement => {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    // const [model, setModel] = useState<Model | null>();
    const { entity, model, mode, hideEntityEditor } = useEntityEditor();

    const entityState = useSelector(
      (state: any) => state[`${camelCase(pluralize(model?.name ?? ''))}`],
    );
    const inProgress =
      entityState?.action[`create${model?.name}`].inProgress ||
      entityState?.action[`delete${model?.name}`].inProgress ||
      entityState?.action[`get${model?.name}`].inProgress ||
      entityState?.action[`update${model?.name}`].inProgress;

    useEffect(() => {
      if (model) {
        setVisible(true);
      } else {
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
        return <EntityEditor actions={actions} model={model} id={entity.id} />;
      }

      if (model && entity?.id && mode.view) {
        return <EntityPreview model={model} id={entity.id} />;
      }

      if (model && !entity?.id) {
        return <EntityEditor actions={actions} model={model} />;
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

    return (
      <SlidePanel visible={visible}>
        <Container borderRadius={Amount.Default} {...props}>
          <LoadingOverlay visible={inProgress} />

          <ModalHeader
            onCloseClick={() => hideEntityEditor()}
            moreMenu={
              entity?.id
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
                            const deleteFunction =
                              actions?.[`delete${model.name}`];

                            if (deleteFunction)
                              dispatch(deleteFunction(entity.id));
                          }
                        },
                        textColor: TextColors.Error,
                      },
                    ],
                  }
                : undefined
            }
            title={getHeaderTitle()}
          />

          <Container
            padding={Amount.Default}
            scrollable
            style={{
              top: 60,
            }}
          >
            {getContent()}
          </Container>
        </Container>
      </SlidePanel>
    );
  },
);
