import { memo, ReactElement } from 'react';
import { BasicIcons } from '@srclaunch/icons';
import { TextInput, TextInputProps, TextInputType } from './TextInput';

export type SearchInputProps = TextInputProps;

export const SearchInput = memo((props: SearchInputProps): ReactElement => {
  return (
    <TextInput
      icon={{
        name: BasicIcons.Search,
        // size: Size.Smaller,
      }}
      inputType={TextInputType.Search}
      spellCheck={false}
      {...props}
    />
  );
});
