// import { sendEvent } from '@srclaunch/analytics';
import React from 'react';
// import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';

const NavigationLink = ({
  activeClassName = 'current',
  name,
  data,
  children,
  label,
  onClick,
  prefetch = false,
  to,
}: {
  activeClassName?: string;
  name: string;
  data?: Record<string, unknown>;
  children?: React.ReactChildren;
  label?: string;
  onClick?: React.MouseEventHandler;
  prefetch?: boolean;
  to: string;
}): React.ReactElement => {
  return (
    <>s</>
    // <NavLink
    //   activeClassName="current"
    //   component={Container}
    //   to={to}
    //   onClick={(e: React.MouseEvent) => {
    //     // if (!name)
    //     //   console.error(
    //     //     `Missing analytics event properties: <Link to="${to}" />`,
    //     //   );

    //     // sendEvent(`${name ?? 'MISSING'} NavLink: Click`, { ...data });
    //     onClick && onClick(e);
    //   }}
    // >
    //   {label ?? children}
    // </NavLink>
  );
};

// const Container = styled.span`
//   color: var(--fg-color-text-paragraph);
//   /* &.error {
//     border: 1px solid var(--color-error);
//   } */
// `;

export default NavigationLink;
