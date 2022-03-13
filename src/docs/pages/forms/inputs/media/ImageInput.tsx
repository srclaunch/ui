import { memo, ReactElement } from 'react';

import { Amount, ImageInput, Paragraph, Workspace } from '../../../../../index';
import { Documentation } from '../../../../layouts/Documentation';

export const ImageInputPage = memo((): ReactElement => {
  return (
    <Workspace
      header={{ title: 'ImageInput' }}
      layout={Documentation}
      title="ImageInput"
    >
      <Paragraph margin={{ bottom: Amount.Most }}>
        The <b>ImageInput</b> component allows a user to select an image from
        their computer to upload.
      </Paragraph>

      <ImageInput onChange={() => {}} size={{ width: 260 }} />
    </Workspace>
  );
});
