import { memo, ReactElement } from 'react';

import { Sizes, TextColors, TextSize } from '../../types';
import { Label, LabelProps } from './Label';

export type ParagraphProps = LabelProps;

export const Paragraph = memo(
  ({
    as = 'p',
    children,
    className = '',
    lineHeight = Sizes.Default,
    textColor = TextColors.Paragraph,
    textSize = TextSize.Default,
    ...props
  }: ParagraphProps): ReactElement => {
    return (
      <Label
        as={as}
        className={`${className} paragraph`}
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
