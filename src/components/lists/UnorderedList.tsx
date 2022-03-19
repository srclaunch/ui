import { memo, ReactElement } from 'react';

import { Amount, Orientation, Overflow } from '../../types';
import { Container, ContainerProps } from '../layout/Container';
import { ListItem } from './ListItem';

export type UnorderedListProps = ContainerProps & {
  readonly items: readonly ReactElement[];
};

export const UnorderedList = memo(
  ({
    as = 'ul',
    items,
    margin = {},
    ...props
  }: UnorderedListProps): ReactElement => {
    return (
      <Container as={as} {...props}>
        {items.map((item, index) =>
          item.props.items ? (
            <Container
              margin={{ left: Amount.Default, ...margin }}
              padding={{
                bottom: Amount.Least,
                top: Amount.Least,
              }}
            >
              {item}
            </Container>
          ) : (
            <ListItem
              key={index}
              margin={{ left: Amount.Default, ...margin }}
              padding={{
                bottom: Amount.Least,
                top: Amount.Least,
              }}
            >
              {item}
            </ListItem>
          ),
        )}
      </Container>
    );
  },
);
