import { Exception } from '@srclaunch/exceptions';
import { CodeVerificationForm } from '../components/authentication/CodeVerificationForm';
import { ForgotPasswordForm } from '../components/authentication/ForgotPasswordForm';
import { LoginForm } from '../components/authentication/LoginForm';
import { SignupForm } from '../components/authentication/SignupForm';
import { DropdownInput } from '../components/forms/inputs/menu/DropdownInput';
import { NumberInput } from '../components/forms/inputs/numbers/NumberInput';
import { TextInput } from '../components/forms/inputs/text/TextInput';
import {
  Amount,
  BreadcrumbNavigation,
  Button,
  ButtonType,
  ImageInput,
  InputLabel,
} from '../index';
import { Validation } from '../types';

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
      description: 'Components used for authentication',
      path: '/authentication',
      components: [
        {
          component: CodeVerificationForm,
          description: 'A form for verifying a user’s code',
          title: 'CodeVerificationForm',
          path: '/authentication/code-verification-form',
          examples: [
            {
              title: 'Default',
              properties: {
                onSubmit: ({
                  fields,
                }: {
                  fields?: Record<string, unknown>;
                }) => {
                  console.log(fields);
                },
              },
              code: `import { CodeVerificationForm } from '@srclaunch/ui';

<CodeVerificationForm
  onSubmit: ({
    fields,
  }: {
    fields: Record<string, unknown>;
  }) => {
    console.log(fields);
  }}
/>
              `,
            },
          ],
        },
        {
          component: ForgotPasswordForm,
          description: 'A form for resetting a user’s password',
          title: 'ForgotPasswordForm',
          path: '/authentication/forgot-password-form',
          examples: [
            {
              title: 'Default',
              properties: {
                onSubmit: ({
                  fields,
                }: {
                  fields?: Record<string, unknown>;
                }) => {
                  console.log(fields);
                },
              },
              code: `import { ForgotPasswordForm } from '@srclaunch/ui';

<ForgotPasswordForm
  onSubmit: ({
    fields,
  }: {
    fields: Record<string, unknown>;
  }) => {
    console.log(fields);
  }}
/>
              `,
            },
          ],
        },
        {
          component: LoginForm,
          description: 'A form for logging in a user',
          title: 'LoginForm',
          path: '/authentication/login-form',
          examples: [
            {
              title: 'Default',
              properties: {
                onSubmit: ({
                  fields,
                }: {
                  fields?: Record<string, unknown>;
                }) => {
                  console.log(fields);
                },
              },
              code: `import { LoginForm } from '@srclaunch/ui';

<LoginForm
  onSubmit: ({
    fields,
  }: {
    fields: Record<string, unknown>;
  }) => {
    console.log(fields);
  }}
/>
              `,
            },
          ],
        },
        {
          component: SignupForm,
          description: 'A form for signing up a user',
          title: 'SignupForm',
          path: '/authentication/signup-form',
          examples: [
            {
              title: 'Default',
              properties: {
                onSubmit: ({
                  fields,
                }: {
                  fields?: Record<string, unknown>;
                }) => {
                  console.log(fields);
                },
              },
              code: `import { SignupForm } from '@srclaunch/ui';

<SignupForm
  onSubmit: ({
    fields,
  }: {
    fields: Record<string, unknown>;
  }) => {
    console.log(fields);
  }}
/>
              `,
            },
          ],
        },
      ],
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
              components: [
                {
                  component: DropdownInput,
                  description: 'A dropdown menu input',
                  title: 'DropdownInput',
                  path: '/forms/inputs/menus/dropdown-input',
                  examples: [
                    {
                      title: 'Default',
                      properties: {
                        label: 'Dropdown',
                      },
                    },
                  ],
                },
              ],
            },
            {
              title: 'Numbers',
              description: 'Menu and list user inputs',
              path: '/forms/inputs/numbers',
              components: [
                {
                  component: NumberInput,
                  description: 'An input for entering numbers',
                  title: 'NumberInput',
                  path: '/forms/inputs/numbers/number-input',
                  examples: [
                    {
                      title: 'Default',
                      properties: {
                        events: {
                          input: {
                            onValueChange: ({
                              validation,
                              value,
                            }: {
                              validation?: Validation;
                              value?: string;
                            }) => {
                              console.log(validation, value);
                            },
                          },
                        },
                      },
                      code: `import { NumberInput } from '@srclaunch/ui';
        
<NumberInput
  events={{
    input: {
      onValueChange: ({ validation, value }) => {
        console.log(validation, value);
      }),
    }
  }}
/>`,
                    },
                  ],
                },
              ],
            },
            {
              title: 'Text',
              description: 'Text and string user inputs',
              path: '/forms/inputs/text',
              components: [
                {
                  component: TextInput,
                  description: 'A form for signing up a user',
                  title: 'TextInput',
                  path: '/forms/inputs/text/text-input',
                  examples: [
                    {
                      title: 'Default',
                      properties: {
                        events: {
                          input: {
                            onValueChange: ({
                              validation,
                              value,
                            }: {
                              validation?: Validation;
                              value?: string;
                            }) => {
                              console.log(validation, value);
                            },
                          },
                        },
                      },
                      code: `import { TextInput } from '@srclaunch/ui';
        
<TextInput
  events={{
    input: {
      onValueChange: ({ validation, value }) => {
        console.log(validation, value);
      }),
    }
  }}
/>`,
                    },
                    {
                      title: 'With a label',
                      properties: {
                        events: {
                          input: {
                            onValueChange: ({
                              validation,
                              value,
                            }: {
                              validation?: Validation;
                              value?: string;
                            }) => {
                              console.log(validation, value);
                            },
                          },
                        },
                        label: 'Enter your name',
                      },
                      code: `import { TextInput } from '@srclaunch/ui';
        
<TextInput
  events={{
    input: {
      onValueChange: ({ validation, value }) => {
        console.log(validation, value);
      }),
    }
  }}
  label="Enter your name"
/>`,
                    },
                  ],
                },
              ],
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
