import { BasicIcons } from '@srclaunch/icons';
import { memo, ReactElement, useState } from 'react';

import {
  AlignHorizontal,
  Alignment,
  AlignVertical,
  Amount,
  BackgroundColors,
  Depth,
  ForegroundColor,
  ForegroundColors,
  Position,
  Sizes,
} from '../../types';
import { Container, ContainerProps } from '../layout/Container';
import { Icon } from '../media/Icon';

export type CloseButtonProps = {
  readonly iconColor?: ForegroundColor;
} & ContainerProps<HTMLButtonElement>;

export const CloseButton = memo(
  ({
    background = { color: BackgroundColors.CloseButton },
    iconColor = ForegroundColors.CloseButton,
    className = '',
    onClick,
    size = {
      height: Sizes.Default,
      width: Sizes.Default,
    },
    ...props
  }: CloseButtonProps): ReactElement => {
    const [hovered, setHovered] = useState(false);
    const [focused, setFocused] = useState(false);

    const iconHoverColor = hovered
      ? ForegroundColors.PrimaryContrast
      : iconColor;

    return (
      <Container
        alignment={{
          horizontal: AlignHorizontal.Center,
          vertical: AlignVertical.Center,
        }}
        as="button"
        background={hovered ? { color: BackgroundColors.Primary } : background}
        borderRadius={{ all: Amount.All }}
        className={`${className} close-button`}
        depth={Depth.Higher}
        focused={focused}
        form="null"
        onClick={onClick}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        size={{
          height: size.height,
          width: size.width,
          ...size,
        }}
      >
        <Icon
          color={iconHoverColor}
          name={BasicIcons.Close}
          size={{ height: Sizes.Smallest, width: Sizes.Smallest }}
        />
      </Container>
    );
  },
);

// const Container = styled.button<CloseButtonProps>`
//   ${LayoutStyles};
//   ${AppearanceStyles};
//   ${FocusedStyles};
//   ${DimensionStyles};

//   border: none;
//   // border-radius: var(--size-${props => props.size});
//   cursor: pointer;
//   // height: var(--size-${props => props.size});
//   //flex-basis: var(--size-${props => props.size});
//   //line-height: var(--size-${props => props.size});
//   outline: none;
//   //position: relative;
//   //transition: background 0.1s ease-in-out;
//   //width: var(--size-${props => props.size});

//   &:active {
//     opacity: 0.5;
//   }

//   &:before {
//     border-radius: ${Amount.All};
//   content: '';
//   display: flex;
//   border: 2px solid rgba(var(--color-secondary-rgb), 0.6);
//   flex: 0;
//   opacity: 0;
//   padding: 8px;
//   position: absolute;
//   top: -5px;
//   left: -5px;
//   right: -5px;
//   bottom: -5px;
//   transition: border 0.2s ease-in-out;
// }

//&:before {
//  &:after {
//    opacity: 1;
//  }
//}

/* div {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
    position: relative;

    &:before,
    &:after {
      position: absolute;
      background: $ {props => props.iconColor};
      content: '';
      display: inline-block;
      height: calc(100% / 3);
      transition: background 0.1s ease-in-out;
      width: 2px;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }
  } */
// `;
