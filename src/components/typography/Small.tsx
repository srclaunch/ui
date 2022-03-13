import { memo, ReactElement } from 'react';

import { Sizes, TextColors, TextSize } from '../../types';
import { Text, TextProps } from './Text';

type SmallProps = TextProps;

export const Small = memo(
  ({
    as = 'small',
    className = '',
    children,
    lineHeight = Sizes.Small,
    textColor = TextColors.Light,
    textSize = TextSize.Small,
    ...props
  }: SmallProps): ReactElement => {
    return (
      <Text
        as={as}
        className={`${className} small`}
        lineHeight={lineHeight}
        lineWrap={true}
        textColor={textColor}
        textSize={textSize}
        {...props}
      >
        {children}
      </Text>
    );
  },
);
