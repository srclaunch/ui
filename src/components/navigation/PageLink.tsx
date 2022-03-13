import { BasicIcons } from '@srclaunch/icons';
import { Link } from '@srclaunch/web-application-state';
import { memo, ReactElement } from 'react';
import styled from 'styled-components';

import { LinkProps, Size, TextColors } from '../../types';
import { Icon } from '../media/Icon';
import { Label, LabelProps } from '../typography/Label';

export type PageLinkProps = {
  readonly label?: string;
  readonly showArrow?: boolean;
  readonly showUnderline?: boolean;
} & LabelProps &
  LinkProps;

export const PageLink = memo(
  ({
    textColor,
    label,
    to,
    icon,
    showArrow = false,
    showUnderline = false,
  }: PageLinkProps): ReactElement => {
    return (
      <Container showUnderline={showUnderline}>
        <Link to={to}>
          <IconWrapper>{icon}</IconWrapper>

          <Label
            textColor={textColor ?? TextColors.Primary}
            // size={Size.Small}
          >
            {label}
          </Label>

          {showArrow && (
            <Icon
              name={BasicIcons.ChevronRight}
              // size={Size.Small}
              color={textColor}
            />
          )}
        </Link>
      </Container>
    );
  },
);

const Container = styled.div<{
  readonly showUnderline?: boolean;
}>`
  display: flex;

  a {
    border: ${props =>
      props.showUnderline ? `2px solid var(--color-primary)` : 'none'};
    text-decoration: none;

    /* &:hover {
      border-bottom: 2px solid rgba(65, 145, 64, 1);
    } */
  }

  @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
    a {
      font-size: 18px;
    }

    svg {
      height: 12px;
      width: 12px;
    }
  }

  @media (min-width: 1200px) {
  }
`;

const IconWrapper = styled.div`
  flex-basis: 20px;
`;
