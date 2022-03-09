import { memo, ReactElement } from 'react';
import styled, { css } from 'styled-components';

import { InputContainerStyles } from '../../../../styles/forms/input/container';
import {
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  ErrorProps,
  FocusProps,
  Orientation,
  SizeProps,
  SuccessProps,
  WarningProps,
} from '../../../../types';
import { ContainerProps } from '../../../layout/Container';

export type InputContainerProps = ContainerProps<HTMLDivElement> &
  SizeProps &
  ErrorProps &
  SuccessProps &
  WarningProps;

export const InputContainer = memo(
  ({
    backgroundColor = BackgroundColors.Lightest,
    borderRadius = Amount.Least,
    border = {
      color: BorderColors.Default,
      style: BorderStyle.Solid,
      width: 1,
    },
    children,
    className = '',
    error,
    size,
    success,
    ...props
  }: InputContainerProps): ReactElement => {
    console.log('error in inputcontainer', error);
    return (
      <Container
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        border={{
          ...border,
          // @ts-ignore
          color:
            error && Array.isArray(error) && error.length > 0
              ? BorderColors.Error
              : border.hasOwnProperty('color')
              ? // @ts-ignore
                border?.color
              : BorderColors.InputControl,
        }}
        className={`${className} input-container`}
        error={error}
        grow
        orientation={Orientation.Horizontal}
        success={success}
        {...props}
      >
        {children}
      </Container>
    );
  },
);

const Container = styled.div<InputContainerProps>`
  ${InputContainerStyles};

  input {
    border: none;
  }
`;
