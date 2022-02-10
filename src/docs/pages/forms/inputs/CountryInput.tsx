import { memo, ReactElement } from 'react';
import { Primitives } from '@srclaunch/types';

import { Align, Amount } from '../../../../types';
import { DataGrid } from '../../../../components/data/DataGrid/index';
import { Workspace } from '../../../../components/containers/Workspace';

import { Documentation } from '../../../layouts/Documentation';
import { SubTitle } from '../../../../components/typography/SubTitle';
import { Paragraph } from '../../../../components/typography/Paragraph';
import { CountryInput } from '../../../../components/forms/inputs/locale/CountryInput';

export const CountryInputPage = memo((): ReactElement => {
  return (
    <Workspace
      header={{ title: 'CountryInput' }}
      layout={Documentation}
      title="CountryInput"
    >
      <Paragraph marginBottom={Amount.Most}>
        The <b>CountryInput</b> component is used to select a country from a
        list of countries.
      </Paragraph>

      <CountryInput onChange={() => {}} width={260} />
    </Workspace>
  );
});
