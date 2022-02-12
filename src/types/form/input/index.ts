import { ForwardedRef, MutableRefObject, Ref } from 'react';

import { FocusProps, InputValueChangeHandler } from '../..';
import { HeightProps, WidthProps } from '../../appearance/dimension';
import { SizeProps } from '../../appearance/size';
import { CommonComponentProps } from '../../component';
import { ClipboardEventProps } from '../../events/clipboard';
import { FocusEventProps } from '../../events/focus';
import { KeyboardEventProps } from '../../events/keyboard';
import { MouseEventProps } from '../../events/mouse';
import { ErrorProps } from '../../state/error-props';
import { ProgressProps } from '../../state/progress-props';
import { SuccessProps } from '../../state/success-props';
import { ValidationProps } from '../../state/validation-props';
import { WarningProps } from '../../state/warning-props';
import { TextColor } from '../../typography/text';
import { CommonFormFieldProps } from '../field';

export enum AutoComplete {
  Birthday = 'bday',
  BirthdayDay = 'bday-day',
  BirthdayMonth = 'bday-month',
  BirthdayYear = 'bday-year',
  Country = 'country',
  CountryName = 'country-name',
  CreditCardExpiration = 'cc-exp',
  CreditCardExpirationMonth = 'cc-exp-month',
  CreditCardExpirationYear = 'cc-exp-year',
  CreditCardName = 'cc-name',
  CreditCardNumber = 'cc-number',
  CreditCardSecurityCode = 'cc-csc',
  CreditCardType = 'cc-type',
  CurrentPassword = 'current-password',
  EmailAddress = 'email',
  GivenName = 'given-name',
  Language = 'language',
  FamilyName = 'family-name',
  NewPassword = 'new-password',
  OneTimeCode = 'one-time-code',
  Organization = 'organization',
  PhoneNumber = 'tel',
  PostalCode = 'postal-code',
  Sex = 'sex',
  StreetAddress = 'street-address',
  Username = 'username',
}

export type InputProps<E = HTMLInputElement, V = string> = {
  readonly autoComplete?: AutoComplete;
  readonly defaultValue?: V;
  readonly hidden?: boolean;
  readonly label?: string;
  readonly name?: string;
  readonly onChange?: InputValueChangeHandler<V>;
  readonly placeholder?: string;
  readonly ref?: ForwardedRef<E>;
  readonly required?: boolean;
  readonly submitOnEnter?: boolean;
  readonly value?: V;
} & CommonComponentProps<E> &
  ClipboardEventProps<E> &
  ErrorProps &
  HeightProps &
  ProgressProps &
  SizeProps &
  SuccessProps &
  ValidationProps &
  WarningProps &
  WidthProps;
