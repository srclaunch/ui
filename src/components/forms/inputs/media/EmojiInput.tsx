import { memo, ReactElement } from 'react';
import { InputProps } from '../../../../types';
import { InputValueChangeHandler } from '../../../../types/events/input';
import { Container } from '../../../layout/Container';

type EmojiInputProps<T = {}> = InputProps<
  {
    defaultValue?: string;
    onChange?: InputValueChangeHandler<string>;
  } & T
>;

export const EmojiInput = memo(
  ({ defaultValue }: EmojiInputProps): ReactElement => {
    return <Container>{defaultValue}</Container>;
  },
);
