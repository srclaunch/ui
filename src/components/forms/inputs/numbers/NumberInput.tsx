import { memo } from 'react';
import { InputType } from '../../../../types';

import { InputContainer, InputContainerProps } from '../shared/InputContainer';

export type NumberInputProps = InputContainerProps<number>;

export const NumberInput = memo(
  ({
    className = '',
    defaultValue = 0,
    ...props
  }: NumberInputProps): React.ReactElement => {
    return (
      <InputContainer
        className={`${className} number-input`}
        defaultValue={defaultValue}
        type={InputType.Number}
        {...props}
      />
    );
  },
);
