import { memo, ReactElement } from 'react';
import { DualLightIcons } from '@srclaunch/icons';

import {
  Amount,
  DataGrid,
  DropdownInput,
  Icon,
  NavigationLink,
  Paragraph,
  TextColors,
  TextDecorationLine,
  TextSize,
  TextWeight,
  Title,
  Workspace,
} from '../../../../../index';

import { Documentation } from '../../../../layouts/Documentation';

export const DropdownInputPage = memo((): ReactElement => {
  return (
    <Workspace
      header={{
        title: (
          <>
            <NavigationLink
              to="/forms"
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
                Forms
              </Title>
            </NavigationLink>

            <Icon
              name={DualLightIcons.ChevronDoubleForward}
              margin={{ left: Amount.Less, right: Amount.Less }}
              // size={Size.Smaller}
            />

            <NavigationLink
              to="/forms/inputs"
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
                Inputs
              </Title>
            </NavigationLink>

            <Icon
              name={DualLightIcons.ChevronDoubleForward}
              margin={{ left: Amount.Less, right: Amount.Less }}
              // size={Size.Smaller}
            />

            <NavigationLink
              to="/forms/inputs"
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
                Menu
              </Title>
            </NavigationLink>

            <Icon
              name={DualLightIcons.ChevronDoubleForward}
              margin={{ left: Amount.Less, right: Amount.Less }}
              // size={Size.Smaller}
            />

            <Title textSize={TextSize.Larger} textWeight={TextWeight.Most}>
              DropdownInput
            </Title>
          </>
        ),
      }}
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
