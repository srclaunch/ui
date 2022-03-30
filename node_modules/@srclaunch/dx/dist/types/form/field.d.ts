import { CountryCode, CurrencyAmount, CurrencyCode, Date, DateTime, EmailAddress, Image, JSONObject, LanguageCode, LongText, Password, PhoneNumber, Primitive, Primitives, SSN, UUID, VerificationCode } from '@srclaunch/types';
import { ImageInputProps } from '../../components/forms/inputs/media/ImageInput';
import { Events, InputValueChangeHandler } from '../events';
import { Validation } from '../validation';
import { AutoComplete } from './input';
export declare type CommonFormFieldProps = {
    readonly hidden?: boolean;
    readonly label?: string;
    readonly name: string;
    readonly properties?: Record<string, any>;
    readonly validation?: Validation;
};
export declare type FormFieldValueProps<T extends Primitive | readonly Primitive[], P = Record<string, unknown>> = {
    readonly defaultValue?: T;
    readonly onChange?: InputValueChangeHandler<T>;
    readonly events?: Events<T>;
    readonly system?: boolean;
    readonly value?: T;
} & P;
export declare type FormField = CommonFormFieldProps & (FormFieldValueProps<boolean, {
    readonly type: Primitives.Boolean;
}> | FormFieldValueProps<CountryCode, {
    readonly type: Primitives.CountryCode;
}> | FormFieldValueProps<CurrencyCode, {
    readonly type: Primitives.CurrencyCode;
}> | FormFieldValueProps<CurrencyAmount, {
    readonly type: Primitives.CurrencyAmount;
}> | FormFieldValueProps<Date, {
    readonly type: Primitives.Date;
}> | FormFieldValueProps<DateTime, {
    readonly type: Primitives.DateTime;
}> | FormFieldValueProps<EmailAddress, {
    readonly autoComplete?: AutoComplete.Username | AutoComplete.EmailAddress;
    readonly type: Primitives.EmailAddress;
}> | FormFieldValueProps<(File | Image)[], {
    readonly properties: ImageInputProps;
    readonly type: Primitives.Image;
}> | FormFieldValueProps<JSONObject, {
    readonly type: Primitives.JSON;
}> | FormFieldValueProps<LanguageCode, {
    readonly type: Primitives.LanguageCode;
}> | FormFieldValueProps<LongText, {
    readonly type: Primitives.LongText;
}> | FormFieldValueProps<Primitive, {
    readonly type: Primitives.Menu;
}> | FormFieldValueProps<number, {
    readonly type: Primitives.Number;
}> | FormFieldValueProps<Password, {
    readonly type: Primitives.Password;
    readonly autoComplete?: AutoComplete.CurrentPassword | AutoComplete.NewPassword;
}> | FormFieldValueProps<PhoneNumber, {
    readonly type: Primitives.PhoneNumber;
    readonly autoComplete?: AutoComplete.PhoneNumber;
}> | FormFieldValueProps<SSN, {
    readonly type: Primitives.SSN;
}> | FormFieldValueProps<string, {
    readonly autoComplete?: AutoComplete.GivenName | AutoComplete.FamilyName;
    readonly type: Primitives.String;
}> | FormFieldValueProps<UUID, {
    readonly type: Primitives.UUID;
}> | FormFieldValueProps<VerificationCode, {
    readonly autoComplete?: AutoComplete.OneTimeCode;
    readonly type: Primitives.VerificationCode;
}>);
//# sourceMappingURL=field.d.ts.map