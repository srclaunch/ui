import {
  CountryCode,
  CurrencyAmount,
  CurrencyCode,
  Date,
  DateTime,
  EmailAddress,
  Image,
  JSONObject,
  LanguageCode,
  LongText,
  ModelField,
  Password,
  PhoneNumber,
  Primitive,
  Primitives,
  SSN,
  UUID,
  VerificationCode,
} from '@srclaunch/types';

import { ImageInputProps } from '../../components/forms/inputs/media/ImageInput';
import { MenuItemProps } from '..';
import { InputValueChangeHandler } from '../events/input';
import { ErrorProps } from '../state/error-props';
import { ValidationProps } from '../state/validation-props';
import { AutoComplete } from './input';

export type CommonFormFieldProps<P = {}> = ErrorProps<
  ValidationProps<Omit<ModelField, 'name'>> & {
    readonly hidden?: boolean;
    readonly name: string;
    readonly properties?: Record<string, any>;
  }
> &
  P;

export type FormFieldValueProps<
  T extends Primitive | readonly Primitive[],
  P = Record<string, unknown>,
> = {
  readonly defaultValue?: T;
  readonly onChange?: InputValueChangeHandler<T>;
  readonly value?: T;
} & P;

export type FormField = CommonFormFieldProps<
  | FormFieldValueProps<boolean, { readonly type: Primitives.Boolean }>
  | FormFieldValueProps<
      CountryCode,
      {
        readonly type: Primitives.CountryCode;
      }
    >
  | FormFieldValueProps<
      CurrencyCode,
      {
        readonly type: Primitives.CurrencyCode;
      }
    >
  | FormFieldValueProps<
      CurrencyAmount,
      {
        readonly type: Primitives.CurrencyAmount;
      }
    >
  | FormFieldValueProps<Date, { readonly type: Primitives.Date }>
  | FormFieldValueProps<DateTime, { readonly type: Primitives.DateTime }>
  | FormFieldValueProps<
      EmailAddress,
      {
        readonly autoComplete?:
          | AutoComplete.Username
          | AutoComplete.EmailAddress;
        readonly type: Primitives.EmailAddress;
      }
    >
  | FormFieldValueProps<
      readonly (File | Image)[],
      { readonly properties: ImageInputProps; readonly type: Primitives.Image }
    >
  | FormFieldValueProps<JSONObject, { readonly type: Primitives.JSON }>
  | FormFieldValueProps<
      LanguageCode,
      {
        readonly type: Primitives.LanguageCode;
      }
    >
  | FormFieldValueProps<
      LongText,
      {
        readonly type: Primitives.LongText;
      }
    >
  | FormFieldValueProps<Primitive, { readonly type: Primitives.Menu }>
  | FormFieldValueProps<
      number,
      {
        readonly type: Primitives.Number;
      }
    >
  | FormFieldValueProps<
      Password,
      {
        readonly type: Primitives.Password;
        readonly autoComplete?:
          | AutoComplete.CurrentPassword
          | AutoComplete.NewPassword;
      }
    >
  | FormFieldValueProps<
      PhoneNumber,
      {
        readonly type: Primitives.PhoneNumber;
        readonly autoComplete?: AutoComplete.PhoneNumber;
      }
    >
  | FormFieldValueProps<
      SSN,
      {
        readonly type: Primitives.SSN;
      }
    >
  | FormFieldValueProps<
      string,
      {
        readonly autoComplete?:
          | AutoComplete.GivenName
          | AutoComplete.FamilyName;
        readonly type: Primitives.String;
      }
    >
  | FormFieldValueProps<
      UUID,
      {
        readonly type: Primitives.UUID;
      }
    >
  | FormFieldValueProps<
      VerificationCode,
      {
        readonly autoComplete?: AutoComplete.OneTimeCode;
        readonly type: Primitives.VerificationCode;
      }
    >
>;
