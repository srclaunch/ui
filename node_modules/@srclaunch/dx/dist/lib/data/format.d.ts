import { CurrencyCode } from '@srclaunch/types';
export declare enum Formatter {
    Currency = "currency"
}
export declare type FormatterProps = {
    formatter: Formatter;
    options?: FormatterOptions;
};
export declare type FormatterOptions = {
    currency?: CurrencyCode;
};
export declare function formatValue(value: any, { formatter, options }: FormatterProps): any;
//# sourceMappingURL=format.d.ts.map