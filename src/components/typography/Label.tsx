import { memo, ReactElement } from 'react';
import styled from 'styled-components';

import { getDisplayPropertyValue } from '../../lib/css/display';
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

export type LabelProps<E = HTMLElement> = {
  readonly icon?: IconProps;
} & {
  readonly focus?: LabelProps;
  readonly hover?: LabelProps;
  readonly active?: LabelProps;
} & ContainerProps<E> &
  TextProps &
  SizeProps;

const TextContainer = styled.span<LabelProps>`
  ${TextStyles};
  display: ${props => getDisplayPropertyValue(props.as as string)};
`;

export const Label = memo(
  ({
    alignItems = Align.Center,
    alignContent = Align.Stretch,
    alignText = Align.Left,
    as = 'label',
    children,
    className = '',
    grow = true,
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
        as="label"
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
          alignText={alignText}
          as={as}
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
