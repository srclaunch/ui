import { memo, ReactElement } from 'react';

import { Label } from '../../../typography/Label';

import { LabelProps, Size, TextColors, TextSize } from '../../../../types';
import { ModelProps } from '@srclaunch/types';

type MenuItemLabelProps = LabelProps<
  HTMLLabelElement,
  {
    fieldName?: string;
    model?: ModelProps;
    value: string;
  }
>;

export const MenuItemLabel = memo(
  ({
    fieldName,
    icon,
    lineHeight = Size.Default,
    model,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    value,
    ...props
  }: MenuItemLabelProps): ReactElement => {
    return (
      <Label
        icon={icon}
        lineHeight={lineHeight}
        textColor={textColor}
        textSize={textSize}
        {...props}
      >
        {!fieldName || !model
          ? value
          : // @ts-ignore
            model.fields[fieldName]?.items?.find(i => i.value === value)
              ?.label ?? value}
      </Label>
    );
  },
);
