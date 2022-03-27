import { Exception } from '@srclaunch/exceptions';
import { BasicIcons, DualLightIcons } from '@srclaunch/icons';
import { MenuButton } from '../components/forms/buttons/MenuButton';
import { Checkbox } from '../components/forms/inputs/boolean/Checkbox';
import { ToggleInput } from '../components/forms/inputs/boolean/ToggleInput';
import { SearchInput } from '../components/forms/inputs/text/SearchInput';
import { MediaGrid } from '../components/media/MediaGrid';
import { Menu } from '../components/menus/Menu';
import { MoreMenu } from '../components/menus/MoreMenu';
import { CloseButton } from '../components/modals/CloseButton';
import { ModalHeader } from '../components/modals/ModalHeader';
import { SlidePanel } from '../components/modals/SlidePanel';
import { Tab, Tabs } from '../components/navigation/Tabs';
import { LoadingOverlay } from '../components/progress/LoadingOverlay';
import { UserMenu } from '../components/user/UserMenu';
import {
  Amount,
  BreadcrumbNavigation,
  Button,
  ButtonType,
  CodeVerificationForm,
  DropdownInput,
  ForgotPasswordForm,
  ImageInput,
  InputLabel,
  LoginForm,
  NumberInput,
  TextInput,
  TitleCard,
  SignupForm,
  Validation,
} from '../index';
import { BackgroundColors, Colors, Sizes, TextColors } from '../types';
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
      description: 'Cards for various purpose',
      components: [
        {
          component: TitleCard,
          title: 'TitleCard',
          path: '/cards/title-card',
          description:
            'A card with an icon, title, subtitle, and a metric or value',
          examples: [
            {
              title: 'Default',
              properties: {
                icon: {
                  name: DualLightIcons.Tool,
                  size: {
                    height: Sizes.Default,
                    width: Sizes.Default,
                  },
                },
                label: 'Title',
                value: 43,
              },
              code: `import { TitleCard } from '@srclaunch/ui';

<TitleCard
  icon: {
    name: DualLightIcons.Alarm
  },
  label: 'Title',
  value: 43
/>`,
            },
          ],
        },
      ],
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
            {
              component: MenuButton,
              title: 'MenuButton',
              path: '/forms/buttons/menu-button',
              description:
                'A menu button is a button that opens a menu when clicked',
              examples: [
                {
                  code: `import { MenuButton } from '@srclaunch/ui';

const Example = () => (
  <MenuButton>Click me</MenuButton>
);`,
                  description: 'A basic menu button',
                  properties: {
                    label: 'Click me',
                    menu: [
                      {
                        label: 'Menu item',
                        onClick: () => {},
                      },
                    ],
                  },
                  title: 'Basic',
                },
              ],
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
              title: 'Boolean',
              description:
                'True/false inputs are used to collect a boolean value',
              path: '/forms/inputs/boolean',
              components: [
                {
                  title: 'Checkbox',
                  description:
                    'A checkbox is a boolean input that can be checked or unchecked',
                  component: Checkbox,
                  path: '/forms/inputs/boolean/checkbox',
                  examples: [
                    {
                      code: `import { Checkbox } from '@srclaunch/ui';

const Example = () => (
  <Checkbox
    label="Enabled"
    onChange={({ value }) => console.log(value)}
  />
);`,
                      description: '',
                      properties: {
                        label: 'Enabled',
                        onChange: ({ value }: { value: string }) =>
                          console.log(value),
                      },
                    },
                  ],
                },
                {
                  title: 'ToggleInput',
                  description:
                    'A toggle input is a boolean input that can be turned on or off',
                  component: ToggleInput,
                  path: '/forms/inputs/boolean/toggle-input',
                  examples: [
                    {
                      code: `import { ToggleInput } from '@srclaunch/ui';
      
      const Example = () => (
        <ToggleInput
          label="Enabled"
          onChange={({ value }) => console.log(value)}
        />
      );`,
                      description: '',
                      properties: {
                        label: 'Enabled',
                        onChange: ({ value }: { value: string }) =>
                          console.log(value),
                      },
                    },
                  ],
                },
              ],
            },
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
                    {
                      title: 'With a menu',
                      properties: {
                        label: 'Dropdown',
                        menu: [
                          {
                            label: 'Menu item',
                            value: 'menu-item',
                          },
                        ],
                        states: {
                          state: {
                            dropdown: {
                              visible: true,
                            },
                          },
                        },
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
                {
                  title: 'SearchInput',
                  description: 'A search input',
                  path: '/forms/inputs/text/search-input',
                  component: SearchInput,
                  examples: [
                    {
                      code: `import { SearchInput } from '@srclaunch/ui';
                      
    <SearchInput
      onChange={({ value }) => console.log(value)}
    />`,
                      description: '',
                      properties: {
                        onChange: ({ value }: { value: string }) =>
                          console.log(value),
                      },
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
      description: 'Components used for displaying different media types',
      components: [
        {
          component: MediaGrid,
          title: 'MediaGrid',
          path: '/media/media-grid',
          description: 'A grid of media',
          examples: [
            {
              title: 'Basic',
              code: `import { MediaGrid } from '@srclaunch/ui';

              const Example = () => (
                <MediaGrid items={[{ path: '/asdfasfd', }]} />
              );`,
              properties: {
                items: [
                  {
                    image: { path: 'asdfasdf' },
                    title: 'Example',
                  },
                ],
              },
            },
            {
              title: 'With titles',
              code: `import { MediaGrid } from '@srclaunch/ui';

              const Example = () => (
                <MediaGrid items={[{ path: '/asdfasfd', title: 'Example 1', }]} />
              );`,
              properties: {
                items: [
                  {
                    image: { path: 'asdfasdf' },
                    title: 'Example 1',
                  },
                ],
              },
            },
            {
              title: 'With titles and more menu',
              code: `import { MediaGrid } from '@srclaunch/ui';

              const Example = () => (
                <MediaGrid items={[{ path: '/asdfasfd', title: 'Example 1',}]} />
              );`,
              properties: {
                items: [
                  {
                    image: { path: 'asdfasdf' },
                    title: 'Example',
                    menu: [{ label: 'Edit' }],
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      title: 'Menus',
      description:
        'Menu components for displaying lists of items that can be interacted with.',
      path: '/menus',
      components: [
        {
          component: Menu,
          description: 'Displays a list of items',
          title: 'Menu',
          path: '/menus/menu',
          examples: [
            {
              title: 'Default',
              properties: {
                menu: [
                  {
                    label: 'Menu item',
                    value: 'menu-item',
                  },
                  {
                    label: 'Menu item 2',
                    value: 'menu-item-2',
                  },
                ],
                size: {
                  minWidth: 200,
                },
              },
            },
            {
              title: 'With a selected item',
              properties: {
                menu: [
                  {
                    label: 'Menu item',
                    value: 'menu-item',
                  },
                  {
                    label: 'Menu item 2',
                    states: {
                      current: {
                        background: {
                          color: BackgroundColors.Warning,
                        },
                      },
                      state: {
                        current: true,
                      },
                    },
                    value: 'menu-item-2',
                  },
                ],
                size: {
                  minWidth: 200,
                },
              },
            },
            {
              title: 'With an icon and background color',
              properties: {
                menu: [
                  {
                    label: 'Chi CHi',
                    value: 'menu-item-3',
                  },
                  {
                    label: 'Bogey',
                    value: 'menu-item-2',
                  },
                  {
                    label: "Lil' Bro",
                    value: 'menu-item-3',
                  },
                  {
                    background: {
                      color: BackgroundColors.Error,
                    },
                    label: 'Kitters',
                    value: 'menu-item',
                    icon: {
                      name: BasicIcons.Alert,
                      size: {
                        height: Sizes.Smaller,
                        width: Sizes.Smaller,
                      },
                      color: Colors.White,
                    },
                    textColor: TextColors.White,
                  },
                ],
                size: {
                  minWidth: 200,
                },
              },
            },
          ],
        },
        {
          component: MoreMenu,
          description: 'A button that displays a menu when clicked.',
          title: 'MoreMenu',
          path: '/menus/more-menu',
          examples: [
            {
              title: 'Default',
              properties: {
                menu: [
                  {
                    label: 'Menu item',
                    value: 'menu-item',
                  },
                  {
                    label: 'Menu item 2',
                    value: 'menu-item-2',
                  },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      title: 'Messaging',
      path: '/messaging',
    },
    {
      title: 'Modals',
      description: 'Modal components for displaying modal dialogs',
      path: '/modals',
      components: [
        {
          component: CloseButton,
          title: 'CloseButton',
          description: 'A button that can be used to close modals',
          path: '/modals/close-button',
          examples: [
            {
              title: 'Default',
              properties: {},
            },
          ],
        },
        {
          component: ModalHeader,
          title: 'ModalHeader',
          description: 'A header for a modal',
          path: '/modals/modal-header',
          examples: [
            {
              title: 'Default',
              properties: {
                size: {
                  width: 300,
                },
                title: 'Example Title',
              },
            },
          ],
        },
        {
          component: SlidePanel,
          title: 'SlidePanel',
          description:
            'A modal panel that slides out from the edge of thes screen.',
          path: '/modals/slide-panel',
          examples: [
            {
              title: 'Default',
              properties: {
                children: (
                  <>
                    <ModalHeader title="Example Title" />
                  </>
                ),
                states: {
                  state: {
                    visible: true,
                  },
                },
              },
            },
          ],
        },
      ],
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
        {
          component: Tabs,
          title: 'Tabs',
          description: 'A tab navigation component.',
          path: '/navigation/tabs',
          examples: [
            {
              properties: {
                children: (
                  <>
                    <Tab label="One">Uno</Tab>
                    <Tab label="Two">Dos</Tab>
                    <Tab label="Three">Tres</Tab>
                  </>
                ),
              },
            },
          ],
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
      description: 'Components for displaying progress states.',
      components: [
        {
          component: LoadingOverlay,
          title: 'LoadingOverlay',
          path: '/progress/loading-overlay',
          examples: [
            {
              title: 'Default',
              properties: {
                states: {
                  state: {
                    visible: true,
                  },
                },
              },
            },
          ],
        },
      ],
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
      description: 'Components for displaying user information.',
      components: [
        {
          component: UserMenu,
          title: 'UserMenu',
          path: '/user/user-menu',
          name: 'UserMenu',
          description: 'A user menu component.',
          examples: [
            {
              properties: {
                states: {
                  state: {
                    authenticated: true,
                  },
                },
              },
              name: 'Basic',
            },
          ],
        },
      ],
    },
  ],
} as ComponentLibrary;
