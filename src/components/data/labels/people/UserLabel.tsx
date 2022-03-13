import { memo, ReactElement } from 'react';
import { User } from '@srclaunch/types';
import { BasicIcons } from '@srclaunch/icons';

import { NavigationLink } from '../../../navigation/NavigationLink';
import { PersonLabel, PersonLabelProps } from './PersonLabel';
import {
  Amount,
  BackgroundColors,
  Orientation,
  Size,
  TextSize,
} from '../../../../types';
import { MoreMenu } from '../../../menus/MoreMenu';
import { MoreMenuProps } from '../../../menus/MoreMenu';
import { Icon, IconProps } from '../../../media/Icon';
import { convertSizeToAmount } from '../../../../lib/proportions/conversions';
import { getSmallerAmount } from '../../../../lib/proportions/amount';

type UserLabelProps = {
  menu?: MoreMenuProps | null;
  id?: User['id'];
  to?: string;
  messageIcon?: IconProps;
} & PersonLabelProps;

export const UserLabel = memo(
  ({
    className = '',
    to,
    id,
    menu = {
      menu: [
        {
          label: 'Send message',
          onClick: () => {
            console.log('sendEmail');
          },
        },
        { label: 'View Profile', to: `/people/${id}` },
      ],
    },
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
        active={{
          background: {
            color: BackgroundColors.Primary,
            opacity: 100,
          },
        }}
        hover={{
          background: {
            color: BackgroundColors.Primary,
            opacity: 90,
          },
        }}
        // padding={getSmallerAmount(convertSizeToAmount(size))}
        // paddingTop={getSmallerAmount(convertSizeToAmount(size))}
        // paddingBottom={getSmallerAmount(convertSizeToAmount(size))}
        to={to ?? `/people/${id}`}
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

        {menu && <MoreMenu {...menu} />}
      </NavigationLink>
    );
  },
);
