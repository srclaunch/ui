import { memo, ReactElement } from 'react';

import {
  AlignHorizontal,
  Alignment,
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
    alignment = {
      horizontal: AlignHorizontal.Center,
      orientation: Orientation.Horizontal,
      vertical: AlignVertical.Center,
    },
    children,
    className = '',
    icon = {
      color: Colors.Error,
      name: BasicIcons.Alert,
      size: {
        height: Sizes.Smaller,
        width: Sizes.Smaller,
      },
    },
    lineHeight = Sizes.Smaller,
    textColor = TextColors.Error,
    textSize = TextSize.Small,
    ...props
  }: ErrorLabelProps): ReactElement => {
    return (
      <Label
        alignment={alignment}
        className={`${className} error-label`}
        icon={icon}
        lineHeight={lineHeight}
        textColor={textColor}
        textSize={textSize}
        {...props}
      >
        {children}
      </Label>
    );
  },
);
