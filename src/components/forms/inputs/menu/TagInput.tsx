import { memo, ReactElement } from 'react';
import { InputProps } from '../shared/Input';

type TagInputProps = InputProps<string | number | boolean>;

export const TagInput = memo(({}: TagInputProps): ReactElement => {
  return <div></div>;
});
