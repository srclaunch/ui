import { memo, ReactElement } from 'react';
import { Amount, BackgroundColors, Depth } from '../../../../types';
import { Documentation } from '../../../layouts/Documentation';
import { Workspace } from '../../../../components/containers/Workspace';
import { LongTextInput } from '../../../../components/forms/inputs/text/LongTextInput';
import { Container } from '../../../../components/layout/Container';
import { InputLabel } from '../../../../components/forms/labels/InputLabel';
import { InputRow } from '../../../../components/forms/layout/InputRow';

export const LongTextInputPage = memo((): ReactElement => {
  return (
    <Workspace
      header={{
        title: 'LongTextInput',
      }}
      layout={Documentation}
      title="LongTextInput"
    >
      <Container
        backgroundColor={BackgroundColors.Lightest}
        borderRadius={Amount.More}
        grow={false}
        padding={Amount.Most}
      >
        <InputRow>
          <InputLabel>Example</InputLabel>
          <LongTextInput />
        </InputRow>
      </Container>
    </Workspace>
  );
});
