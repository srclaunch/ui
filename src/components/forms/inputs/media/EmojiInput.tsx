import { memo, ReactElement } from 'react';
import { InputProps } from '../../../../types';
import { Container } from '../../../layout/Container';

type EmojiInputProps = InputProps<string>;

export const EmojiInput = memo(
  ({ defaultValue }: EmojiInputProps): ReactElement => {
    return <Container>{defaultValue}</Container>;
  },
);
