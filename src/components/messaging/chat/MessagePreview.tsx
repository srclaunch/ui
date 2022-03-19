import { ChatMessage } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import {
  Container,
  ContainerProps,
} from '../../../components/layout/Container';
import { Image } from '../../../components/media/Image';
import { Label } from '../../../components/typography/Label';
import { Paragraph } from '../../../components/typography/Paragraph';
import { Title } from '../../../components/typography/Title';
import {
  AlignHorizontal,
  Alignment,
  AlignVertical,
  Amount,
  BackgroundColors,
  Orientation,
  Size,
  TextColors,
  TextSize,
  TextWeight,
} from '../../../types';
import { DateLabel } from '../../data/labels/dates/DateLabel';

export type MessagePreviewProps = ContainerProps & ChatMessage;

export const MessagePreview = memo(
  ({
    background = {},
    body,
    borderRadius = {},
    className = '',
    date,
    subject,
    sender,
    ...props
  }: MessagePreviewProps): ReactElement => {
    return (
      <Container
        background={{ color: BackgroundColors.Light, ...background }}
        borderRadius={{ all: Amount.Least, ...borderRadius }}
        className={`${className} message-preview`}
        padding={{
          bottom: Amount.Default,
          left: Amount.More,
          right: Amount.More,
          top: Amount.Default,
        }}
        {...props}
      >
        <Container
          alignment={{
            orientation: Orientation.Horizontal,
            vertical: AlignVertical.Top,
          }}

          // marginTop={Amount.Less}
        >
          <Image
            borderRadius={{ all: Amount.All }}
            margin={{ right: Amount.More }}
            url="http://localhost:3000/public/assets/images/placeholders/people/person1.png"
            // size={Size.Default}
          />

          <Label
            lineHeight={Amount.Default}
            margin={{ bottom: Amount.None }}
            textColor={TextColors.Light}
            textSize={TextSize.Small}
            textWeight={TextWeight.Default}
          >
            Samanatha Baskin
          </Label>

          <DateLabel
            alignment={{
              horizontal: AlignHorizontal.Right,
            }}
            lineHeight={Amount.Default}
            value={date}
            textColor={TextColors.Lighter}
            textSize={TextSize.Smaller}
          />
        </Container>

        <Container
          alignment={{
            orientation: Orientation.Horizontal,
          }}
        >
          <Container
            borderRadius={{ all: Amount.All }}
            margin={{ right: Amount.More }}
            // size={Size.Default}
          />

          <Container
            alignment={{
              horizontal: AlignHorizontal.Left,
              vertical: AlignVertical.Top,
            }}
          >
            <Title
              lineHeight={Amount.Less}
              textSize={TextSize.Large}
              textWeight={TextWeight.More}
            >
              {subject}
            </Title>

            <Paragraph>{body}</Paragraph>
          </Container>
        </Container>
      </Container>
    );
  },
);
