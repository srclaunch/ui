import { Children, memo, ReactElement, useState } from 'react';
import styled, { css } from 'styled-components';

import { FocusStyles } from '../../../styles/container/focus';

import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColors,
  BorderColors,
  DepthShadow,
  Orientation,
  TextColors,
} from '../../../types';
import { Container, ContainerProps } from '../../layout/Container';
import { Label } from '../../typography/Label';

type TabsProps = ContainerProps;

export const Tabs = memo(
  ({
    background = {},
    borderRadius = {},
    className = '',
    children,
  }: TabsProps): ReactElement => {
    let initialIndex = 0;

    // @ts-ignore
    React.Children.forEach(children, (child: React.ReactNode, key) => {
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
          {React.Children.map(children, (c: React.ReactElement, key) => {
            if (c.props.visible === false) return null;

            return (
              <TabButton
                className={c.props.className}
                current={currentTabIndex === key}
                onClick={() => {
                  setTabIndex(key);

                  if (c.props.onClick && typeof c.props.onClick === 'function')
                    c.props.onClick();
                }}
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
              </TabButton>
            );
          })}
        </Container>

        <Container
          background={{
            color: BackgroundColors.Default,
            ...background,
          }}
          borderRadius={{ all: Amount.More, ...borderRadius }}
          className="tab-content"
          padding={{
            bottom: Amount.Default,
            left: Amount.Most,
            right: Amount.Most,
            top: Amount.Default,
          }}
          shadow={DepthShadow.Highest}
        >
          {Children.map(children, (c: React.ReactNode, key) => {
            if (key !== currentTabIndex) return null;

            // @ts-ignore
            return React.cloneElement(c);
          })}
        </Container>
      </Container>
    );
  },
);

const TabButton = styled.button<{
  readonly current?: boolean;
}>`
  ${FocusStyles};

  background: transparent;
  border: none;
  border-bottom: 3px solid rgba(${BorderColors.Light}, 0.5);
  color: var(--text-color-light);
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  height: var(--amount-all);
  line-height: var(--amount-all);
  padding: 0 var(--amount-default);
  position: relative;
  text-align: center;
  transition: background 0.2s ease-out, border 0.2s ease-out,
    color 0.2s ease-out;
  user-select: none;

  &:before {
    border-radius: ${Amount.Least};
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
  }

  * {
    cursor: pointer;
  }

  ${props =>
    props.current &&
    css`
      border-bottom: 3px solid var(--color-primary);
      font-weight: 700;
    `}
`;
