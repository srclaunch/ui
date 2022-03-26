import { memo, ReactElement } from 'react';
import { BasicIcons } from '@srclaunch/icons';
import { TextInput, TextInputProps } from './TextInput';
import { InputType, Sizes } from '../../../../types';

export type SearchInputProps = TextInputProps;

export const SearchInput = memo((props: SearchInputProps): ReactElement => {
  return (
    <TextInput
      icon={{
        name: BasicIcons.Search,
        size: {
          height: Sizes.Smaller,
          width: Sizes.Smaller,
        },
      }}
      type={InputType.Search}
      spellCheck={false}
      {...props}
    />
  );
});
