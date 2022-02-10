import { ReactElement } from 'react';
import { PaymentMethod, User } from '@srclaunch/types';
declare type PaymentMethodModalProps = {
    paymentMethods: PaymentMethod[];
    premium: User['membership'];
    visible: boolean;
};
export declare const PaymentMethodModal: import("react").MemoExoticComponent<({ paymentMethods, premium, visible, }: PaymentMethodModalProps) => ReactElement>;
export {};
//# sourceMappingURL=PaymentMethodModal.d.ts.map