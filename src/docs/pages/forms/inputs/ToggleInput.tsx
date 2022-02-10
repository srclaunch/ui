import { memo, ReactElement } from 'react';
import { Documentation } from '../../../layouts/Documentation';
import { Workspace } from '../../../../components/containers/Workspace';
import { Container } from '../../../../components/layout/Container';
import { InputRow } from '../../../../components/forms/layout/InputRow';
import { InputLabel } from '../../../../components/forms/labels/InputLabel';
import { ToggleInput } from '../../../../components/forms/inputs/boolean/ToggleInput';
import { Amount, BackgroundColors } from '../../../../types';

export const ToggleInputPage = memo((): ReactElement => {
  return (
    <Workspace
      header={{
        title: 'ToggleInput',
      }}
      layout={Documentation}
      title="ToggleInput"
    >
      <Container
        backgroundColor={BackgroundColors.Lightest}
        borderRadius={Amount.More}
        padding={Amount.More}
      >
        <InputRow>
          <InputLabel>Example</InputLabel>
          <ToggleInput onChange={() => {}} />
        </InputRow>
      </Container>
    </Workspace>
  );
});
