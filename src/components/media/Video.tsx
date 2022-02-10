import { memo, ReactElement } from 'react';
import styled from 'styled-components';
import { Container } from '../layout/Container';
import { Video as VideoType } from '@srclaunch/types';
import { DimensionProps } from '../../types';
import { DimensionStyles } from '../../styles/appearance/dimension';

type VideoProps = DimensionProps<
  {
    className?: string;
    description?: string;
  } & VideoType
>;

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
