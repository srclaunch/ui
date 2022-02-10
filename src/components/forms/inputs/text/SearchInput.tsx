import { memo, ReactElement } from 'react';
import { BasicIcons } from '@srclaunch/icons';
import { Size } from '../../../../types';
import { TextInput, TextInputProps, TextInputType } from './TextInput';

export type SearchInputProps = TextInputProps<HTMLInputElement, string>;

export const SearchInput = memo(
  ({ onChange, ...props }: SearchInputProps): ReactElement => {
    return (
      // @ts-ignore
      <TextInput
        icon={{
          name: BasicIcons.Search,
          size: Size.Smaller,
        }}
        inputType={TextInputType.Search}
        onChange={onChange}
        spellCheck={false}
        {...props}
      />
    );
  },
);
