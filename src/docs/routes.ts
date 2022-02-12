import { PageRole, PageRoute } from '@srclaunch/types';

import { DataGridPage } from './pages/data/DataGrid';
import { DataGridCellPage } from './pages/data/DataGridCell';
import { DataLabelPage } from './pages/data/DataLabel';
import { Data } from './pages/data/index';
import { Forms } from './pages/forms';
import { MenuButtonPage } from './pages/forms/buttons/MenuButton';
import { CountryInputPage } from './pages/forms/inputs/CountryInput';
import { DropdownInputPage } from './pages/forms/inputs/DropdownInput';
import { ImageInputPage } from './pages/forms/inputs/ImageInput';
import { LongTextInputPage } from './pages/forms/inputs/LongTextInput';
import { TextInputPage } from './pages/forms/inputs/TextInput';
import { ToggleInputPage } from './pages/forms/inputs/ToggleInput';
import { Introduction } from './pages/Introduction';
import { MoreMenuPage } from './pages/menus/MoreMenu';
import { ChatMessagingPage } from './pages/messaging/chat';
import { ConversationListPage } from './pages/messaging/chat/ConversationList';
import { ConversationNavigationPage } from './pages/messaging/chat/ConversationNavigation';
import { MessagePage } from './pages/messaging/chat/Message';
import { MessageComposerPage } from './pages/messaging/chat/MessageComposer';
import { MessageListPage } from './pages/messaging/chat/MessageList';
import { MessagePreviewPage } from './pages/messaging/chat/MessagePreview';
import { Modals } from './pages/modals/index';
import { SlidePanelPage } from './pages/modals/SlidePanel';
import { PageNotFound } from './pages/PageNotFound';
import { ThemeSelectorPage } from './pages/themes/ThemeSelector';

const routes: readonly PageRoute[] = [
  {
    component: PageNotFound,
    path: '*',
    role: PageRole.PageNotFound,
  },
  {
    component: Introduction,
    role: PageRole.Index,
  },
  {
    component: Data,
    path: '/data',
  },
  {
    component: DataGridPage,
    path: '/data/data-grid',
  },
  {
    component: DataGridCellPage,
    path: '/data/data-grid-cell',
  },
  {
    component: DataLabelPage,
    path: '/data/data-label',
  },
  {
    component: DataLabelPage,
    path: '/data/data-labels/string-label',
  },
  {
    component: DataLabelPage,
    path: '/data/data-label',
  },
  {
    component: Modals,
    path: '/modals',
  },
  {
    component: MoreMenuPage,
    path: '/menus/more-menu',
  },
  {
    component: Forms,
    path: '/forms',
  },
  {
    component: MenuButtonPage,
    path: '/forms/buttons/menu-button',
  },
  {
    component: CountryInputPage,
    path: '/forms/inputs/country-input',
  },
  {
    component: ImageInputPage,
    path: '/forms/inputs/image-input',
  },
  {
    component: TextInputPage,
    path: '/forms/inputs/text-input',
  },
  {
    component: LongTextInputPage,
    path: '/forms/inputs/long-text-input',
  },
  {
    component: DropdownInputPage,
    path: '/forms/inputs/dropdown-input',
  },
  {
    component: ToggleInputPage,
    path: '/forms/inputs/toggle-input',
  },
  {
    component: ChatMessagingPage,
    path: '/messaging/chat',
  },
  {
    component: ConversationListPage,
    path: '/messaging/chat/conversation-list',
  },
  {
    component: ConversationNavigationPage,
    path: '/messaging/chat/conversation-navigation',
  },
  {
    component: MessagePage,
    path: '/messaging/chat/message',
  },
  {
    component: MessageComposerPage,
    path: '/messaging/chat/message-composer',
  },
  {
    component: MessageListPage,
    path: '/messaging/chat/message-list',
  },
  {
    component: MessagePreviewPage,
    path: '/messaging/chat/message-preview',
  },
  {
    component: SlidePanelPage,
    path: '/modals/slide-panel',
  },
  {
    component: Modals,
    path: '/modals',
  },
  {
    component: ThemeSelectorPage,
    path: '/themes/theme-selector',
  },
];

export default routes;
