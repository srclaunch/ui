import { memo, ReactElement } from 'react';

import { Text } from './Text';

import {
  CommonComponentProps,
  Size,
  TextColors,
  TextProps,
  TextSize,
} from '../../types';

type ParagraphProps = CommonComponentProps<TextProps<HTMLParagraphElement>>;

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
      <Text
        as={as}
        className={`${className} paragraph`}
        textColor={textColor}
        lineHeight={Size.Small}
        {...props}
      >
        {children}
      </Text>
    );
  },
);
