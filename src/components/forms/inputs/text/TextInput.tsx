import { memo, ReactElement, useEffect, useRef, useState } from 'react';

import { Cursor, DepthShadow } from '../../../../types';

import { InputContainer, InputContainerProps } from '../shared/InputContainer';

export type TextInputProps = InputContainerProps<string>;

export const TextInput = memo(
  ({
    className = '',
    cursor = Cursor.Text,
    name,
    prefix = '',
    placeholder = '',
    shadow = DepthShadow.Low,
    spellCheck = true,
    ...props
  }: TextInputProps): ReactElement => {
    return (
      <InputContainer
        className={`${className} text-input`}
        cursor={cursor}
        {...props}
      />
    );
  },
);
