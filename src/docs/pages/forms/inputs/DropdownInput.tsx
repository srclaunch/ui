import { memo, ReactElement } from 'react';
import { Primitives } from '@srclaunch/types';

import { Align, Amount } from '../../../../types';
import { DataGrid } from '../../../../components/data/DataGrid/index';
import { Workspace } from '../../../../components/containers/Workspace';

import { Documentation } from '../../../layouts/Documentation';
import { SubTitle } from '../../../../components/typography/SubTitle';
import { Paragraph } from '../../../../components/typography/Paragraph';
import { DropdownInput } from '../../../../components/forms/inputs/menu/DropdownInput';

export const DropdownInputPage = memo((): ReactElement => {
  return (
    <Workspace
      header={{ title: 'DropdownInput' }}
      layout={Documentation}
      title="DropdownInput"
    >
      <Paragraph marginBottom={Amount.Most}>
        The <b>DropdownInput</b> component is used to display a dropdown menu.
      </Paragraph>

      <DropdownInput
        menu={[
          {
            label: 'Item 1',
            value: 'item1',
          },
          {
            label: 'Item 2',
            value: 'item2',
          },
          {
            label: 'Item 3',
            value: 'item3',
          },
        ]}
        placeholder="Choose an item"
        width={200}
      />

      <br />
      <br />
      <br />
      <DropdownInput
        menu={[
          {
            label: 'Item 1',
            value: 'item1',
          },
          {
            label: 'Item 2',
            value: 'item2',
          },
          {
            label: 'Item 3',
            value: 'item3',
          },
        ]}
        placeholder="Choose an item"
        width={200}
      />
    </Workspace>
  );
});
