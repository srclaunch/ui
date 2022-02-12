import { Video as VideoType } from '@srclaunch/types';
import { memo, ReactElement } from 'react';
import styled from 'styled-components';

import { DimensionStyles } from '../../styles/appearance/dimension';
import { HeightProps, WidthProps } from '../../types';
import { Container } from '../layout/Container';

export type VideoProps = {
  readonly className?: string;
  readonly description?: string;
} & HeightProps &
  VideoType &
  WidthProps;

export const Video = memo(
  ({
    className = '',
    height = '100%',
    url,
    width = '100%',
    ...props
  }: VideoProps): ReactElement => {
    return (
      <Container className={`${className} video`} {...props}>
        <VideoElement height={height} src={url} width={width} {...props} />
      </Container>
    );
  },
);

const VideoElement = styled.video`
  ${DimensionStyles};
`;
