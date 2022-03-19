import { memo, ReactElement } from 'react';

import {
  AlignVertical,
  Amount,
  CommonComponentProps,
  Fill,
  Orientation,
  Overflow,
  Sizes,
  TextColors,
  TextOverflow,
  TextSize,
  TextWeight,
} from '../../types';
import { Container, ContainerProps } from '../layout/Container';
import { Icon, IconProps } from '../media/Icon';
import { Text, TextProps } from './Text';

export type LabelProps = ContainerProps &
  TextProps & {
    readonly icon?: IconProps;
  };

export const Label = memo(
  ({
    alignment = {},
    as = 'label',
    children,
    className = '',
    icon,
    lineHeight = Sizes.Default,
    lineWrap = false,
    selectable = true,
    textColor = TextColors.Default,
    textOverflow = TextOverflow.Ellipsis,
    textSize = TextSize.Default,
    textWeight = TextWeight.Default,
    ...props
  }: LabelProps): ReactElement => {
    return (
      <Container
        alignment={{
          orientation: Orientation.Horizontal,
          vertical: AlignVertical.Top,
          ...alignment,
        }}
        as={as}
        className={`${className} label`}
        {...props}
      >
        {icon &&
          (icon.component ||
            icon.name ||
            icon.path ||
            icon.url ||
            icon.svg) && (
            <Icon margin={{ right: Amount.Least, ...icon.margin }} {...icon} />
          )}

        <Text
          selectable={selectable}
          lineHeight={lineHeight}
          textColor={textColor}
          textOverflow={textOverflow}
          textSize={textSize}
          textWeight={textWeight}
        >
          {children}
        </Text>
      </Container>
    );
  },
);
