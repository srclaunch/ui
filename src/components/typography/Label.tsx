import { memo, ReactElement } from 'react';

import {
  Align,
  Amount,
  Orientation,
  Overflow,
  Size,
  SizeProps,
  TextColors,
  TextOverflow,
  TextSize,
  TextWeight,
  WhiteSpace,
} from '../../types';

import { Container, ContainerProps } from '../layout/Container';
import { Text, TextProps } from '../typography/Text';
import { Icon, IconProps } from '../media/Icon';

export type LabelProps<E = HTMLLabelElement, P = {}> = TextProps<
  E,
  SizeProps<{
    icon?: IconProps;
  }>
> &
  P;

export const Label = memo(
  ({
    alignItems = Align.Center,
    alignContent = Align.Stretch,
    as = 'label',
    children,
    className = '',
    grow = false,
    icon,
    orientation = Orientation.Horizontal,
    size = Size.Default,
    textColor = TextColors.Default,
    textOverflow = TextOverflow.Ellipsis,
    textSize = TextSize.Default,
    textWeight = TextWeight.Default,
    underline = false,
    whiteSpace = WhiteSpace.NoWrap,
    ...props
  }: LabelProps): ReactElement => {
    return (
      <Container
        alignItems={alignItems}
        alignContent={alignContent}
        as={as}
        className={`${className} label`}
        grow={grow}
        orientation={orientation}
        {...props}
      >
        {icon &&
          (icon.component ||
            icon.name ||
            icon.path ||
            icon.url ||
            icon.svg) && <Icon marginRight={Amount.Least} {...icon} />}

        <Text
          lineHeight={size}
          overflow={Overflow.Hidden}
          textColor={textColor}
          textOverflow={textOverflow}
          textSize={textSize}
          textWeight={textWeight}
          underline={underline}
          whiteSpace={whiteSpace}
        >
          {children}
        </Text>
      </Container>
    );
  },
);
