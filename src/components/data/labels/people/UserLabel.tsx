import { memo, ReactElement } from 'react';
import { User } from '@srclaunch/types';
import { BasicIcons } from '@srclaunch/icons';

import { NavigationLink } from '../../../navigation/NavigationLink';
import { PersonLabel, PersonLabelProps } from './PersonLabel';
import {
  Amount,
  BackgroundColors,
  Orientation,
  TextSize,
} from '../../../../types';
import { MoreMenu } from '../../../menus/MoreMenu';
import { MoreMenuProps } from '../../../menus/MoreMenu';
import { Icon, IconProps } from '../../../media/Icon';

type UserLabelProps = PersonLabelProps & {
  menu?: MoreMenuProps | null;
  id?: User['id'];
  to?: string;
  messageIcon?: IconProps;
};

export const UserLabel = memo(
  ({
    events = {},
    className = '',
    to,
    id,
    menu = {},
    messageIcon = {
      name: BasicIcons.BillEnvelope,
    },
    name,
    image,
    // size = Sizes.Default,
    textSize = TextSize.Default,
  }: UserLabelProps): ReactElement => {
    return (
      <NavigationLink
        alignment={{
          orientation: Orientation.Horizontal,
        }}
        borderRadius={{ all: Amount.All }}
        className={`${className} user-label`}
        // padding={getSmallerAmount(convertSizeToAmount(size))}
        // paddingTop={getSmallerAmount(convertSizeToAmount(size))}
        // paddingBottom={getSmallerAmount(convertSizeToAmount(size))}
        to={to ?? `/people/${id}`}
        states={{
          active: {
            background: {
              color: BackgroundColors.Primary,
              opacity: 100,
            },
          },
          hovered: {
            background: {
              color: BackgroundColors.Primary,
              opacity: 90,
            },
          },
        }}
        style={{
          position: 'relative',
          zIndex: 5,
        }}
      >
        <PersonLabel
          name={name}
          image={image}
          // lineHeight={size}
          // size={size}
          textSize={textSize}
        />

        {messageIcon && (
          <Icon
            //  size={size}
            {...messageIcon}
          />
        )}

        {menu && (
          <MoreMenu
            menu={[
              {
                label: 'Send message',
                events: {
                  mouse: {
                    onClick: () => {
                      console.log('sendEmail');
                    },
                  },
                },
              },
              { label: 'View Profile', to: `/people/${id}` },
            ]}
          />
        )}
      </NavigationLink>
    );
  },
);
