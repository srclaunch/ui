import { memo, ReactElement } from 'react';
import { BasicIcons } from '@srclaunch/icons';
import { Label, LabelProps } from '../../../typography/Label';
import { Icon } from '../../../media/Icon';
import { Colors, Sizes, TextColors, TextSize } from '../../../../types';

type BooleanLabelProps = {
  value: boolean;
} & LabelProps;

export const BooleanLabel = memo(
  ({
    icon,
    lineHeight = Sizes.Default,
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
          // size={Size.Smaller}
        />
        {value}
      </Label>
    );
  },
);
