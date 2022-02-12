import { ComponentType, memo, ReactElement } from 'react';

import { Align, Amount, ContainerProps, Orientation } from '../../types';
import { Container } from '../layout/Container';
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
    alignItems = Align.Center,
    className = '',
    onCloseClick,
    marginBottom = Amount.Most,
    moreMenu,
    orientation = Orientation.Horizontal,
    padding = Amount.Default,
    title,
  }: ModalHeaderProps): ReactElement => {
    return (
      <Container
        alignItems={alignItems}
        className={`${className} modal-header`}
        grow={false}
        flat
        marginBottom={marginBottom}
        orientation={orientation}
        padding={padding}
      >
        <Title>{title}</Title>

        <Container />

        {moreMenu && <MoreMenu alignContent={Align.Right} {...moreMenu} />}

        <CloseButton marginLeft={Amount.Less} onClick={onCloseClick} />
      </Container>
    );
  },
);
