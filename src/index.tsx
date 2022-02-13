import { AppLabLightTheme } from '@srclaunch/themes';
import { WebApplicationConfig } from '@srclaunch/types';
import countries from 'i18n-iso-countries';

import reducers from './docs/state/index';

async function init() {
  countries.registerLocale(await import('i18n-iso-countries/langs/en.json'));
}

init();

export { CodeVerificationForm } from './components/authentication/CodeVerificationForm';
export { ForgotPasswordForm } from './components/authentication/ForgotPasswordForm';
export { LoginForm } from './components/authentication/LoginForm';
export { SignupForm } from './components/authentication/SignupForm';
export { AddPaymentMethodForm } from './components/billing/payments/AddPaymentMethodForm';
export { PaymentMethodModal } from './components/billing/payments/PaymentMethodModal';
export { ProgressivePaymentStatus } from './components/billing/payments/ProgressivePaymentStatus';
export { SubscriptionModal } from './components/billing/SubscriptionModal';
export { Card } from './components/cards/Card';
export { TitleCard, TitleCards } from './components/cards/TitleCard';
export { LinearGauge } from './components/charts/LinearGauge';
export { PieChart } from './components/charts/PieChart';
export { ProgressMeter } from './components/charts/ProgressMeter';
export { RadialChart } from './components/charts/RadialChart';
export { RadialGauge } from './components/charts/RadialGauge';
export { Page } from './components/containers/Page';
import { WebApplication } from './components/containers/WebApplication';
export { WebApplication } from './components/containers/WebApplication';
export { Workspace } from './components/containers/Workspace';
export { DataGrid } from './components/data/DataGrid';
export { DataGridCell } from './components/data/DataGrid/DataGridCell';
export { EntityEditor } from './components/data/entities/EntityEditor';
export { EntityPanel } from './components/data/entities/EntityPanel';
export { EntityPreview } from './components/data/entities/EntityPreview';
export { BooleanLabel } from './components/data/labels/boolean/BooleanLabel';
export { ColorLabel } from './components/data/labels/colors/ColorLabel';
export { EmailAddressLabel } from './components/data/labels/communication/EmailAddressLabel';
export { PhoneNumberLabel } from './components/data/labels/communication/PhoneNumberLabel';
export { ProgressLabel } from './components/data/labels/data/ProgressLabel';
export { DateLabel } from './components/data/labels/dates/DateLabel';
export { CurrencyAmountLabel } from './components/data/labels/finance/currency/CurrencyAmountLabel';
export { CountryLabel } from './components/data/labels/locale/CountryLabel';
export { LanguageLabel } from './components/data/labels/locale/LanguageLabel';
export { NumberLabel } from './components/data/labels/numbers/NumberLabel';
export { PersonLabel } from './components/data/labels/people/PersonLabel';
export { UserLabel } from './components/data/labels/people/UserLabel';
export { MarkdownEditor } from './components/editors/MarkdownEditor';
export { ErrorLabel } from './components/errors/ErrorLabel';
export { ErrorNotification } from './components/errors/ErrorNotification';
export { ActivityFeed } from './components/feeds/ActivityFeed';
export { Button } from './components/forms/buttons/Button';
export { MenuButton } from './components/forms/buttons/MenuButton';
export { Form } from './components/forms/Form';
export { FormActions } from './components/forms/FormActions';
export { FormFields } from './components/forms/FormFields';
export { HelperButton } from './components/forms/helpers/HelperButton';
export { InputHelper } from './components/forms/helpers/InputHelper';
export { VerificationCodeInput } from './components/forms/inputs/authentication/VerificationCodeInput';
export { Checkbox } from './components/forms/inputs/boolean/Checkbox';
export { ToggleInput } from './components/forms/inputs/boolean/ToggleInput';
export { ColorInput } from './components/forms/inputs/colors/ColorInput';
export { EmailAddressInput } from './components/forms/inputs/communication/EmailAddressInput';
export { PhoneNumberInput } from './components/forms/inputs/communication/PhoneNumberInput';
export { DateInput } from './components/forms/inputs/dates/DateInput';
export { DynamicInput } from './components/forms/inputs/dynamic/DynamicInput';
export { CurrencyAmountInput } from './components/forms/inputs/finance/currency/CurrencyAmountInput';
export { CountryInput } from './components/forms/inputs/locale/CountryInput';
export { CurrencyInput } from './components/forms/inputs/locale/CurrencyInput';
export { LanguageInput } from './components/forms/inputs/locale/LanguageInput';
export { StreetAddressInput } from './components/forms/inputs/locale/StreetAddressInput';
export { DropdownInput } from './components/forms/inputs/menu/DropdownInput';
export { NumberInput } from './components/forms/inputs/numbers/NumberInput';
export { DropdownPanel } from './components/forms/inputs/shared/DropdownPanel';
export { PasswordInput } from './components/forms/inputs/text/PasswordInput';
export { SearchInput } from './components/forms/inputs/text/SearchInput';
export { TextInput } from './components/forms/inputs/text/TextInput';
export { InputLabel } from './components/forms/labels/InputLabel';
export { InputRow } from './components/forms/layout/InputRow';
export { AlignLeft } from './components/layout/AlignLeft';
export { AlignRight } from './components/layout/AlignRight';
export { Container } from './components/layout/Container';
export { ListItem } from './components/lists/ListItem';
export { OrderedList } from './components/lists/OrderedList';
export { UnorderedList } from './components/lists/UnorderedList';
export { Icon } from './components/media/Icon';
export { Image } from './components/media/Image';
export { MediaGrid } from './components/media/MediaGrid/index';
export { MediaPreview } from './components/media/MediaPreview';
export { Svg } from './components/media/Svg';
export { Video } from './components/media/Video';
export { Menu } from './components/menus/Menu';
export { MoreMenu } from './components/menus/MoreMenu';
// export {Conversation} from './components/messaging/chat/Conversation';
export { ConversationList } from './components/messaging/chat/ConversationList';
export { ConversationNavigation } from './components/messaging/chat/ConversationNavigation';
export { Message } from './components/messaging/chat/Message';
export { MessageComposer } from './components/messaging/chat/MessageComposer';
export { MessagePreview } from './components/messaging/chat/MessagePreview';
export { Backdrop } from './components/modals/Backdrop';
export { CloseButton } from './components/modals/CloseButton';
export { HoverPanel } from './components/modals/HoverPanel';
export { Modal } from './components/modals/Modal';
export { ModalHeader } from './components/modals/ModalHeader';
export { SlidePanel } from './components/modals/SlidePanel';
export { NavigationBar } from './components/navigation/NavigationBar';
export { NavigationLink } from './components/navigation/NavigationLink';
export { NavigationMenu } from './components/navigation/NavigationMenu';
export { ObjectLink } from './components/navigation/ObjectLink';
export { PageLink } from './components/navigation/PageLink';
export { Tabs } from './components/navigation/Tabs/index';
export { Tab } from './components/navigation/Tabs/Tab';
export { ConnectionStatus } from './components/network/ConnectionStatus';
export { Badge } from './components/notifications/Badge';
export { NotificationLabel } from './components/notifications/NotificationLabel';
export { Notifications } from './components/notifications/Notifications';
export { Orb } from './components/notifications/Orb';
export { LoadingOverlay } from './components/progress/LoadingOverlay';
export { ProgressSpinner } from './components/progress/ProgressSpinner';
export { UniversalSearch } from './components/search/UniversalSearch';
export { ThemeSelector } from './components/themes/ThemeSelector';
export { Heading } from './components/typography/Heading';
export { Label } from './components/typography/Label';
export { LineBreak } from './components/typography/LineBreak';
export { Link } from './components/typography/Link';
export { Paragraph } from './components/typography/Paragraph';
export { Small } from './components/typography/Small';
export { SubTitle } from './components/typography/SubTitle';
export { Title } from './components/typography/Title';
export { LogoutButton } from './components/user/LogoutButton';
export { UserMenu } from './components/user/UserMenu';
export { useAuthentication } from './hooks/use-authentication';
export { useEntityEditor } from './hooks/use-entity-editor';
export {
  getCSSBorderValue,
  getCSSBoxShadowValue,
  getCSSMeasurementValue,
} from './lib/css/properties';
export { getLabelByFieldType } from './lib/data/labels';
// export { getFormFieldsFromModel } from './lib/forms/fields';
export { getFormFieldsFromModel } from './lib/forms/fields';
export { getInputElementByFieldType } from './lib/forms/inputs';
export { getLargerAmount, getSmallerAmount } from './lib/proportions/amount';
export {
  convertAmountToSize,
  convertSizeToAmount,
  convertSizeToTextSize,
} from './lib/proportions/conversions';
export { getLargerSize, getSmallerSize } from './lib/proportions/size';
export { AnimationStyles } from './styles/animation';
export { BackgroundStyles } from './styles/appearance/background';
export { BorderStyles } from './styles/appearance/border';
export { BorderRadiusStyles } from './styles/appearance/border-radius';
export { BoxShadowStyles } from './styles/appearance/box-shadow';
export { DimensionStyles } from './styles/appearance/dimension';
export { AppearanceStyles } from './styles/appearance/index';
export { FocusedStyles } from './styles/focused';
export { ButtonStyles } from './styles/forms/button';
export { InputContainerStyles } from './styles/forms/input/container';
export { TextInputStyles } from './styles/forms/input/text-input';
export { LayoutStyles } from './styles/layout';
export { TextStyles } from './styles/typography';
export * from './types/index';

import {
  createStore,
  renderReduxWebApp,
} from '@srclaunch/web-application-state';

import routes from './docs/routes';

if (process.env.NODE_ENV === 'development') {
  const config: WebApplicationConfig = {
    ui: {
      themes: {
        default: AppLabLightTheme.id,
      },
    },
  };

  const store = createStore({
    reducers,
  });

  renderReduxWebApp({
    authentication: false,
    config,
    container: <WebApplication />,
    routes,
    store,
  });
}
