import { memo, ReactElement } from 'react';

import {
  Amount,
  BackgroundColors,
  Container,
  InputLabel,
  InputRow,
  ToggleInput,
  Workspace,
} from '../../../../../index';

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
        background={{ color: BackgroundColors.Lightest }}
        borderRadius={{ all: Amount.More }}
        padding={{ all: Amount.Most }}
      >
        <InputRow>
          <InputLabel>Example</InputLabel>
          <ToggleInput onChange={() => {}} />
        </InputRow>
      </Container>
    </Workspace>
  );
});
