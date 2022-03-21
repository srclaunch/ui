import { memo, ReactElement, useEffect, useRef, useState } from 'react';

import { Cursor, DepthShadow, InputType } from '../../../../types';

import { InputContainer, InputContainerProps } from '../shared/InputContainer';

export type TextInputProps = InputContainerProps<string>;

export const TextInput = memo(
  ({ className = '', ...props }: TextInputProps): ReactElement => {
    return (
      <InputContainer
        className={`${className} text-input`}
        type={InputType.Text}
        {...props}
      />
    );
  },
);
