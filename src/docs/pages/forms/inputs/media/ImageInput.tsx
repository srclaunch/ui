import { Primitives } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import { Workspace } from '../../../../../components/containers/Workspace';
import { DataGrid } from '../../../../../components/data/DataGrid/index';
import { ImageInput } from '../../../../../components/forms/inputs/media/ImageInput';
import { Paragraph } from '../../../../../components/typography/Paragraph';
import { SubTitle } from '../../../../../components/typography/SubTitle';
import { Align, Amount } from '../../../../../types';
import { Documentation } from '../../../../layouts/Documentation';

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
