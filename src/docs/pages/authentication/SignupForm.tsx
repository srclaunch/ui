import { DualLightIcons } from '@srclaunch/icons';
import { memo, ReactElement } from 'react';
import { SignupForm } from '../../../components/authentication/SignupForm';

import {
  Amount,
  BackgroundColors,
  Container,
  Depth,
  Icon,
  InputRow,
  MenuButton,
  NavigationLink,
  Size,
  TextColors,
  TextDecorationLine,
  TextSize,
  TextWeight,
  Title,
  Workspace,
} from '../../../index';
import { Documentation } from '../../layouts/Documentation';

export const SignupFormPage = memo((): ReactElement => {
  return (
    <Workspace
      header={{
        title: (
          <>
            <NavigationLink
              to="/authentication"
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
                Authentication
              </Title>
            </NavigationLink>

            <Icon
              name={DualLightIcons.ChevronDoubleForward}
              margin={{ left: Amount.Less, right: Amount.Less }}
              // size={Size.Smaller}
            />

            <Title textSize={TextSize.Larger} textWeight={TextWeight.Most}>
              Signup Form
            </Title>
          </>
        ),
      }}
      layout={Documentation}
      padding={{ all: Amount.Most }}
      title="SignupForm"
    >
      <InputRow>
        <SignupForm />
      </InputRow>
    </Workspace>
  );
});
