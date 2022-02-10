import { memo, ReactElement } from 'react';
import { Primitives } from '@srclaunch/types';

import { Align, Amount } from '../../../types';
import { DataGrid } from '../../../components/data/DataGrid/index';
import { Workspace } from '../../../components/containers/Workspace';

import { Documentation } from '../../layouts/Documentation';
import { SubTitle } from '../../../components/typography/SubTitle';
import { Paragraph } from '../../../components/typography/Paragraph';

export const DataGridPage = memo((): ReactElement => {
  return (
    <Workspace
      header={{ title: 'DataGrid' }}
      layout={Documentation}
      title="DataGrid"
    >
      <Paragraph marginBottom={Amount.Most}>
        The <b>DataGrid</b> component is used to display tabular data.
      </Paragraph>

      <SubTitle>DataGrid with headers</SubTitle>

      <DataGrid
        columns={[
          {
            field: 'date',
            label: 'Date',
            type: Primitives.Date,
            width: 150,
          },
          {
            field: 'name',
            label: 'Name',
            type: Primitives.String,
            width: 150,
          },
          {
            field: 'description',
            label: 'Description',
            type: Primitives.LongText,
            minWidth: 300,
          },
        ]}
        data={[
          {
            date: new Date().toISOString(),
            name: 'Testing 123',
            description: `Lorem ispum dolor sit amet, consectetur adipiscing elit. \
            Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus \
            accumsan et viverra justo commodo.`,
          },
          {
            date: new Date().toISOString(),
            name: 'Testing 456',
            description: `Lorem ispum dolor sit amet, consectetur adipiscing elit. \
            Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus \
            accumsan et viverra justo commodo.`,
          },
        ]}
        marginBottom={Amount.Most}
      />

      <SubTitle>DataGrid with headers</SubTitle>

      <DataGrid
        columns={[
          {
            field: 'date',
            label: 'Date',
            type: Primitives.Date,
            width: 150,
          },
          {
            field: 'name',
            label: 'Name',
            type: Primitives.String,
            width: 150,
          },
          {
            field: 'description',
            label: 'Description',
            type: Primitives.LongText,
            minWidth: 300,
          },
        ]}
        data={[
          {
            date: new Date().toISOString(),
            name: 'Testing 123',
            description: `Lorem ispum dolor sit amet, consectetur adipiscing elit. \
            Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus \
            accumsan et viverra justo commodo.`,
          },
          {
            date: new Date().toISOString(),
            name: 'Testing 456',
            description: `Lorem ispum dolor sit amet, consectetur adipiscing elit. \
            Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus \
            accumsan et viverra justo commodo.`,
          },
        ]}
        header={{
          search: {
            placeholder: 'Search',
            width: 200,
          },
        }}
        marginBottom={Amount.Most}
      />

      <SubTitle>DataGrid with multiple columns</SubTitle>

      <DataGrid
        columns={[
          {
            align: Align.Center,
            field: 'date',
            label: 'Date',
            type: Primitives.Date,
            width: 150,
          },
          {
            field: 'name',
            label: 'Name',
            type: Primitives.String,
            width: 150,
          },
          {
            field: 'description',
            label: 'Description',
            type: Primitives.LongText,
            minWidth: 300,
          },
          {
            field: 'name',
            label: 'Name',
            type: Primitives.String,
            width: 150,
          },
          {
            field: 'description',
            label: 'Description',
            type: Primitives.LongText,
            minWidth: 300,
          },
          {
            field: 'name',
            label: 'Name',
            type: Primitives.String,
            width: 150,
          },
          {
            field: 'description',
            label: 'Description',
            type: Primitives.LongText,
            minWidth: 300,
          },
        ]}
        data={[
          {
            date: new Date().toISOString(),
            name: 'Testing 123',
            description: `Lorem ispum dolor sit amet, consectetur adipiscing elit. \
            Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus \
            accumsan et viverra justo commodo.`,
          },
          {
            date: new Date().toISOString(),
            name: 'Testing 456',
            description: `Lorem ispum dolor sit amet, consectetur adipiscing elit. \
            Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus \
            accumsan et viverra justo commodo.`,
          },
        ]}
        header={{
          export: {
            width: 180,
          },
          search: {
            placeholder: 'Search',
            width: 200,
          },
        }}
        marginBottom={Amount.Most}
      />
    </Workspace>
  );
});

// const Container = styled.div`
//   background: rgba(248, 249, 251, 1);
//   padding: 76px 15px 150px 15px;
//   bottom: 0;
//   left: 0;
//   overflow: hidden;
//   overflow-y: scroll;
//   position: fixed;
//   right: 0;
//   top: 0;
//   width: 100%;
//   z-index: 301;

//   .page-title {
//     padding: 0 5px;
//   }

//   @media (min-width: 992px) {
//     bottom: 0;
//     left: 270px;
//     overflow: hidden;
//     overflow-y: scroll !important;
//     padding: 95px 25px 25px 25px;
//     position: fixed;
//     right: 0;
//     top: 0;
//     transform: none;
//     width: calc(100% - 270px);
//   }
// `;

// const Grid = styled.div`
//   position: relative;
//   width: 100%;

//   .item {
//     display: block;
//     margin: 0 0 15px 0;
//     position: absolute;
//     touch-action: manipulation !important;
//     width: 100%;
//     z-index: 1;

//     &.card-dragging {
//       box-shadow: 0 10px 35px -5px rgba(0, 0, 0, 0.2) !important;
//       cursor: move;
//       pointer-events: none;
//       z-index: 3;
//     }

//     &.card-releasing {
//       z-index: 2;
//     }
//   }

//   @media (min-width: 480px) {
//     width: calc(100% + 10px);

//     .item {
//       margin: 0 15px 15px 0;
//       width: calc(100% / 2 - 15px);
//     }
//   }

//   @media (min-width: 768px) {
//     .item {
//       width: calc(100% / 2 - 15px);
//     }
//   }

//   @media (min-width: 992px) {
//     .item {
//       width: calc(100% / 2 - 15px);
//     }
//   }

//   @media (min-width: 1200px) {
//     .item {
//       width: calc(100% / 3 - 15px);
//     }
//   }
// `;
