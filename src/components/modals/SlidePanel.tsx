import { memo, ReactElement } from 'react';
import styled from 'styled-components';

import { AppearanceStyles } from '../../styles/appearance';
import { DimensionStyles } from '../../styles/appearance/dimension';
import { LayoutStyles } from '../../styles/layout';
import {
  Align,
  Amount,
  BackgroundColors,
  ContainerProps,
  Depth,
  DepthShadow,
  HeightProps,
  WidthProps,
} from '../../types';

type SlidePanelProps = {
  readonly visible?: boolean;
} & ContainerProps<HTMLDivElement> &
  HeightProps &
  WidthProps;

export const SlidePanel = memo(
  ({
    alignItems = Align.Stretch,
    backgroundColor = BackgroundColors.SlidePanel,
    boxShadow = DepthShadow.Highest,
    borderRadius = Amount.Most,
    children,
    className = '',
    depth = Depth.Highest,
    padding = Amount.Less,
    visible = false,
    width = 380,
    ...props
  }: SlidePanelProps): ReactElement => {
    return (
      <Container
        alignItems={alignItems}
        backgroundColor={backgroundColor}
        boxShadow={boxShadow}
        as={Container}
        borderRadius={borderRadius}
        className={`${className} slide-panel`}
        depth={depth}
        padding={padding}
        visible={visible}
        width={width}
        {...props}
      >
        {children}
      </Container>
    );
  },
);

const Container = styled.div<SlidePanelProps>`
  ${LayoutStyles};
  ${AppearanceStyles};
  ${DimensionStyles};

  bottom: ${Amount.Default};
  opacity: ${props => (props.visible ? '1' : '0')};
  position: fixed;
  right: ${Amount.Default};
  top: ${Amount.Default};
  transform: ${props =>
    props.visible ? 'translate(0, 0)' : 'translate(0, 1900px)'};
  transition: all 0.3s ease-in-out;
  transform: ${props =>
    props.visible ? 'translate(0, 0)' : 'translate(1600px, 0)'};
  z-index: 6;
`;
