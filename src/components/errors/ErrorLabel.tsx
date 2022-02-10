import { memo, ReactElement } from 'react';

import {
  Align,
  Amount,
  Colors,
  LabelProps,
  Size,
  TextColors,
  TextSize,
} from '../../types';
import { BasicIcons } from '@srclaunch/icons';

import { Label } from '../typography/Label';

export type ErrorLabelProps = LabelProps;

export const ErrorLabel = memo(
  ({
    alignContent = Align.Center,
    alignText = Align.Center,
    children,
    className = '',
    grow = true,
    icon = {
      color: Colors.Error,
      name: BasicIcons.Alert,
      size: Size.Smaller,
    },
    lineHeight = Size.Smaller,
    marginBottom = Amount.Least,
    size = Size.Default,
    textColor = TextColors.Error,
    textSize = TextSize.Small,
  }: ErrorLabelProps): ReactElement => {
    return (
      <Label
        alignContent={alignContent}
        alignText={alignText}
        className={`${className} error-label`}
        grow={grow}
        icon={icon}
        lineHeight={lineHeight}
        marginBottom={marginBottom}
        size={size}
        textColor={textColor}
        textSize={textSize}
      >
        {children}
      </Label>
    );
  },
);
