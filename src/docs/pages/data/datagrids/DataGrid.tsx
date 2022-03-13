import { DualLightIcons } from '@srclaunch/icons';
import { memo, ReactElement } from 'react';
import { Primitives } from '@srclaunch/types';
import { SubTitle } from '../../../../components/typography/SubTitle';
import { Paragraph } from '../../../../components/typography/Paragraph';
import { DataGrid } from '../../../../components/data/DataGrid/index';

import {
  Amount,
  Icon,
  NavigationLink,
  TextColors,
  TextDecorationLine,
  TextSize,
  TextWeight,
  Title,
  Workspace,
} from '../../../../index';
import { Documentation } from '../../../layouts/Documentation';
import { AlignHorizontal } from '../../../../types';

export const DataGridPage = memo((): ReactElement => {
  return (
    <Workspace
      header={{
        title: (
          <>
            <NavigationLink
              to="/data"
              hover={{
                textDecoration: {
                  line: TextDecorationLine.Underline,
                },
              }}
              textDecoration={{
                line: TextDecorationLine.None,
              }}
            >
              <Title
                textColor={TextColors.Primary}
                textSize={TextSize.Larger}
                textWeight={TextWeight.Most}
              >
                Data
              </Title>
            </NavigationLink>

            <Icon
              name={DualLightIcons.ChevronDoubleForward}
              margin={{ left: Amount.Less, right: Amount.Less }}
              // size={Size.Smaller}
            />

            <NavigationLink
              to="/data/datagrids"
              hover={{
                textDecoration: {
                  line: TextDecorationLine.Underline,
                },
              }}
              textDecoration={{
                line: TextDecorationLine.None,
              }}
            >
              <Title
                textColor={TextColors.Primary}
                textSize={TextSize.Larger}
                textWeight={TextWeight.Most}
              >
                Data Grids
              </Title>
            </NavigationLink>

            <Icon
              name={DualLightIcons.ChevronDoubleForward}
              margin={{ left: Amount.Less, right: Amount.Less }}
              // size={Size.Smaller}
            />

            <Title textSize={TextSize.Larger} textWeight={TextWeight.Most}>
              Data Grid
            </Title>
          </>
        ),
      }}
      layout={Documentation}
      padding={{ all: Amount.Most }}
      title="DataGrid"
    >
      <Paragraph margin={{ bottom: Amount.Most }}>
        The <b>DataGrid</b> component is used to display tabular data.
      </Paragraph>

      <SubTitle>DataGrid with headers</SubTitle>

      <DataGrid
        columns={[
          {
            field: 'date',
            label: 'Date',
            type: Primitives.Date,
            size: {
              width: 150,
            },
          },
          {
            field: 'name',
            label: 'Name',
            type: Primitives.String,
            size: {
              width: 150,
            },
          },
          {
            field: 'description',
            label: 'Description',
            type: Primitives.LongText,
            size: {
              minWidth: 350,
            },
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
        margin={{ bottom: Amount.Most }}
      />

      <SubTitle>DataGrid with headers</SubTitle>

      <DataGrid
        columns={[
          {
            field: 'date',
            label: 'Date',
            type: Primitives.Date,
            size: { width: 150 },
          },
          {
            field: 'name',
            label: 'Name',
            type: Primitives.String,
            size: { width: 150 },
          },
          {
            field: 'description',
            label: 'Description',
            type: Primitives.LongText,
            size: { minWidth: 300 },
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
            size: { width: 200 },
          },
        }}
        margin={{ bottom: Amount.Most }}
      />

      <SubTitle>DataGrid with multiple columns</SubTitle>

      <DataGrid
        columns={[
          {
            align: AlignHorizontal.Center,
            field: 'date',
            label: 'Date',
            type: Primitives.Date,
            size: { width: 150 },
          },
          {
            field: 'name',
            label: 'Name',
            type: Primitives.String,
            size: { width: 150 },
          },
          {
            field: 'description',
            label: 'Description',
            type: Primitives.LongText,
            size: { minWidth: 300 },
          },
          {
            field: 'name',
            label: 'Name',
            type: Primitives.String,
            size: { width: 150 },
          },
          {
            field: 'description',
            label: 'Description',
            type: Primitives.LongText,
            size: { minWidth: 300 },
          },
          {
            field: 'name',
            label: 'Name',
            type: Primitives.String,
            size: { width: 150 },
          },
          {
            field: 'description',
            label: 'Description',
            type: Primitives.LongText,
            size: { minWidth: 300 },
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
            size: { width: 180 },
          },
          search: {
            placeholder: 'Search',
            size: { width: 200 },
          },
        }}
        margin={{ bottom: Amount.Most }}
      />
    </Workspace>
  );
});
