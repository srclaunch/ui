import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Primitives } from '@srclaunch/types';
// import { StreetAddressInput } from '../../components/forms/inputs/locale/StreetAddressInput';
import { JSONEditor } from '../../components/editors/JSONEditor';
import { VerificationCodeInput } from '../../components/forms/inputs/authentication/VerificationCodeInput';
import { ToggleInput } from '../../components/forms/inputs/boolean/ToggleInput';
import { EmailAddressInput } from '../../components/forms/inputs/communication/EmailAddressInput';
import { PhoneNumberInput } from '../../components/forms/inputs/communication/PhoneNumberInput';
// import { CurrencyAmountInput } from '../../components/forms/inputs/finance/currency/CurrencyInput';
import { DateInput } from '../../components/forms/inputs/dates/DateInput';
import { DateTimeInput } from '../../components/forms/inputs/dates/DateTimeInput';
import { CurrencyAmountInput } from '../../components/forms/inputs/finance/currency/CurrencyAmountInput';
// import { Checkbox } from '../../components/forms/inputs/boolean/Checkbox';
// import { ColorInput } from '../../components/forms/inputs/colors/ColorInput';
import { CountryInput } from '../../components/forms/inputs/locale/CountryInput';
import { CurrencyInput } from '../../components/forms/inputs/locale/CurrencyInput';
// import { EmailAddressInput } from '../../components/forms/inputs/communication/EmailAddressInput';
// import { EmojiInput } from '../../components/forms/inputs/media/EmojiInput';
import { LanguageInput } from '../../components/forms/inputs/locale/LanguageInput';
// import { PasswordInput } from '../../components/forms/inputs/text/PasswordInput';
// import { PhoneNumberInput } from '../../components/forms/inputs/communication/PhoneNumberInput';
// import { SearchInput } from '../../components/forms/inputs/text/SearchInput';
import { ImageInput } from '../../components/forms/inputs/media/ImageInput';
import { DropdownInput } from '../../components/forms/inputs/menu/DropdownInput';
// import { MarkdownEditor } from '../../components/forms/editors/MarkdownEditor';
import { NumberInput } from '../../components/forms/inputs/numbers/NumberInput';
import { SSNInput } from '../../components/forms/inputs/people/SSNInput';
import { LongTextInput } from '../../components/forms/inputs/text/LongTextInput';
import { PasswordInput } from '../../components/forms/inputs/text/PasswordInput';
import { TextInput } from '../../components/forms/inputs/text/TextInput';
// import { Exception } from '@srclaunch/exceptions';
import { AutoComplete } from '../../types';
export function getInputElementByFieldType(field) {
    if (field.system)
        return null;
    switch (field.type) {
        case Primitives.Boolean:
            return (_jsx(ToggleInput, { defaultValue: field.value, onChange: field.onChange, ...field }, void 0));
        case Primitives.CountryCode:
            return (_jsx(CountryInput, { defaultValue: field.value, onChange: field.onChange, ...field }, void 0));
        case Primitives.CurrencyAmount:
            return (_jsx(CurrencyAmountInput, { defaultValue: field.value, onChange: field.onChange, ...field }, void 0));
        case Primitives.CurrencyCode:
            return (_jsx(CurrencyInput, { defaultValue: field.value, onChange: field.onChange, ...field }, void 0));
        case Primitives.Date:
            return (_jsx(DateInput, { defaultValue: field.value, onChange: field.onChange, ...field }, void 0));
        case Primitives.DateTime:
            return (_jsx(DateTimeInput, { defaultValue: field.value, onChange: field.onChange, ...field }, void 0));
        case Primitives.EmailAddress:
            return (_jsx(EmailAddressInput, { autoComplete: field.autoComplete, defaultValue: field.value, onChange: field.onChange, ...field }, void 0));
        case Primitives.Image:
            return (_jsx(ImageInput, { defaultValue: field.value, onChange: field.onChange, ...field.properties, ...field }, void 0));
        case Primitives.JSON:
            return (_jsx(JSONEditor, { defaultValue: field.value, onChange: field.onChange, ...field }, void 0));
        case Primitives.LanguageCode:
            return (_jsx(LanguageInput, { defaultValue: field.value, onChange: field.onChange, ...field }, void 0));
        case Primitives.LongText:
            return (_jsx(LongTextInput, { defaultValue: field.value, onChange: field.onChange, ...field }, void 0));
        case Primitives.Menu:
            return (_jsx(DropdownInput, { defaultValue: field.value, onChange: field.onChange, ...field }, void 0));
        case Primitives.Number:
            return (_jsx(NumberInput, { defaultValue: field.value, onChange: field.onChange, ...field }, void 0));
        case Primitives.Password:
            return (_jsx(PasswordInput, { defaultValue: field.value, onChange: field.onChange, ...field }, void 0));
        case Primitives.PhoneNumber:
            return (_jsx(PhoneNumberInput, { defaultValue: field.value, onChange: field.onChange, ...field }, void 0));
        case Primitives.SSN:
            return (_jsx(SSNInput, { defaultValue: field.value, onChange: field.onChange, ...field }, void 0));
        case Primitives.String:
            return (_jsx(TextInput, { defaultValue: field.value, onChange: field.onChange, ...field }, void 0));
        case Primitives.UUID:
            return (_jsx(TextInput, { defaultValue: field.value, hidden: true, onChange: field.onChange, ...field }, void 0));
        case Primitives.VerificationCode:
            return (_jsx(VerificationCodeInput, { autoComplete: AutoComplete.OneTimeCode, 
                // @ts-ignore
                defaultValue: field.value, onChange: field.onChange, ...field }, void 0));
        default:
            // @ts-ignore
            return _jsxs(_Fragment, { children: [field.type, " is not supported at this time."] }, void 0);
    }
}
//# sourceMappingURL=inputs.js.map