import { Primitives } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import { Workspace } from '../../../../../components/containers/Workspace';
import { DataGrid } from '../../../../../components/data/DataGrid/index';
import { CountryInput } from '../../../../../components/forms/inputs/locale/CountryInput';
import { Paragraph } from '../../../../../components/typography/Paragraph';
import { SubTitle } from '../../../../../components/typography/SubTitle';
import { Align, Amount } from '../../../../../types';
import { Documentation } from '../../../../layouts/Documentation';

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
