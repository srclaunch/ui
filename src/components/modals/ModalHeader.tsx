import { ComponentType, memo, ReactElement } from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  Orientation,
} from '../../types';
import { Container, ContainerProps } from '../layout/Container';
import { Spacer } from '../layout/Spacer';
import { MoreMenu, MoreMenuProps } from '../menus/MoreMenu';
import { Title } from '../typography/Title';
import { CloseButton } from './CloseButton';

export type ModalHeaderProps = ContainerProps & {
  readonly onCloseClick?: () => unknown;
  readonly moreMenu?: MoreMenuProps;
  readonly title?: ReactElement;
};

export const ModalHeader = memo(
  ({
    alignment = {},
    className = '',
    onCloseClick,
    moreMenu,
    padding = {},
    title,
    ...props
  }: ModalHeaderProps): ReactElement => {
    return (
      <Container
        alignment={{
          horizontal: AlignHorizontal.Stretch,
          orientation: Orientation.Horizontal,
          vertical: AlignVertical.Center,
          ...alignment,
        }}
        className={`${className} modal-header`}
        padding={{ all: Amount.Default, ...padding }}
        {...props}
      >
        {title && <Title>{title}</Title>}

        <Spacer />

        {moreMenu && (
          <MoreMenu
            alignment={{ horizontal: AlignHorizontal.Right }}
            {...moreMenu}
          />
        )}

        <CloseButton
          events={{ mouse: { onClick: onCloseClick } }}
          margin={{ left: Amount.Less }}
        />
      </Container>
    );
  },
);
