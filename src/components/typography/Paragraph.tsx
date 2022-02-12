import { memo, ReactElement } from 'react';

import { CommonComponentProps, Size, TextColors, TextSize } from '../../types';
import { Label, LabelProps } from './Label';

export type ParagraphProps = CommonComponentProps<HTMLParagraphElement> &
  LabelProps;

export const Paragraph = memo(
  ({
    as = 'p',
    children,
    className = '',
    lineHeight = Size.Smaller,
    textColor = TextColors.Paragraph,
    textSize = TextSize.Default,
    ...props
  }: ParagraphProps): ReactElement => {
    return (
      <Label
        as={as}
        className={`${className} paragraph`}
        textColor={textColor}
        lineHeight={lineHeight}
        textSize={textSize}
        {...props}
      >
        {children}
      </Label>
    );
  },
);
