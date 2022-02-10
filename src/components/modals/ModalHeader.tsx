import { memo, ComponentType, ReactElement } from 'react';

import { Container } from '../layout/Container';
import { Title } from '../typography/Title';
import { CloseButton } from './CloseButton';
import { MoreMenu, MoreMenuProps } from '../menus/MoreMenu';

import { Align, Amount, ContainerProps, Orientation } from '../../types';

type ModalHeaderProps = ContainerProps<
  HTMLDivElement,
  {
    onCloseClick?: () => unknown;
    moreMenu?: MoreMenuProps;
    title?: string | ComponentType;
  }
>;

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
        flat={true}
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
