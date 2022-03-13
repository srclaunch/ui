import { ComponentType, memo, ReactElement } from 'react';

import { AlignHorizontal, Alignment, Amount, Orientation } from '../../types';
import { Container, ContainerProps } from '../layout/Container';
import { MoreMenu, MoreMenuProps } from '../menus/MoreMenu';
import { Title } from '../typography/Title';
import { CloseButton } from './CloseButton';

export type ModalHeaderProps = {
  readonly onCloseClick?: () => unknown;
  readonly moreMenu?: MoreMenuProps;
  readonly title?: string | ComponentType;
} & ContainerProps<HTMLDivElement>;

export const ModalHeader = memo(
  ({
    alignment = {},
    className = '',
    onCloseClick,
    margin = {},
    moreMenu,
    padding = {},
    title,
  }: ModalHeaderProps): ReactElement => {
    return (
      <Container
        alignment={{
          horizontal: AlignHorizontal.Center,
          orientation: Orientation.Horizontal,
          ...alignment,
        }}
        className={`${className} modal-header`}
        margin={{ bottom: Amount.Most, ...margin }}
        padding={{ all: Amount.Default, ...padding }}
      >
        <Title>{title}</Title>

        <Container />

        {moreMenu && (
          <MoreMenu
            alignment={{ horizontal: AlignHorizontal.Right }}
            {...moreMenu}
          />
        )}

        <CloseButton margin={{ left: Amount.Less }} onClick={onCloseClick} />
      </Container>
    );
  },
);
