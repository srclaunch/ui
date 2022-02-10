import { memo, ReactElement } from 'react';
import { Amount, BackgroundColors, Depth } from '../../../../index';
import { Documentation } from '../../../layouts/Documentation';
import { Workspace } from '../../../../components/containers/Workspace';
import { InputRow } from '../../../../components/forms/layout/InputRow';
import { InputLabel } from '../../../../components/forms/labels/InputLabel';
import { TextInput } from '../../../../components/forms/inputs/text/TextInput';

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
