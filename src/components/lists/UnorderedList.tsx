import { memo, ReactElement } from 'react';

import { Amount, Orientation } from '../../types';
import { Container, ContainerProps } from '../layout/Container';
import { ListItem } from './ListItem';

export type UnorderedListProps = {
  readonly items: readonly ReactElement[];
} & ContainerProps<HTMLUListElement>;

export const UnorderedList = memo(
  ({
    as = 'ul',
    grow = false,
    items,
    marginLeft = Amount.Default,
    ...props
  }: UnorderedListProps): ReactElement => {
    return (
      <Container
        as={as}
        grow={grow}
        orientation={Orientation.Vertical}
        {...props}
      >
        {items.map((item, index) =>
          item.props.items ? (
            <Container
              grow={grow}
              marginLeft={marginLeft}
              paddingBottom={Amount.Least}
              paddingTop={Amount.Least}
            >
              {item}
            </Container>
          ) : (
            <ListItem
              grow={false}
              key={index}
              marginLeft={marginLeft}
              paddingBottom={Amount.Least}
              paddingTop={Amount.Least}
            >
              {item}
            </ListItem>
          ),
        )}
      </Container>
    );
  },
);
