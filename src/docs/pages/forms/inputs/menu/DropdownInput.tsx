import { Primitives } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import {
  Amount,
  DataGrid,
  DropdownInput,
  Paragraph,
  Workspace,
} from '../../../../../index';

import { Documentation } from '../../../../layouts/Documentation';

export const DropdownInputPage = memo((): ReactElement => {
  return (
    <Workspace
      header={{ title: 'DropdownInput' }}
      layout={Documentation}
      title="DropdownInput"
    >
      <Paragraph margin={{ bottom: Amount.Most }}>
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
        size={{ width: 200 }}
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
        size={{ width: 200 }}
      />
    </Workspace>
  );
});
