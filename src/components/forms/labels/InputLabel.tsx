import { Exception } from '@srclaunch/exceptions';
import { memo, ReactElement } from 'react';

import {
  Align,
  Amount,
  ErrorProps,
  Orientation,
  Size,
  TextColors,
  TextSize,
} from '../../../types';
import { ErrorLabel } from '../../errors/ErrorLabel';
import { Container, ContainerProps } from '../../layout/Container';
import { Label, LabelProps } from '../../typography/Label';

type InputLabelProps = ErrorProps & LabelProps;

export const InputLabel = memo(
  ({
    alignContent = Align.Left,
    children,
    className = '',
    error,
    lineHeight = Size.Smaller,
    marginBottom = Amount.Least,
    size = Size.Small,
    textColor = TextColors.InputLabel,
    textSize = TextSize.Small,
    ...props
  }: InputLabelProps): ReactElement => {
    return (
      <Container grow={false} orientation={Orientation.Horizontal}>
        <Label
          alignContent={alignContent}
          className={`${className} input-label`}
          grow={false}
          lineHeight={lineHeight}
          textSize={textSize}
          textColor={textColor}
          marginBottom={marginBottom}
          size={size}
          {...props}
        >
          {children}
        </Label>

        {error && (
          <ErrorLabel alignContent={Align.Right} size={size}>
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
