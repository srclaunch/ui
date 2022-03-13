import { PageRole, PageRoute } from '@srclaunch/types';

import { Animation } from './pages/animation';
import { Authentication } from './pages/authentication';
import { CodeVerificationFormPage } from './pages/authentication/CodeVerificationForm';
import { ForgotPasswordFormPage } from './pages/authentication/ForgotPasswordForm';
import { LoginFormPage } from './pages/authentication/LoginForm';
import { SignupFormPage } from './pages/authentication/SignupForm';
import { Billing } from './pages/billing';
import { BillingPayments } from './pages/billing/payments';
import { AddPaymentMethodFormPage } from './pages/billing/payments/AddPaymentMethodForm';
import { PaymentMethodModalPage } from './pages/billing/payments/PaymentMethodModal';
import { ProgressivePaymentStatusPage } from './pages/billing/payments/ProgressivePaymentStatus';
import { BillingSubscriptionsPage } from './pages/billing/subscriptions';
import { SubscriptionModalPage } from './pages/billing/subscriptions/SubscriptionModal';
import { CardsPage } from './pages/cards/index';
import { CardPage } from './pages/cards/Card';
import { TitleCardPage } from './pages/cards/TitleCard';
import { ChartsPage } from './pages/charts/index';
import { LinearGaugePage } from './pages/charts/LinearGauge';
import { PieChartPage } from './pages/charts/PieChart';
import { ProgressMeterPage } from './pages/charts/ProgressMeter';
import { RadialChartPage } from './pages/charts/RadialChart';
import { RadialGaugePage } from './pages/charts/RadialGauge';
import { ContainersPage } from './pages/containers/index';
import { PagePage } from './pages/containers/Page';
import { WebApplicationPage } from './pages/containers/WebApplication';
import { WorkspacePage } from './pages/containers/Workspace';
import { DataPage } from './pages/data/index';
import { DataGridsPage } from './pages/data/datagrids/index';
import { DataGridPage } from './pages/data/datagrids/DataGrid';
import { DataGridCellPage } from './pages/data/datagrids/DataGridCell';
import { EntitiesPage } from './pages/data/entities/index';
import { EntityEditorPage } from './pages/data/entities/EntityEditor';
import { EntityPanelPage } from './pages/data/entities/EntityPanel';
import { EntityPreviewPage } from './pages/data/entities/EntityPreview';
import { LabelsPage } from './pages/data/labels/index';
import { Forms } from './pages/forms';
import { ButtonsPage } from './pages/forms/buttons';
import { ButtonPage } from './pages/forms/buttons/Button';
import { MenuButtonPage } from './pages/forms/buttons/MenuButton';
import { FormInputsPage } from './pages/forms/inputs';
import { ToggleInputPage } from './pages/forms/inputs/boolean/ToggleInput';
import { CountryInputPage } from './pages/forms/inputs/locale/CountryInput';
import { ImageInputPage } from './pages/forms/inputs/media/ImageInput';
import { DropdownInputPage } from './pages/forms/inputs/menu/DropdownInput';
import { LongTextInputPage } from './pages/forms/inputs/text/LongTextInput';
import { TextInputPage } from './pages/forms/inputs/text/TextInput';
import { Introduction } from './pages/Introduction';
import { MoreMenuPage } from './pages/menus/MoreMenu';
import { Messaging } from './pages/messaging/index';
import { ChatPage } from './pages/messaging/chat/index';
import { ConversationsPage } from './pages/messaging/chat/conversations';
import { ConversationListPage } from './pages/messaging/chat/conversations/ConversationList';
import { ConversationNavigationPage } from './pages/messaging/chat/conversations/ConversationNavigation';
import { MessagesPage } from './pages/messaging/chat/messages';
import { MessagePage } from './pages/messaging/chat/messages/Message';
import { MessageComposerPage } from './pages/messaging/chat/messages/MessageComposer';
import { MessageListPage } from './pages/messaging/chat/messages/MessageList';
import { MessagePreviewPage } from './pages/messaging/chat/messages/MessagePreview';
import { Modals } from './pages/modals/index';
import { SlidePanelPage } from './pages/modals/SlidePanel';
import { PageNotFound } from './pages/PageNotFound';
import { ThemeSelectorPage } from './pages/themes/ThemeSelector';
// import { LinearGauge, RadialGauge } from '../../dist';

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
    component: Animation,
    path: '/animation',
  },
  {
    component: Authentication,
    path: '/authentication',
  },
  {
    component: CodeVerificationFormPage,
    path: '/authentication/code-verification-form',
  },
  {
    component: ForgotPasswordFormPage,
    path: '/authentication/forgot-password-form',
  },
  {
    component: LoginFormPage,
    path: '/authentication/login-form',
  },
  {
    component: SignupFormPage,
    path: '/authentication/signup-form',
  },
  {
    component: Billing,
    path: '/billing',
  },
  {
    component: BillingPayments,
    path: '/billing/payments',
  },
  {
    component: AddPaymentMethodFormPage,
    path: '/billing/payments/add-payment-method-form',
  },
  {
    component: PaymentMethodModalPage,
    path: '/billing/payments/payment-method-modal',
  },
  {
    component: ProgressivePaymentStatusPage,
    path: '/billing/payments/progressive-payment-status',
  },
  {
    component: BillingSubscriptionsPage,
    path: '/billing/subscriptions',
  },
  {
    component: SubscriptionModalPage,
    path: '/billing/subscriptions/subscription-modal',
  },
  {
    component: CardsPage,
    path: '/cards',
  },
  {
    component: CardPage,
    path: '/cards/card',
  },
  {
    component: TitleCardPage,
    path: '/cards/title-card',
  },
  {
    component: ChartsPage,
    path: '/charts',
  },
  {
    component: LinearGaugePage,
    path: '/charts/linear-gauge',
  },
  {
    component: PieChartPage,
    path: '/charts/pie-chart',
  },
  {
    component: ProgressMeterPage,
    path: '/charts/progress-meter',
  },
  {
    component: RadialChartPage,
    path: '/charts/radial-chart',
  },
  {
    component: RadialGaugePage,
    path: '/charts/radial-gauge',
  },
  {
    component: ContainersPage,
    path: '/containers',
  },
  {
    component: PagePage,
    path: '/containers/page',
  },
  {
    component: WebApplicationPage,
    path: '/containers/web-application',
  },
  {
    component: WorkspacePage,
    path: '/containers/workspace',
  },
  {
    component: DataPage,
    path: '/data',
  },
  {
    component: DataGridsPage,
    path: '/data/datagrids',
  },
  {
    component: DataGridPage,
    path: '/data/datagrids/data-grid',
  },
  {
    component: DataGridCellPage,
    path: '/data/datagrids/data-grid-cell',
  },
  {
    component: EntitiesPage,
    path: '/data/entities',
  },
  {
    component: EntityEditorPage,
    path: '/data/entities/entity-editor',
  },
  {
    component: EntityPanelPage,
    path: '/data/entities/entity-panel',
  },
  {
    component: EntityPreviewPage,
    path: '/data/entities/entity-preview',
  },
  {
    component: LabelsPage,
    path: '/data/labels',
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
    component: ButtonsPage,
    path: '/forms/buttons',
  },
  {
    component: ButtonPage,
    path: '/forms/buttons/button',
  },
  {
    component: MenuButtonPage,
    path: '/forms/buttons/menu-button',
  },
  {
    component: FormInputsPage,
    path: '/forms/inputs',
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
    component: Messaging,
    path: '/messaging/',
  },
  {
    component: ChatPage,
    path: '/messaging/chat',
  },
  {
    component: ConversationsPage,
    path: '/messaging/chat/conversations',
  },
  {
    component: ConversationListPage,
    path: '/messaging/chat/conversations/conversation-list',
  },
  {
    component: ConversationNavigationPage,
    path: '/messaging/chat/conversations/conversation-navigation',
  },
  {
    component: MessagesPage,
    path: '/messaging/chat/messages',
  },
  {
    component: MessagePage,
    path: '/messaging/chat/messages/message',
  },
  {
    component: MessageComposerPage,
    path: '/messaging/chat/messages/message-composer',
  },
  {
    component: MessageListPage,
    path: '/messaging/chat/messages/message-list',
  },
  {
    component: MessagePreviewPage,
    path: '/messaging/chat/messages/message-preview',
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
