import { ChatMessage } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import { Container, ContainerProps } from '../../components/layout/Container';
import { Image } from '../../components/media/Image';
import { Label } from '../../components/typography/Label';
import { Paragraph } from '../../components/typography/Paragraph';
import { Title } from '../../components/typography/Title';
import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  Fill,
  Orientation,
  Sizes,
  TextColors,
  TextSize,
  TextWeight,
} from '../../types';
import { DateLabel } from '../data/labels/dates/DateLabel';
import { Spacer } from '../layout/Spacer';
import { Heading } from '../typography/Heading';

export type MessagePreviewProps = ContainerProps & ChatMessage;

export const MessagePreview = memo(
  ({
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
        alignment={{
          horizontal: AlignHorizontal.Stretch,
          vertical: AlignVertical.Top,
        }}
        borderRadius={{ all: Amount.Least, ...borderRadius }}
        className={`${className} message-preview`}
        padding={{
          bottom: Amount.Default,
          left: Amount.More,
          right: Amount.More,
          top: Amount.Default,
        }}
        size={{
          fill: Fill.Horizontal,
        }}
        {...props}
      >
        <Container
          alignment={{
            horizontal: AlignHorizontal.Stretch,
            orientation: Orientation.Horizontal,
            vertical: AlignVertical.Center,
          }}
          margin={{ bottom: Amount.Default }}

          // marginTop={Amount.Less}
        >
          {/* <Image
            borderRadius={{ all: Amount.All }}
            margin={{ right: Amount.More }}
            url="http://localhost:3000/public/assets/images/placeholders/people/person1.png"
            // size={Size.Default}
          /> */}

          <Heading
            lineHeight={Amount.Default}
            textColor={TextColors.Light}
            textSize={TextSize.Small}
            textWeight={TextWeight.Default}
          >
            Samanatha Baskin
          </Heading>

          <Spacer size={{ fill: Fill.Horizontal }} />

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
            alignment={{
              horizontal: AlignHorizontal.Left,
              vertical: AlignVertical.Top,
            }}
          >
            <Title
              lineHeight={Sizes.Default}
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
