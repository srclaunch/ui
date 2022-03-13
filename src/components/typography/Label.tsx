import { memo, ReactElement } from 'react';

import {
  AlignVertical,
  Amount,
  CommonComponentProps,
  Fill,
  Orientation,
  Sizes,
  TextColors,
  TextOverflow,
  TextSize,
  TextWeight,
} from '../../types';
import { Container, ContainerProps } from '../layout/Container';
import { Icon, IconProps } from '../media/Icon';
import { Text, TextProps } from './Text';

export type LabelProps<E = HTMLLabelElement> = {
  readonly icon?: IconProps;
} & CommonComponentProps<E> &
  ContainerProps &
  TextProps;

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
          fill: Fill.Both,
          orientation: Orientation.Horizontal,
          vertical: AlignVertical.Center,
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
            icon.svg) && <Icon margin={{ right: Amount.Least }} {...icon} />}

        <Text
          selectable={selectable}
          lineHeight={lineHeight}
          textColor={textColor}
          textOverflow={textOverflow}
          textSize={textSize}
          textWeight={textWeight}
          {...props}
        >
          {children}
        </Text>
      </Container>
    );
  },
);
