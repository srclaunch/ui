import { CurrencyCode } from '@srclaunch/types';
export declare function getDigitsFromValue(value?: string): string;
export declare function padDigits(digits: string): number;
export declare function removeLeadingZeros(number: string | number): string;
export declare function addDecimalToNumber(number: number, separator: string): string;
export declare function toCurrency(value: number, separator?: string): string;
export declare function formatCurrency({ amount, currency, }: {
    amount: number;
    currency: CurrencyCode;
}): string;
//# sourceMappingURL=index.d.ts.map