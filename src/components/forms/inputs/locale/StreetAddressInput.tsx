import { ReactElement, memo } from 'react';
import { StreetAddress } from '@srclaunch/types';

import { TextInput, TextInputProps } from '../text/TextInput';

type StreetAddressInputProps = TextInputProps<StreetAddress>;

export const StreetAddressInput = memo(
  ({ ...props }: StreetAddressInputProps): ReactElement => {
    return <TextInput {...props} />;
  },
);
