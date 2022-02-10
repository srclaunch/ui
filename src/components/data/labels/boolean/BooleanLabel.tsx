import { memo, ReactElement } from 'react';
import { BasicIcons } from '@srclaunch/icons';
import { Label } from '../../../typography/Label';
import { Icon } from '../../../media/Icon';
import {
  Colors,
  LabelProps,
  Size,
  TextColors,
  TextSize,
} from '../../../../types';

type BooleanLabelProps = LabelProps<
  HTMLLabelElement,
  {
    value: boolean;
  }
>;

export const BooleanLabel = memo(
  ({
    icon,
    lineHeight = Size.Default,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    value,
    ...props
  }: BooleanLabelProps): ReactElement => {
    return (
      <Label
        icon={icon}
        lineHeight={lineHeight}
        textColor={textColor}
        textSize={textSize}
        {...props}
      >
        <Icon
          color={value ? Colors.Primary : Colors.Error}
          name={value ? BasicIcons.Checkmark2 : BasicIcons.Close}
          size={Size.Smaller}
        />
        {value}
      </Label>
    );
  },
);
