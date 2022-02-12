import { memo, ReactElement } from 'react';
import styled, { css } from 'styled-components';

import { AppearanceStyles } from '../../styles/appearance';
import { LayoutStyles } from '../../styles/layout';
import { Amount, BackgroundColors, ContainerProps, Size } from '../../types';
import { ProgressSpinner } from './ProgressSpinner';

type LoadingOverlayProps = {
  readonly spinnerSize?: Size;
  readonly visible?: boolean;
} & ContainerProps<HTMLDivElement>;

export const LoadingOverlay = memo(
  ({
    backgroundColor = BackgroundColors.Dark,
    borderRadius = Amount.None,
    className = '',
    spinnerSize,
    visible,
    ...props
  }: LoadingOverlayProps): ReactElement => {
    return (
      <Wrapper
        backgroundColor={backgroundColor}
        backgroundOpacity={85}
        borderRadius={borderRadius}
        className={`${className} loading-overlay`}
        visible={visible}
        {...props}
      >
        <ProgressSpinner size={spinnerSize} />
      </Wrapper>
    );
  },
);

const Wrapper = memo(styled.div<LoadingOverlayProps>`
  ${LayoutStyles};
  ${AppearanceStyles};

  align-items: center;
  backdrop-filter: blur(1px);
  border-radius: ${props => props.borderRadius};
  bottom: 0;
  display: flex;
  justify-content: center;
  min-height: ${Size.Largest};
  min-width: ${Size.Largest};
  opacity: 0;
  pointer-events: none;
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  top: 0;
  transition: background 0.2s cubic-bezier(0.2, 0.3, 0.25, 0.9),
    opacity 0.2s cubic-bezier(0.25, 0.1, 0.25, 0.1);
  z-index: 4;

  ${props =>
    props.visible &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
`);
