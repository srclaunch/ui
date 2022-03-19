import { memo, ReactElement } from 'react';

import {
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  Orientation,
} from '../../../../types';
import { Container, ContainerProps } from '../../../layout/Container';

export type InputContainerProps = ContainerProps;

export const InputContainer = memo(
  ({
    alignment = {},
    background = {},
    borderRadius = {},
    border = {},
    children,
    className = '',
    states = {},
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
              states.state?.error &&
              Array.isArray(states.state.error) &&
              states.state.error.length > 0
                ? BorderColors.Error
                : border?.all && typeof border?.all == 'object'
                ? border.all.color
                : BorderColors.InputControl,
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
