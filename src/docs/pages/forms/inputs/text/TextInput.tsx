import { memo, ReactElement } from 'react';

import {
  InputLabel,
  InputRow,
  TextInput,
  Workspace,
} from '../../../../../index';
import { Documentation } from '../../../../layouts/Documentation';

export const TextInputPage = memo((): ReactElement => {
  return (
    <Workspace
      header={{
        title: 'TextInput',
      }}
      layout={Documentation}
      title="TextInput"
    >
      <InputRow>
        <InputLabel>Example</InputLabel>
        <TextInput onChange={() => {}} />
      </InputRow>
    </Workspace>
  );
});
