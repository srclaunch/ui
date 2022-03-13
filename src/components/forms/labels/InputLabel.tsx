import { Exception } from '@srclaunch/exceptions';
import { memo, ReactElement } from 'react';

import {
  AlignHorizontal,
  Alignment,
  Amount,
  ErrorProps,
  Orientation,
  Size,
  Sizes,
  TextColors,
  TextSize,
} from '../../../types';
import { ErrorLabel } from '../../errors/ErrorLabel';
import { Container, ContainerProps } from '../../layout/Container';
import { Label, LabelProps } from '../../typography/Label';

type InputLabelProps = ErrorProps & LabelProps;

export const InputLabel = memo(
  ({
    alignment = {},
    children,
    className = '',
    error,
    lineHeight = Sizes.Smaller,
    margin = {},
    textColor = TextColors.InputLabel,
    textSize = TextSize.Small,
    ...props
  }: InputLabelProps): ReactElement => {
    return (
      <Container>
        <Label
          alignment={{
            horizontal: AlignHorizontal.Left,
            orientation: Orientation.Horizontal,
            ...alignment,
          }}
          className={`${className} input-label`}
          lineHeight={lineHeight}
          textSize={textSize}
          textColor={textColor}
          margin={{ bottom: Amount.Least, ...margin }}
          {...props}
        >
          {children}
        </Label>

        {error && (
          <ErrorLabel textSize={textSize}>
            {error instanceof Exception
              ? error.message
              : error.length > 0
              ? error[0]?.message.long
              : null}
          </ErrorLabel>
        )}
      </Container>
    );
  },
);
