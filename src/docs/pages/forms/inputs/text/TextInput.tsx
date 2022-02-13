import { memo, ReactElement } from 'react';

import { Workspace } from '../../../../../components/containers/Workspace';
import { TextInput } from '../../../../../components/forms/inputs/text/TextInput';
import { InputLabel } from '../../../../../components/forms/labels/InputLabel';
import { InputRow } from '../../../../../components/forms/layout/InputRow';
import { Amount, BackgroundColors, Depth } from '../../../../../index';
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
