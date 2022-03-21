import { memo } from 'react';
import { DepthShadow, InputType } from '../../../../types';

import { InputContainer, InputContainerProps } from '../shared/InputContainer';

export type NumberInputProps = InputContainerProps<number>;

export const NumberInput = memo(
  ({ className = '', ...props }: NumberInputProps): React.ReactElement => {
    return (
      <InputContainer
        className={`${className} number-input`}
        type={InputType.Number}
        {...props}
      />
    );
  },
);
