import { memo, useState, ReactElement } from 'react';
import { DualLightIcons } from '@srclaunch/icons';

import {
  Amount,
  BackgroundColors,
  Button,
  Container,
  Depth,
  Heading,
  LoadingOverlay,
  Icon,
  InputRow,
  NavigationLink,
  TextColors,
  TextDecorationLine,
  TextSize,
  TextWeight,
  Title,
  Workspace,
} from '../../../index';
import { Documentation } from '../../layouts/Documentation';
import { ButtonType } from '../../../types';

export const LoadingOverlayPage = memo((): ReactElement => {
  const [visible, setVisible] = useState(false);

  return (
    <Workspace
      header={{
        title: (
          <>
            <NavigationLink
              to="/charts"
              hover={{
                textDecoration: {
                  line: TextDecorationLine.Underline,
                },
              }}
              textDecoration={{
                line: TextDecorationLine.None,
              }}
            >
              <Title
                textColor={TextColors.Primary}
                textSize={TextSize.Larger}
                textWeight={TextWeight.Most}
              >
                Progress
              </Title>
            </NavigationLink>

            <Icon
              name={DualLightIcons.ChevronDoubleForward}
              margin={{ left: Amount.Less, right: Amount.Less }}
              // size={Size.Smaller}
            />

            <Title textSize={TextSize.Larger} textWeight={TextWeight.Most}>
              &lt;LoadingOverlay /&gt;
            </Title>
          </>
        ),
      }}
      layout={Documentation}
      padding={{ all: Amount.Most }}
      title="LoadingOverlay"
    >
      <Container
        background={{ color: BackgroundColors.Lightest }}
        borderRadius={{ all: Amount.Least }}
        depth={Depth.High}
        padding={{ all: Amount.Most }}
      >
        <Heading>&lt;LoadingOverlay /&gt;</Heading>

        <Button type={ButtonType.Default} onClick={() => setVisible(!visible)}>
          Toggle Overlay
        </Button>

        <Container
          size={{
            height: 500,
            width: 500,
          }}
        >
          <LoadingOverlay visible={visible} />
        </Container>
      </Container>
    </Workspace>
  );
});
