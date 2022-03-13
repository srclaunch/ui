import { Video as VideoType } from '@srclaunch/types';
import { memo, ReactElement } from 'react';
import styled from 'styled-components';

import { Container, ContainerProps } from '../layout/Container';

export type VideoProps = {
  readonly className?: string;
  readonly description?: string;
} & VideoType &
  ContainerProps;

export const Video = memo(
  ({
    className = '',
    // height = '100%',
    url,
    // width = '100%',
    ...props
  }: VideoProps): ReactElement => {
    return (
      <Container className={`${className} video`} {...props}>
        <VideoElement src={url} {...props} />
      </Container>
    );
  },
);

const VideoElement = styled.video``;
