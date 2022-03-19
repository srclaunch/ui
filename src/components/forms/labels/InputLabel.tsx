import { Exception } from '@srclaunch/exceptions';
import { memo, ReactElement } from 'react';

import {
  AlignHorizontal,
  Alignment,
  AlignVertical,
  Amount,
  Fill,
  Orientation,
  Size,
  Sizes,
  TextColors,
  TextSize,
} from '../../../types';
import { ErrorLabel } from '../../errors/ErrorLabel';
import { Container, ContainerProps } from '../../layout/Container';
import { Label, LabelProps } from '../../typography/Label';
import { getErrorMessage } from '../../../lib/errors/messages';

type InputLabelProps = LabelProps;

export const InputLabel = memo(
  ({
    alignment = {},
    children,
    className = '',
    states = {},
    textColor = TextColors.InputLabel,
    textSize = TextSize.Small,
    ...props
  }: InputLabelProps): ReactElement => {
    return (
      <Container
        alignment={{
          orientation: Orientation.Horizontal,
          vertical: AlignVertical.Center,
        }}
      >
        <Label
          alignment={{
            horizontal: AlignHorizontal.Left,
            orientation: Orientation.Horizontal,
            ...alignment,
          }}
          className={`${className} input-label`}
          textSize={textSize}
          textColor={textColor}
          {...props}
        >
          {children}
        </Label>

        {states.state &&
          (states.state?.error instanceof Exception ||
            (Array.isArray(states.state?.error) &&
              states.state?.error.length > 0)) && (
            <ErrorLabel
              alignment={{
                fill: Fill.Horizontal,
                horizontal: AlignHorizontal.Right,
              }}
              textSize={textSize}
            >
              {getErrorMessage(states.state.error)}
            </ErrorLabel>
          )}
      </Container>
    );
  },
);
