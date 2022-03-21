import { ForwardedRef } from 'react';
import { Size } from '../appearance/size';
import { Visibility } from '../appearance/visibility';
import { CommonComponentProps } from '../component';
import { Events } from '../events';
import { Validation } from '../validation';

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

export enum InputType {
  Email = 'email',
  Text = 'text',
  Number = 'number',
  Password = 'password',
  Search = 'search',
}
