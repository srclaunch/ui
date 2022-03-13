import { memo, ReactElement } from 'react';

import { Amount, Sizes, TextColors, TextSize, TextWeight } from '../../types';
import { Label, LabelProps } from './Label';

type SubTitleProps = LabelProps<HTMLHeadingElement>;

export const SubTitle = memo(
  ({
    as = 'h2',
    children,
    className = '',
    lineHeight = Sizes.Small,
    margin = {
      bottom: Amount.More,
      top: Amount.Default,
    },
    textSize = TextSize.Large,
    textColor = TextColors.SubTitle,
    textWeight = TextWeight.More,
    ...props
  }: SubTitleProps): ReactElement => {
    return (
      <Label
        as={as}
        className={`${className} title`}
        lineHeight={lineHeight}
        lineWrap={false}
        margin={margin}
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
