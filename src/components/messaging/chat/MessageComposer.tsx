import { ReactElement, memo } from 'react';
import { Container, ContainerProps } from '../../layout/Container';
import {
  AlignHorizontal,
  AlignVertical,
  Alignment,
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
} from '../../../types';
import { Button, ButtonType } from '../../forms/buttons/Button';
import { Label } from '../../..';

type MessageComposerProps = ContainerProps;

export const MessageComposer = memo(
  ({ ...props }: MessageComposerProps): ReactElement => {
    return (
      <Container background={{ color: BackgroundColors.Default }} {...props}>
        <Container
          alignment={{
            horizontal: AlignHorizontal.Center,
          }}
          border={{
            bottom: {
              color: BorderColors.Dark,
              style: BorderStyle.Solid,
              width: 1,
            },
          }}
          padding={{ all: Amount.More }}
        >
          <Label>Title</Label>
        </Container>
        <Container
          alignment={{
            horizontal: AlignHorizontal.Center,
          }}
          border={{
            bottom: {
              color: BorderColors.Dark,
              style: BorderStyle.Solid,
              width: 1,
            },
          }}
          padding={{ all: Amount.More }}
        >
          <Label>Recipients</Label>
        </Container>
        <Container
          alignment={{
            horizontal: AlignHorizontal.Center,
          }}
          border={{
            bottom: {
              color: BorderColors.Dark,
              style: BorderStyle.Solid,
              width: 1,
            },
          }}
          padding={{ all: Amount.More }}
        >
          <Label>Subject</Label>
        </Container>

        <Container
          alignment={{
            horizontal: AlignHorizontal.Left,
            vertical: AlignVertical.Bottom,
          }}
          padding={{ all: Amount.More }}
        >
          <Label>Message</Label>
        </Container>

        <Container
          alignment={{
            horizontal: AlignHorizontal.Left,
            vertical: AlignVertical.Bottom,
          }}
          padding={{ all: Amount.More }}
        >
          <Button type={ButtonType.Primary}>Send</Button>
        </Container>
      </Container>
    );
  },
);
