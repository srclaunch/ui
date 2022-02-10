import { Primitive } from '@srclaunch/types';
import { memo, ReactElement } from 'react';
import { InputProps } from '../../../../types';
import { InputValueChangeHandler } from '../../../../types/events/input';

type TagInputProps<T = {}> = InputProps<
  {
    defaultValue?: string | number | boolean;
    onChange?: InputValueChangeHandler<Primitive>;
  } & T
>;

export const TagInput = memo(({}: TagInputProps): ReactElement => {
  return <div></div>;
});
