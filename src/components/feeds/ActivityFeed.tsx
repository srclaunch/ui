import { Activity } from '@srclaunch/types';
import { memo, ReactElement } from 'react';
import { DateTime, DateTimeFormatOptions } from 'luxon';
import { getActivityLabel } from '../../lib/activity';
import {
  Align,
  Amount,
  AppearanceProps,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  CommonComponentProps,
  LayoutProps,
  Orientation,
  Size,
  TextSize,
} from '../../types';
import { DateLabel } from '../data/labels/dates/DateLabel';
import { UserLabel } from '../data/labels/people/UserLabel';
import { Button, ButtonType } from '../forms/buttons/Button';
import { Container } from '../layout/Container';
import { Label } from '../typography/Label';
import { Link } from '../typography/Link';
import { convertSizeToAmount } from '../../lib/proportions/conversions';

export type ActivityFeedProps = {
  activities: Activity[];
  dateFormat?: DateTimeFormatOptions;
} & CommonComponentProps<HTMLDivElement> &
  LayoutProps &
  AppearanceProps;

export type ActivityFeedItemProps = {
  dateFormat?: DateTimeFormatOptions;
} & Activity &
  CommonComponentProps<HTMLDivElement> &
  LayoutProps &
  AppearanceProps;

const ActivityFeedItem = memo(
  ({
    dateFormat = DateTime.DATE_FULL,
    who,
    when,
    what,
    where,
  }: ActivityFeedItemProps): ReactElement => {
    return (
      <Container
        className="activity-item"
        grow={false}
        orientation={Orientation.Horizontal}
      >
        {who && (
          <UserLabel
            grow={false}
            image={who.image}
            menu={null}
            name={who.name}
            size={Size.Small}
            to={who.to}
          />
        )}

        {what && (
          <Container
            grow={false}
            marginLeft={-2}
            orientation={Orientation.Horizontal}
          >
            <Label textSize={TextSize.Default}>
              {getActivityLabel(what.name)}
            </Label>

            {what.to ? (
              <Link
                to={what.to}
                hover={{
                  underline: true,
                }}
                marginLeft={3}
                underline={false}
              >
                {what.label}
              </Link>
            ) : (
              what.label
            )}
          </Container>
        )}
        {where && (
          <Label
            alignItems={Align.Center}
            grow={false}
            marginLeft={-2}
            textSize={TextSize.Default}
          >
            {where}
          </Label>
        )}

        <Label grow={false} marginLeft={3}>
          on
        </Label>

        {when && (
          <DateLabel
            format={dateFormat}
            grow={false}
            marginLeft={3}
            textSize={TextSize.Default}
            value={when}
          />
        )}
      </Container>
    );
  },
);

export const ActivityFeed = memo(
  ({
    activities,
    className = '',
    dateFormat = DateTime.DATE_MED,
    ...props
  }: ActivityFeedProps): ReactElement => {
    return (
      <Container className={`${className} activity-feed`} {...props}>
        {activities.map((activity, key) => {
          return (
            <Container key={key}>
              {key !== 0 && key !== activities.length && (
                <Container
                  backgroundColor={BackgroundColors.Lighter}
                  borderRadius={Amount.Default}
                  height={12}
                  marginLeft={convertSizeToAmount(Size.Default)}
                  marginBottom={5}
                  marginTop={5}
                  style={{
                    transform: 'translateX(-2px)',
                  }}
                  width={5}
                />
              )}

              <ActivityFeedItem {...activity} />
            </Container>
          );
        })}

        <Container
          alignContent={Align.Center}
          alignItems={Align.Center}
          border={{
            top: {
              color: BorderColors.Light,
              style: BorderStyle.Solid,
              width: 1,
            },
          }}
          marginTop={Amount.Default}
          padding={Amount.Default}
          paddingBottom={Amount.None}
        >
          <Button type={ButtonType.Primary} size={Size.Small}>
            Load more
          </Button>
        </Container>
      </Container>
    );
  },
);
