import { memo, ReactElement } from 'react';
import { Size, TextColors, TextSize, TextWeight } from '../../types';

import { Label, LabelProps } from './Label';

export type TitleProps = LabelProps<HTMLHeadingElement>;

export const Title = memo(
  ({
    as = 'h1',
    children,
    className = '',
    lineHeight = Size.Small,
    textSize = TextSize.Larger,
    textColor = TextColors.Title,
    textWeight = TextWeight.Most,
    ...props
  }: TitleProps): ReactElement => {
    return (
      <Label
        as={as}
        className={`${className} title`}
        inline={false}
        textColor={textColor}
        lineHeight={lineHeight}
        textSize={textSize}
        textWeight={textWeight}
        {...props}
      >
        {children}
      </Label>
    );
  },
);
