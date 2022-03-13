import { memo, ReactElement } from 'react';

import {
  AlignHorizontal,
  AlignVertical,
  Page,
  Paragraph,
  Title,
} from '../../index';
// import { PageRole } from '@srclaunch/types';
// import NotAuthenticated from '../layouts/NotAuthenticated';
// import styled from 'styled-components';
import { Documentation } from '../layouts/Documentation';

export const PageNotFound = memo((): ReactElement => {
  return (
    <Page
      alignment={{
        horizontal: AlignHorizontal.Center,
        vertical: AlignVertical.Center,
      }}
      layout={Documentation}
      title="AppLab - Page not found"
    >
      <Title>Page Not Found</Title>
      <Paragraph>We couldn't find the page you're looking for. </Paragraph>
    </Page>
  );
});

// const Container = styled.div`
//   background: white;
//   flex: 1;

//   p {
//     color: #858a8f;
//     font-weight: 500;
//     font-size: 14px;
//     margin: 15px 0 35px 0;
//     line-height: 28px;
//     text-align: center;
//   }
// `;

// const ResponsiveContainer = styled.div``;
