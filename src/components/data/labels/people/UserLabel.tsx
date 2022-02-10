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
import { Icon } from '../../../media/Icon';
import { IconProps } from '../../../../types';
import { convertSizeToAmount } from '../../../../lib/proportions/conversions';
import { getSmallerAmount } from '../../../../lib/proportions/amount';

type UserLabelProps = PersonLabelProps<{
  menu?: MoreMenuProps | null;
  id?: User['id'];
  to?: string;
  messageIcon?: IconProps;
}>;

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
    size = Size.Default,
    textSize = TextSize.Default,
  }: UserLabelProps): ReactElement => {
    return (
      <NavigationLink
        borderRadius={Amount.All}
        className={`${className} user-label`}
        active={{
          backgroundColor: BackgroundColors.Primary,
          backgroundOpacity: 100,
        }}
        hover={{
          backgroundColor: BackgroundColors.Primary,
          backgroundOpacity: 90,
        }}
        orientation={Orientation.Horizontal}
        padding={getSmallerAmount(convertSizeToAmount(size))}
        paddingTop={getSmallerAmount(convertSizeToAmount(size))}
        paddingBottom={getSmallerAmount(convertSizeToAmount(size))}
        to={to ?? `/people/${id}`}
        style={{
          position: 'relative',
          zIndex: 5,
        }}
      >
        <PersonLabel
          name={name}
          image={image}
          lineHeight={size}
          size={size}
          textSize={textSize}
        />

        {messageIcon && <Icon grow={false} size={size} {...messageIcon} />}

        {menu && <MoreMenu {...menu} />}
      </NavigationLink>
    );
  },
);
