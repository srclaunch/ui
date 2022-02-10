import { memo, ReactElement } from 'react';

import { Container, ContainerProps } from '../../layout/Container';
import { Label, LabelProps } from '../../typography/Label';
import { ErrorLabel } from '../../errors/ErrorLabel';

import {
  Align,
  Amount,
  Orientation,
  Size,
  TextColors,
  TextSize,
} from '../../../types';

type InputLabelProps<E = HTMLLabelElement> = LabelProps<
  E,
  {
    errorMessage?: string;
  }
>;

export const InputLabel = memo(
  ({
    alignContent = Align.Left,
    children,
    className = '',
    errorMessage,
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

        {errorMessage && (
          <ErrorLabel alignContent={Align.Right} size={size}>
            {errorMessage}
          </ErrorLabel>
        )}
      </Container>
    );
  },
);
