import { ReactElement, memo } from 'react';
import { TextInput, TextInputProps } from '../text/TextInput';

type StreetAddressInputProps = TextInputProps;

export const StreetAddressInput = memo(
  ({ ...props }: StreetAddressInputProps): ReactElement => {
    return <TextInput {...props} />;
  },
);
