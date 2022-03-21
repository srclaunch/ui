import { memo, ReactElement } from 'react';
import { BasicIcons } from '@srclaunch/icons';
import { TextInput, TextInputProps } from './TextInput';
import { InputType } from '../../../../types';

export type SearchInputProps = TextInputProps;

export const SearchInput = memo((props: SearchInputProps): ReactElement => {
  return (
    <TextInput
      icon={{
        name: BasicIcons.Search,
        // size: Size.Smaller,
      }}
      type={InputType.Search}
      spellCheck={false}
      {...props}
    />
  );
});
