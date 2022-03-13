import { memo, ReactElement } from 'react';
import { DualLightIcons } from '@srclaunch/icons';
import { useNavigate } from '@srclaunch/web-application-state';
import {
  Alignment,
  AlignVertical,
  Amount,
  BackgroundColors,
  Fill,
  Sizes,
} from '../../../types';
import { Button, ButtonType } from '../../forms/buttons/Button';
import { Container, ContainerProps } from '../../layout/Container';
import { NavigationMenu } from '../../navigation/NavigationMenu';

type ConversationNavigationProps = ContainerProps;

export const ConversationNavigation = memo(
  ({ ...props }: ConversationNavigationProps): ReactElement => {
    const navigate = useNavigate();

    return (
      <Container {...props}>
        <Button
          alignment={{
            fill: Fill.Horizontal,
            vertical: AlignVertical.Center,
          }}
          borderRadius={{ all: Amount.Least }}
          icon={{
            name: DualLightIcons.AddCircle,
            size: {
              height: Sizes.Small,
              width: Sizes.Small,
            },
          }}
          margin={{
            bottom: Amount.Default,
          }}
          onClick={() => navigate('/messages/new')}
          // size={Sizes.Large}
          type={ButtonType.Primary}
        >
          New Message
        </Button>

        <NavigationMenu
          background={{ color: BackgroundColors.Transparent }}
          menu={[
            {
              icon: {
                name: DualLightIcons.Inbox,
                size: Sizes.Small,
              },
              label: 'Inbox',
              to: '/messages/inbox',
            },
            {
              icon: {
                name: DualLightIcons.Star,
                size: Sizes.Small,
              },
              label: 'Starred',
              to: '/messages/starred',
            },
            {
              icon: {
                name: DualLightIcons.Send,
                size: Sizes.Small,
              },
              label: 'Sent',
              to: '/messages/sent',
            },
            {
              icon: {
                name: DualLightIcons.Note,
                size: Sizes.Small,
              },
              label: 'Drafts',
              to: '/messages/drafts',
            },
            {
              icon: {
                name: DualLightIcons.Trash,
                size: Sizes.Small,
              },
              label: 'Trash',
              to: '/messages/trash',
            },
          ]}
        />
      </Container>
    );
  },
);
