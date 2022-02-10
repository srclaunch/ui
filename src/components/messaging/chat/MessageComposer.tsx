import { ReactElement, memo } from 'react';
import { Container } from '../../layout/Container';
import {
  Align,
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  ContainerProps,
} from '../../../types';
import { Button, ButtonType } from '../../forms/buttons/Button';
import { Label } from '../../..';

type MessageComposerProps = ContainerProps;

export const MessageComposer = memo(
  ({ ...props }: MessageComposerProps): ReactElement => {
    return (
      <Container backgroundColor={BackgroundColors.Default} {...props}>
        <Container
          alignContent={Align.Center}
          border={{
            bottom: {
              color: BorderColors.Dark,
              style: BorderStyle.Solid,
              width: 1,
            },
          }}
          grow={false}
          padding={Amount.More}
        >
          <Label>Title</Label>
        </Container>
        <Container
          alignContent={Align.Center}
          border={{
            bottom: {
              color: BorderColors.Dark,
              style: BorderStyle.Solid,
              width: 1,
            },
          }}
          grow={false}
          padding={Amount.More}
        >
          <Label>Recipients</Label>
        </Container>
        <Container
          alignContent={Align.Center}
          border={{
            bottom: {
              color: BorderColors.Dark,
              style: BorderStyle.Solid,
              width: 1,
            },
          }}
          grow={false}
          padding={Amount.More}
        >
          <Label>Subject</Label>
        </Container>

        <Container
          alignItems={Align.Top}
          alignContent={Align.Top}
          padding={Amount.More}
        >
          <Label grow={false}>Message</Label>
        </Container>

        <Container
          alignItems={Align.Left}
          alignContent={Align.Top}
          grow={false}
          padding={Amount.More}
        >
          <Button grow={false} type={ButtonType.Primary}>
            Send
          </Button>
        </Container>
      </Container>
    );
  },
);
