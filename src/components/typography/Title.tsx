import { memo, ReactElement } from 'react';
import {
  AlignVertical,
  Sizes,
  TextColors,
  TextSize,
  TextWeight,
} from '../../types';
import { Label, LabelProps } from './Label';

export type TitleProps = LabelProps;

export const Title = memo(
  ({
    as = 'h1',
    children,
    className = '',
    lineHeight = Sizes.Larger,
    textSize = TextSize.Larger,
    textColor = TextColors.Title,
    textWeight = TextWeight.Most,
    ...props
  }: TitleProps): ReactElement => {
    return (
      <Label
        alignment={{
          vertical: AlignVertical.Top,
        }}
        as={as}
        className={`${className} title`}
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
