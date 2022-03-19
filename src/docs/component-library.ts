import { Exception } from '@srclaunch/exceptions';
import {
  Amount,
  BreadcrumbNavigation,
  Button,
  ButtonType,
  ImageInput,
  InputLabel,
} from '../index';

import { ComponentLibrary } from './types/component';

export default {
  name: 'AppLab UI',
  description: 'A library of UI components for AppLab applications',
  components: [
    {
      title: 'Animation',
      path: '/animation',
    },
    {
      title: 'Authentication',
      path: '/authentication',
    },
    {
      title: 'Billing',
      path: '/billing',
    },
    {
      title: 'Cards',
      path: '/cards',
    },
    {
      title: 'Charts',
      path: '/charts',
    },
    {
      title: 'Containers',
      path: '/containers',
    },
    {
      title: 'Data',
      path: '/data',
    },
    {
      title: 'Editors',
      path: '/editors',
    },
    {
      title: 'Engineering',
      path: '/engineering',
    },
    {
      title: 'Errors',
      path: '/errors',
    },
    {
      title: 'Feeds',
      path: '/feeds',
    },
    {
      title: 'Forms',
      description: 'Forms are used to collect user input',
      path: '/forms',
      components: [
        {
          title: 'Buttons',
          description:
            'Buttons are elements users interact with to perform an action',
          path: '/forms/buttons',
          components: [
            {
              component: Button,
              description:
                'A button is a clickable element that performs an action',
              examples: [
                {
                  code: `import { Button } from '@srclaunch/ui';

const Example = () => (
  <Button>Click me</Button>
);`,
                  description: 'A basic button',
                  properties: {
                    children: 'Click me',
                  },
                  title: 'Basic',
                },
                {
                  description: 'A primary button',
                  properties: {
                    children: 'Click me',
                    type: ButtonType.Primary,
                  },
                  title: 'Primary',
                },
                {
                  description: 'A primary button',
                  properties: {
                    borderRadius: { all: Amount.Least },
                    children: 'Hi ARI!!!',
                    type: ButtonType.Primary,
                  },
                  title: 'Primary',
                },
              ],
              path: '/forms/buttons/button',
              properties: {
                children: {
                  types: ['ReactElement', 'string'],
                  required: true,
                },
                disabled: {
                  types: ['boolean'],
                  required: false,
                },
                form: {
                  types: ['string'],
                  required: false,
                },
              },
              title: 'Button',
            },
          ],
        },

        {
          title: 'Inputs',
          description:
            'Inputs are elements users interact with to collect user input',
          path: '/forms/inputs',
          components: [
            {
              title: 'Media',
              description:
                'Form input components for media, including images and videos',
              path: '/forms/inputs/media',
              components: [
                {
                  title: 'ImageInput',
                  description:
                    'Form input components for media, including images and videos',
                  component: ImageInput,
                  path: '/forms/inputs/media/image-input',
                  examples: [
                    {
                      code: `import { ImageInput } from '@srclaunch/ui';

const Example = () => (
  <ImageInput
    label="Image"
    onChange={({ value }) => console.log(value)}
  />
);`,
                      description: 'A basic image input',
                      properties: {
                        label: 'Images',
                        onChange: ({ value }: { value: string }) =>
                          console.log(value),
                      },
                    },
                  ],
                },
              ],
            },
            {
              title: 'Menus',
              description: 'Menu and list user inputs',
              path: '/forms/inputs/menus',
              components: [],
            },
          ],
        },
        {
          title: 'Labels',
          description: 'Labels used in forms',
          path: '/forms/labels',
          components: [
            {
              title: 'InputLabel',
              description: 'Label displayed above inputs',
              component: InputLabel,
              path: '/forms/labels/input-label',
              examples: [
                {
                  name: 'Basic',
                  code: `import { InputLabel } from '@srclaunch/ui';

const Example = () => (
  <InputLabel>
    Input name
  </InputLabel>
);`,
                  properties: {
                    children: 'Input name',
                  },
                },
                {
                  title: 'With error',
                  code: `import { InputLabel } from '@srclaunch/ui';
import { Exception } from '@srclaunch/exceptions';

const Example = () => (
  <InputLabel error={
    new Exception('An error occurred')
  }>
    Input name
  </InputLabel>
);`,
                  properties: {
                    children: 'Input name',
                    error: [new Exception('An error occurred')],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'Layout',
      path: '/layout',
    },
    {
      title: 'Lists',
      path: '/lists',
    },
    {
      title: 'Media',
      path: '/media',
    },
    {
      title: 'Menus',
      path: '/menus',
    },
    {
      title: 'Messaging',
      path: '/messaging',
    },
    {
      title: 'Modals',
      path: '/modals',
    },
    {
      title: 'Navigation',

      description: 'Components useful for navigating through the application.',
      path: '/navigation',
      components: [
        {
          component: BreadcrumbNavigation,
          description: 'A breadcrumb navigation component.',
          examples: [
            {
              properties: {
                items: [
                  {
                    label: 'Home',
                    path: '#',
                  },
                  {
                    label: 'About',
                    path: '#',
                  },
                  {
                    label: 'Contact',
                  },
                ],
              },
              title: 'Basic',
            },
          ],
          name: 'BreadcrumbNavigation',
          path: '/navigation/breadcrumb-navigation',
          title: 'BreadcrumbNavigation',
        },
      ],
    },
    {
      title: 'Networking',
      path: '/networking',
    },
    {
      title: 'Notifications',
      path: '/notifications',
    },
    {
      title: 'Progress',
      path: '/progress',
    },
    {
      title: 'Search',
      path: '/search',
    },
    {
      title: 'Themes',
      path: '/themes',
    },
    {
      title: 'Typography',
      path: '/typography',
    },
    {
      title: 'User',
      path: '/user',
    },
  ],
} as ComponentLibrary;
