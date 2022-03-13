import { Primitives } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import {
  Amount,
  CountryInput,
  Paragraph,
  Workspace,
} from '../../../../../index';
import { Documentation } from '../../../../layouts/Documentation';

export const CountryInputPage = memo((): ReactElement => {
  return (
    <Workspace
      header={{ title: 'CountryInput' }}
      layout={Documentation}
      title="CountryInput"
    >
      <Paragraph margin={{ bottom: Amount.Most }}>
        The <b>CountryInput</b> component is used to select a country from a
        list of countries.
      </Paragraph>

      <CountryInput onChange={() => {}} size={{ width: 260 }} />
    </Workspace>
  );
});
