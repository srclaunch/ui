import { memo, ReactElement } from 'react';

import { Amount, Size, TextColors, TextSize, TextWeight } from '../../types';
import { Label, LabelProps } from './Label';

type SubTitleProps = LabelProps<HTMLHeadingElement>;

export const SubTitle = memo(
  ({
    as = 'h2',
    children,
    className = '',
    lineHeight = Size.Small,
    marginBottom = Amount.More,
    marginTop = Amount.Default,
    textSize = TextSize.Large,
    textColor = TextColors.SubTitle,
    textWeight = TextWeight.More,
    ...props
  }: SubTitleProps): ReactElement => {
    return (
      <Label
        as={as}
        className={`${className} title`}
        inline={false}
        lineHeight={lineHeight}
        marginBottom={marginBottom}
        marginTop={marginTop}
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
