import { Size } from '../appearance/size';
import { Visibility } from '../appearance/visibility';
import { Events } from '../events';
import { Validation } from '../validation';
export declare enum AutoComplete {
    Birthday = "bday",
    BirthdayDay = "bday-day",
    BirthdayMonth = "bday-month",
    BirthdayYear = "bday-year",
    Country = "country",
    CountryName = "country-name",
    CreditCardExpiration = "cc-exp",
    CreditCardExpirationMonth = "cc-exp-month",
    CreditCardExpirationYear = "cc-exp-year",
    CreditCardName = "cc-name",
    CreditCardNumber = "cc-number",
    CreditCardSecurityCode = "cc-csc",
    CreditCardType = "cc-type",
    CurrentPassword = "current-password",
    EmailAddress = "email",
    GivenName = "given-name",
    Language = "language",
    FamilyName = "family-name",
    NewPassword = "new-password",
    OneTimeCode = "one-time-code",
    Organization = "organization",
    PhoneNumber = "tel",
    PostalCode = "postal-code",
    Sex = "sex",
    StreetAddress = "street-address",
    Username = "username"
}
export declare type InputProps<V> = {
    readonly autoComplete?: AutoComplete;
    readonly defaultValue?: V;
    readonly events?: Events<V>;
    readonly label?: string;
    readonly name?: string;
    readonly placeholder?: string;
    readonly size?: Size;
    readonly submitOnEnter?: boolean;
    readonly validation?: Validation;
    readonly value?: V;
    readonly visibility?: Visibility;
};
//# sourceMappingURL=input.d.ts.map