import { memo, ReactElement } from 'react';
import { Primitives } from '@srclaunch/types';

import { Align, Amount } from '../../../../types';
import { DataGrid } from '../../../../components/data/DataGrid/index';
import { Workspace } from '../../../../components/containers/Workspace';

import { Documentation } from '../../../layouts/Documentation';
import { SubTitle } from '../../../../components/typography/SubTitle';
import { Paragraph } from '../../../../components/typography/Paragraph';
import { ImageInput } from '../../../../components/forms/inputs/media/ImageInput';

export const ImageInputPage = memo((): ReactElement => {
  return (
    <Workspace
      header={{ title: 'ImageInput' }}
      layout={Documentation}
      title="ImageInput"
    >
      <Paragraph marginBottom={Amount.Most}>
        The <b>ImageInput</b> component allows a user to select an image from
        their computer to upload.
      </Paragraph>

      <ImageInput onChange={() => {}} width={260} />
    </Workspace>
  );
});
