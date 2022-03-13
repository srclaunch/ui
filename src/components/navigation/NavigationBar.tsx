import { useNavigate } from '@srclaunch/web-application-state';
import { memo, ReactElement } from 'react';

import { Container, ContainerProps } from '../../components/layout/Container';
import { UserMenu } from '../../components/user/UserMenu';
import {
  AlignHorizontal,
  Alignment,
  AlignVertical,
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  Orientation,
} from '../../types';

export type NavigationBarProps = {
  readonly logo?: ReactElement;
} & ContainerProps<HTMLDivElement>;

export const NavigationBar = memo(
  ({
    alignment = {},
    background = {},
    border = {},
    logo,
    padding = {},
  }: NavigationBarProps) => {
    const navigate = useNavigate();

    return (
      <Container
        alignment={{
          orientation: Orientation.Horizontal,
          ...alignment,
        }}
        background={{ color: BackgroundColors.NavigationBar, ...background }}
        border={{
          bottom: {
            color: BorderColors.Dark,
            style: BorderStyle.Solid,
            width: 1,
          },
          ...border,
        }}
        padding={{
          bottom: Amount.Default,
          left: Amount.More,
          right: Amount.Most,
          top: Amount.Default,
          ...padding,
        }}
      >
        <Container
          alignment={{
            orientation: Orientation.Horizontal,
            vertical: AlignVertical.Center,
          }}
        >
          {logo}
        </Container>

        <Container />
        <Container
          alignment={{
            vertical: AlignVertical.Center,
          }}
          size={{ width: 200 }}
        >
          <UserMenu onLogoutSuccess={() => navigate('/login')} />
        </Container>
      </Container>
    );
  },
);
