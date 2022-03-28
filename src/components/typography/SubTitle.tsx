import { memo, ReactElement } from 'react';

import { Amount, Sizes, TextColors, TextSize, TextWeight } from '../../types';
import { Label, LabelProps } from './Label';

type SubTitleProps = LabelProps;

export const SubTitle = memo(
  ({
    as = 'h2',
    children,
    className = '',
    lineHeight = Sizes.Default,
    textSize = TextSize.Large,
    textColor = TextColors.Light,
    textWeight = TextWeight.More,
    ...props
  }: SubTitleProps): ReactElement => {
    return (
      <Label
        as={as}
        className={`${className} title`}
        lineHeight={lineHeight}
        lineWrap={false}
        textWeight={textWeight}
        textColor={textColor}
        textSize={textSize}
        {...props}
      >
        {children ?? ''}
      </Label>
    );
  },
);
