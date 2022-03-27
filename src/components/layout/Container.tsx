import {
  memo,
  forwardRef,
  useState,
  PropsWithChildren,
  ReactElement,
} from 'react';
import styled from 'styled-components';
import { getContainerStyles } from '../../styles/container';
import { getContainerStatesStyles } from '../../styles/container/states';
import {
  Alignment,
  AlignHorizontal,
  AlignVertical,
  Background,
  Border,
  BorderRadius,
  CommonComponentProps,
  DepthShadow,
  Animation,
  Cursor,
  Depth,
  Events,
  States,
  Margin,
  Orientation,
  Padding,
  Size,
  Shadow,
  Position,
  Visibility,
} from '../../types';
import { getEventHandlers } from '../../lib/events';
import { ReactEventHandler } from 'react';
import { useEffect } from 'react';
import { Transform } from '../../types/appearance/transform';
import { getAnimationStyles } from '../../styles/container/animation';

export type ContainerProps = PropsWithChildren<
  CommonComponentProps & {
    readonly alignment?: Alignment;
    readonly animations?: Animation[];
    readonly background?: Background;
    readonly border?: Border;
    readonly borderRadius?: BorderRadius;
    readonly cursor?: Cursor;
    readonly depth?: Depth;
    readonly events?: Events;
    readonly margin?: Margin;
    readonly padding?: Padding;
    readonly position?: Position;
    readonly shadow?: DepthShadow | Shadow;
    readonly size?: Size;
    readonly transform?: Transform;
    readonly visibility?: Visibility;
    readonly states?: States<ContainerProps>;
  }
>;

const Wrapper = styled.div<ContainerProps>`
  ${props => getContainerStyles(props)};
  ${props => getContainerStatesStyles(props)};
  /* ${props => getAnimationStyles(props)} */
`;

export const Container = memo(
  ({
    alignment,
    as = 'div',
    children,
    className = '',
    events = {},
    states = {},
    ...props
  }: ContainerProps): ReactElement => {
    const [eventHandlers, setEventHandlers] = useState<{
      [key: string]: ReactEventHandler;
    }>({});

    useEffect(() => {
      if (events && Object.keys(events).length > 0) {
        setEventHandlers(getEventHandlers(events));
      }
    }, []);

    return (
      <Wrapper
        alignment={{
          horizontal: AlignHorizontal.Stretch,
          orientation: Orientation.Vertical,
          vertical: AlignVertical.Stretch,
          ...alignment,
        }}
        as={as}
        className={`${className} container`}
        disabled={states?.state?.disabled}
        states={states}
        {...props}
        {...eventHandlers}
      >
        {children}
      </Wrapper>
    );
  },
);
