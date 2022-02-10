import { memo, ReactElement } from 'react';

// import { getDueDateLabel } from '../../../../lib/dates/labels';

import { Label } from '../../../typography/Label';

import { LabelProps, Size, TextColors, TextSize } from '../../../../types';

type DueDateLabelProps = LabelProps<
  HTMLLabelElement,
  {
    value: [string?, string?, string?, string?, string?];
  }
>;

export const DueDateLabel = memo(
  ({
    icon,
    lineHeight = Size.Default,
    textColor = TextColors.Lighter,
    textSize = TextSize.Default,
    value,
    ...props
  }: DueDateLabelProps): ReactElement => {
    if (!value[0] && !value[1] && !value[2] && !value[3] && !value[4])
      return <>Invalid data</>;

    return (
      <Label
        icon={icon}
        lineHeight={lineHeight}
        textColor={textColor}
        textSize={textSize}
        {...props}
      >
        {/*{getDueDateLabel(value)}*/}
      </Label>
    );
  },
);
