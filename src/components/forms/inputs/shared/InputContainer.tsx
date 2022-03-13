import { memo, ReactElement } from 'react';
import styled, { css } from 'styled-components';

import { InputContainerStyles } from '../../../../styles/forms/input/container';
import {
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  CommonComponentProps,
  ErrorProps,
  Orientation,
  SuccessProps,
  WarningProps,
} from '../../../../types';
import { Container, ContainerProps } from '../../../layout/Container';

export type InputContainerProps = ContainerProps &
  ErrorProps &
  SuccessProps &
  WarningProps;

export const InputContainer = memo(
  ({
    alignment = {},
    background = {},
    borderRadius = {},
    border = {},
    children,
    className = '',
    error,
    size,
    success,
    ...props
  }: InputContainerProps): ReactElement => {
    return (
      <Container
        alignment={{ orientation: Orientation.Horizontal, ...alignment }}
        background={{
          color: BackgroundColors.InputControl,
          ...background,
        }}
        borderRadius={{ all: Amount.Least, ...borderRadius }}
        border={{
          all: {
            color:
              error && Array.isArray(error) && error.length > 0
                ? BorderColors.Error
                : border?.all?.color ?? BorderColors.InputControl,
            style: BorderStyle.Solid,
            width: 1,
          },
        }}
        className={`${className} input-container`}
        // error={error}
        // success={success}
        {...props}
      >
        {children}
      </Container>
    );
  },
);

// const Container = styled.div<InputContainerProps>`
//   ${InputContainerStyles};

//   input {
//     border: none;
//   }
// `;
