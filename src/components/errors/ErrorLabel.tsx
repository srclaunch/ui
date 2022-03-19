import { memo, ReactElement } from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  Colors,
  Orientation,
  Sizes,
  TextColors,
  TextSize,
} from '../../types';
import { BasicIcons } from '@srclaunch/icons';

import { Label, LabelProps } from '../typography/Label';

export type ErrorLabelProps = LabelProps;

export const ErrorLabel = memo(
  ({
    alignment = {},
    children,
    className = '',
    icon = {},
    textColor = TextColors.Error,
    textSize = TextSize.Small,
    ...props
  }: ErrorLabelProps): ReactElement => {
    return (
      <Label
        alignment={{
          horizontal: AlignHorizontal.Center,
          orientation: Orientation.Horizontal,
          vertical: AlignVertical.Center,
          ...alignment,
        }}
        className={`${className} error-label`}
        icon={{
          color: Colors.Error,
          margin: {
            right: Amount.Least,
          },
          name: BasicIcons.Alert,
          size: {
            height: Sizes.Smaller,
            width: Sizes.Smaller,
          },
          ...icon,
        }}
        textColor={textColor}
        textSize={textSize}
        {...props}
      >
        {children}
      </Label>
    );
  },
);
