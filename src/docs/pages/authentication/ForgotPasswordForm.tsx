import { DualLightIcons } from '@srclaunch/icons';
import { memo, ReactElement } from 'react';
import { ForgotPasswordForm } from '../../../components/authentication/ForgotPasswordForm';

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
  TextSize,
  TextWeight,
  Title,
  Workspace,
} from '../../../index';
import { TextDecorationLine } from '../../../types';
import { Documentation } from '../../layouts/Documentation';

export const ForgotPasswordFormPage = memo((): ReactElement => {
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
              Forgot Password Form
            </Title>
          </>
        ),
      }}
      layout={Documentation}
      padding={{ all: Amount.Most }}
      title="ForgotPasswordForm"
    >
      <InputRow>
        <ForgotPasswordForm />
      </InputRow>
    </Workspace>
  );
});
