import { memo, ReactElement } from 'react';
import { Amount, Size, TextColors, TextSize, TextWeight } from '../../types';
import { Text, TextProps } from './Text';

type SubTitleProps = TextProps<HTMLHeadingElement>;

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
      <Text
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
      </Text>
    );
  },
);
