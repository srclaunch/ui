// import { sendEvent } from '@srclaunch/analytics';
// import { Link as RouterLink, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

import Container from '../layout/Container';
import { Orientation } from '../types/layout/positioning';

const Link = ({
  activeClassName = 'current',
  color,
  data,
  children,
  grow = false,
  label,
  name,
  onClick,
  prefetch = false,
  rel,
  target,
  to,
}: {
  activeClassName?: string;
  data?: Record<string, unknown>;
  color?: string;
  children?:
    | React.ReactChild
    | React.ReactChildren
    | React.ReactElement
    | string;
  grow?: boolean;
  label?: string;
  name?: string;
  onClick?: React.MouseEventHandler;
  prefetch?: boolean;
  rel?: string;
  target?: '_blank';
  to: string;
}): React.ReactElement => {
  // const match = useRouteMatch(to);

  return (
    <Wrapper
      as={Container}
      color={color}
      className={`link ${!name ? 'error' : ''}`}
      grow={grow}
      orientation={Orientation.Horizontal}
    >
      {'asdf'}
      {/* <RouterLink
        className={`${match?.isExact ? activeClassName : ''}`}
        to={to}
        onClick={(e: React.MouseEvent) => {
          if (!name)
            console.error(
              `Missing analytics event properties: <Link to="${to}" />`,
            );

          // sendEvent(`${name ?? 'MISSING'} Link: Click`, { ...data });
          onClick && onClick(e);
        }}
        target={target}
        rel={rel}
      >
        <>{label ?? children}</>
      </RouterLink> */}
    </Wrapper>
  );
};

const Wrapper = styled.span<{ color?: string }>`
  &.error {
    border: 1px solid var(--color-error);
  }

  a {
    color: ${props => props.color ?? 'var(--color-primary)'};
    flex: 1;
    font-weight: 500;
    outline: none;
    position: relative;
    text-decoration: none;

    &:after {
      border: 2px solid var(--color-primary);
      border-radius: inherit;
      bottom: -6px;
      content: '';
      display: block;
      left: -6px;
      opacity: 0;
      padding: 8px;
      position: absolute;
      right: -6px;
      top: -6px;
      transition: opacity 0.2s ease-in-out;
    }

    &:focus {
      &:after {
        opacity: 1;
      }
    }
  }
`;

export default Link;
