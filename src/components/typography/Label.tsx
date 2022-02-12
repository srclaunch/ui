import { memo, ReactElement } from 'react';
import styled from 'styled-components';

import { TextStyles } from '../../styles/typography';
import {
  Align,
  Amount,
  Orientation,
  Overflow,
  Size,
  SizeProps,
  TextColors,
  TextOverflow,
  TextProps,
  TextSize,
  TextWeight,
  WhiteSpace,
} from '../../types';
import { Container, ContainerProps } from '../layout/Container';
import { Icon, IconProps } from '../media/Icon';

export type LabelProps<
  E = HTMLLabelElement | HTMLHeadingElement | HTMLParagraphElement,
> = {
  readonly icon?: IconProps;
} & {
  readonly focus?: LabelProps;
  readonly hover?: LabelProps;
  readonly active?: LabelProps;
} & ContainerProps<E> &
  TextProps &
  SizeProps;

const TextContainer = styled.span<TextProps>`
  ${TextStyles};
`;

export const Label = memo(
  ({
    alignItems = Align.Center,
    alignContent = Align.Stretch,
    as = 'label',
    children,
    className = '',
    grow = false,
    icon,
    inline = true,
    lineHeight = Size.Default,
    orientation = Orientation.Horizontal,
    selectable = true,
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

        <TextContainer
          as="span"
          className={`${className} text`}
          inline={inline}
          selectable={selectable}
          lineHeight={lineHeight}
          overflow={Overflow.Hidden}
          textColor={textColor}
          textOverflow={textOverflow}
          textSize={textSize}
          textWeight={textWeight}
          underline={underline}
          whiteSpace={whiteSpace}
          {...props}
        >
          {children}
        </TextContainer>
      </Container>
    );
  },
);
