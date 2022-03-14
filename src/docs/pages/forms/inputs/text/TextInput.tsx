import { Condition } from '@srclaunch/types';
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

      <InputRow>
        <InputLabel>Required</InputLabel>
        <TextInput
          onChange={() => {}}
          validation={{ [Condition.IsRequired]: true }}
        />
      </InputRow>
    </Workspace>
  );
});
