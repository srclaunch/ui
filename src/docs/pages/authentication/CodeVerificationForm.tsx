import { DualLightIcons } from '@srclaunch/icons';
import { memo, ReactElement } from 'react';
import { CodeVerificationForm } from '../../../components/authentication/CodeVerificationForm';

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

export const CodeVerificationFormPage = memo((): ReactElement => {
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
              Code Verification Form
            </Title>
          </>
        ),
      }}
      layout={Documentation}
      padding={{ all: Amount.Most }}
      title="CodeVerificationFormPage"
    >
      <InputRow>
        {/* <CodeVerificationForm /> */}
        Placeholder text, was getting error: line 63 Property 'userId' is
        missing in type curlybracket but required in type '
      </InputRow>
    </Workspace>
  );
});
