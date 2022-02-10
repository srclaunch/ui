import { memo, ReactElement } from 'react';

import { Text } from './Text';

import {
  CommonComponentProps,
  Size,
  TextColors,
  TextProps,
  TextSize,
} from '../../types';

type SmallProps = CommonComponentProps<TextProps>;

export const Small = memo(
  ({
    as = 'small',
    className = '',
    children,
    lineHeight = Size.Small,
    textColor = TextColors.Light,
    textSize = TextSize.Small,
    ...props
  }: SmallProps): ReactElement => {
    return (
      <Text
        as={as}
        className={`${className} small`}
        textColor={textColor}
        lineHeight={lineHeight}
        {...props}
      >
        {children}
      </Text>
    );
  },
);
