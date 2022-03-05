import { useNavigate } from '@srclaunch/web-application-state';
import { memo, ReactElement } from 'react';

import { Container } from '../../components/layout/Container';
import { UserMenu } from '../../components/user/UserMenu';
import {
  Align,
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  ContainerProps,
  Orientation,
} from '../../types';

export type NavigationBarProps = {
  readonly logo?: ReactElement;
} & ContainerProps<HTMLDivElement>;

export const NavigationBar = memo(
  ({
    backgroundColor = BackgroundColors.NavigationBar,
    logo,
  }: NavigationBarProps) => {
    const navigate = useNavigate();

    return (
      <Container
        backgroundColor={backgroundColor}
        border={{
          bottom: {
            color: BorderColors.Dark,
            style: BorderStyle.Solid,
            width: 1,
          },
        }}
        grow={false}
        orientation={Orientation.Horizontal}
        padding={Amount.Default}
        paddingLeft={Amount.More}
        paddingRight={Amount.Most}
      >
        <Container
          alignItems={Align.Center}
          grow={false}
          orientation={Orientation.Horizontal}
        >
          {logo}
        </Container>

        <Container />
        <Container alignContent={Align.Center} width={200}>
          <UserMenu onLogoutSuccess={() => navigate('/login')} />
        </Container>
      </Container>
    );
  },
);
