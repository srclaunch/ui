import {
  Children,
  cloneElement,
  memo,
  ReactElement,
  ReactNode,
  useState,
} from 'react';
import styled, { css } from 'styled-components';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColors,
  BorderColors,
  DepthShadow,
  Orientation,
  TextColors,
} from '../../types';
import { Button } from '../forms/buttons/Button';
import { Container, ContainerProps } from '../layout/Container';
import { Label } from '../typography/Label';

type TabProps = ContainerProps & {
  readonly label: string;
  readonly selected?: boolean;
  readonly visible?: boolean;
};

export const Tab = memo(
  ({ className = '', children, label, ...props }: TabProps): ReactElement => {
    return (
      <Container
        className={`${className} tab`}
        data-label={label}
        // fadeIn
        {...props}
      >
        {children}
      </Container>
    );
  },
);

type TabsProps = ContainerProps;

export const Tabs = memo(
  ({
    background = {},
    borderRadius = {},
    className = '',
    children,
    ...props
  }: TabsProps): ReactElement => {
    let initialIndex = 0;

    // @ts-ignore
    Children.forEach(children, (child: React.ReactNode, key) => {
      // @ts-ignore
      if (child.props?.selected) initialIndex = key;
    });

    const [currentTabIndex, setTabIndex] = useState(initialIndex);

    return (
      <Container
        alignment={{
          vertical: AlignVertical.Stretch,
        }}
        className={`${className} tabs`}
        {...props}
      >
        <Container
          alignment={{
            orientation: Orientation.Horizontal,
            horizontal: AlignHorizontal.Center,
          }}
          margin={{
            bottom: Amount.Default,
          }}
        >
          {/* @ts-ignore */}
          {Children.map(children, (c: ReactElement, key) => {
            if (c.props.visible === false) return null;

            return (
              <Button
                background={{ color: BackgroundColors.Transparent }}
                borderRadius={{ all: Amount.None }}
                border={{
                  bottom: {
                    color:
                      currentTabIndex === key
                        ? BorderColors.Primary
                        : BorderColors.Transparent,
                    width: 2,
                  },
                }}
                className={c.props.className}
                events={{
                  mouse: {
                    onClick: () => {
                      setTabIndex(key);

                      if (
                        c.props.onClick &&
                        typeof c.props.onClick === 'function'
                      )
                        c.props.onClick();
                    },
                  },
                }}
                padding={{ left: Amount.Less, right: Amount.Less }}
                key={key}
              >
                <Label
                  textColor={
                    currentTabIndex === key
                      ? TextColors.Primary
                      : TextColors.Default
                  }
                >
                  {c.props.label}
                </Label>
              </Button>
            );
          })}
        </Container>

        <Container className="tab-content">
          {Children.map(children, (c: ReactNode, key) => {
            if (key !== currentTabIndex) return null;

            // @ts-ignore
            return cloneElement(c);
          })}
        </Container>
      </Container>
    );
  },
);

// const TabButton = styled.button<{
//   readonly current?: boolean;
// }>`
//   ${FocusStyles};

//   background: transparent;
//   border: none;
//   border-bottom: 3px solid rgba(${BorderColors.Light}, 0.5);
//   color: var(--text-color-light);
//   cursor: pointer;
//   display: inline-block;
//   font-size: 14px;
//   font-weight: 600;
//   height: var(--amount-all);
//   line-height: var(--amount-all);
//   padding: 0 var(--amount-default);
//   position: relative;
//   text-align: center;
//   transition: background 0.2s ease-out, border 0.2s ease-out,
//     color 0.2s ease-out;
//   user-select: none;

//   &:before {
//     border-radius: ${Amount.Least};
//     top: -2px;
//     left: -2px;
//     right: -2px;
//     bottom: -2px;
//   }

//   * {
//     cursor: pointer;
//   }

//   ${props =>
//     props.current &&
//     css`
//       border-bottom: 3px solid var(--color-primary);
//       font-weight: 700;
//     `}
// `;
