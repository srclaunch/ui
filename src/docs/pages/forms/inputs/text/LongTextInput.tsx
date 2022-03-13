import { memo, ReactElement } from 'react';

import {
  Amount,
  BackgroundColors,
  Container,
  Depth,
  InputLabel,
  InputRow,
  LongTextInput,
  Workspace,
} from '../../../../../index';

import { Documentation } from '../../../../layouts/Documentation';

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
        background={{ color: BackgroundColors.Lightest }}
        borderRadius={{ all: Amount.More }}
        padding={{ all: Amount.Most }}
      >
        <InputRow>
          <InputLabel>Example</InputLabel>
          <LongTextInput />
        </InputRow>
      </Container>
    </Workspace>
  );
});
