import { memo, ReactElement } from 'react';
import { Container } from '../../../layout/Container';
import { InputProps } from '../shared/Input';

type EmojiInputProps = InputProps<string>;

export const EmojiInput = memo(
  ({ defaultValue }: EmojiInputProps): ReactElement => {
    return <Container>{defaultValue}</Container>;
  },
);
