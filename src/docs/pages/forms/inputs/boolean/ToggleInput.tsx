import { memo, ReactElement } from 'react';

import { Workspace } from '../../../../../components/containers/Workspace';
import { ToggleInput } from '../../../../../components/forms/inputs/boolean/ToggleInput';
import { InputLabel } from '../../../../../components/forms/labels/InputLabel';
import { InputRow } from '../../../../../components/forms/layout/InputRow';
import { Container } from '../../../../../components/layout/Container';
import { Amount, BackgroundColors } from '../../../../../types';
import { Documentation } from '../../../../layouts/Documentation';

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
