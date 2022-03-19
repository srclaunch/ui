import { Activity } from '@srclaunch/types';
import { memo, ReactElement } from 'react';
import { DateTime, DateTimeFormatOptions } from 'luxon';
import { getActivityLabel } from '../../lib/activity';
import {
  AlignHorizontal,
  Alignment,
  AlignVertical,
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  CommonComponentProps,
  Orientation,
  Size,
  TextDecorationLine,
  TextSize,
} from '../../types';
import { DateLabel } from '../data/labels/dates/DateLabel';
import { UserLabel } from '../data/labels/people/UserLabel';
import { Button, ButtonType } from '../forms/buttons/Button';
import { Container, ContainerProps } from '../layout/Container';
import { Label } from '../typography/Label';
import { Link } from '../typography/Link';
import { convertSizeToAmount } from '../../lib/proportions/conversions';

export type ActivityFeedProps = {
  activities: Activity[];
  dateFormat?: DateTimeFormatOptions;
} & ContainerProps;

export type ActivityFeedItemProps = {
  dateFormat?: DateTimeFormatOptions;
} & Activity &
  ContainerProps;

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
        alignment={{
          orientation: Orientation.Horizontal,
        }}
        className="activity-item"
      >
        {who && (
          <UserLabel
            image={who.image}
            menu={null}
            name={who.name}
            // size={Size.Small}
            to={who.to}
          />
        )}

        {what && (
          <Container
            alignment={{
              orientation: Orientation.Horizontal,
            }}
            margin={{ left: -2 }}
          >
            <Label margin={{ right: 3 }} textSize={TextSize.Default}>
              {getActivityLabel(what.name)}
            </Label>

            {what.to ? (
              <Link
                to={what.to}
                states={{
                  hovered: {
                    textDecoration: {
                      line: TextDecorationLine.Underline,
                    },
                  },
                }}
                textDecoration={{
                  line: TextDecorationLine.None,
                }}
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
            alignment={{
              horizontal: AlignHorizontal.Center,
            }}
            margin={{ left: -2 }}
            textSize={TextSize.Default}
          >
            {where}
          </Label>
        )}

        <Label margin={{ left: 3 }}>on</Label>

        {when && (
          <DateLabel
            format={dateFormat}
            margin={{ left: 3 }}
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
                  background={{
                    color: BackgroundColors.Lighter,
                  }}
                  borderRadius={{ all: Amount.Default }}
                  margin={{
                    bottom: 5,
                    top: 5,
                  }}
                  // marginLeft={convertSizeToAmount(Size.Default)}

                  size={{
                    height: 12,
                    width: 5,
                  }}
                  style={{
                    transform: 'translateX(-2px)',
                  }}
                />
              )}

              <ActivityFeedItem {...activity} />
            </Container>
          );
        })}

        <Container
          alignment={{
            horizontal: AlignHorizontal.Center,
            vertical: AlignVertical.Center,
          }}
          border={{
            top: {
              color: BorderColors.Light,
              style: BorderStyle.Solid,
              width: 1,
            },
          }}
          margin={{ top: Amount.Default }}
          padding={{
            bottom: Amount.None,
            left: Amount.Default,
            right: Amount.Default,
            top: Amount.Default,
          }}
        >
          <Button
            type={ButtonType.Primary}
            // size={Size.Small}
          >
            Load more
          </Button>
        </Container>
      </Container>
    );
  },
);
