import { ReactElement, memo } from 'react';
import { ChatMessage } from '@srclaunch/types';
import {
  Align,
  Amount,
  BackgroundColors,
  ContainerProps,
  Orientation,
  Size,
  TextColors,
  TextSize,
  TextWeight,
} from '../../../types';
import { Container } from '../../../components/layout/Container';
import { Text } from '../../../components/typography/Text';
import { Title } from '../../../components/typography/Title';
import { Paragraph } from '../../../components/typography/Paragraph';
import { Image } from '../../../components/media/Image';
import { DateLabel } from '../../data/labels/dates/DateLabel';
import { Label } from '../../..';

type MessagePreviewProps = ContainerProps<HTMLDivElement, ChatMessage>;

export const MessagePreview = memo(
  ({
    backgroundColor = BackgroundColors.Light,
    body,
    borderRadius = Amount.Least,
    className = '',
    date,
    subject,
    sender,
    ...props
  }: MessagePreviewProps): ReactElement => {
    return (
      <Container
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        className={`${className} message-preview`}
        grow={true}
        orientation={Orientation.Vertical}
        padding={Amount.Default}
        paddingLeft={Amount.More}
        paddingRight={Amount.More}
        {...props}
      >
        <Container
          alignItems={Align.Top}
          grow={true}
          orientation={Orientation.Horizontal}
          // marginTop={Amount.Less}
        >
          <Image
            borderRadius={Amount.All}
            marginRight={Amount.More}
            url="http://localhost:3000/public/assets/images/placeholders/people/person1.png"
            size={Size.Default}
          />

          <Label
            alignItems={Align.Left}
            grow={true}
            lineHeight={Amount.Default}
            marginBottom={Amount.None}
            textColor={TextColors.Light}
            textSize={TextSize.Small}
            textWeight={TextWeight.Default}
          >
            Samanatha Baskin
          </Label>

          <DateLabel
            alignContent={Align.Right}
            grow={false}
            lineHeight={Amount.Default}
            value={date}
            textColor={TextColors.Lighter}
            textSize={TextSize.Smaller}
          />
        </Container>

        <Container grow={false} orientation={Orientation.Horizontal}>
          <Container
            borderRadius={Amount.All}
            marginRight={Amount.More}
            size={Size.Default}
          />

          <Container
            alignContent={Align.Top}
            alignItems={Align.Left}
            orientation={Orientation.Vertical}
          >
            <Title
              alignItems={Align.Left}
              grow={true}
              lineHeight={Amount.Less}
              marginTop={Amount.None}
              marginBottom={Amount.Less}
              textSize={TextSize.Large}
              textWeight={TextWeight.More}
            >
              {subject}
            </Title>

            <Paragraph marginBottom={Amount.None}>{body}</Paragraph>
          </Container>
        </Container>
      </Container>
    );
  },
);
