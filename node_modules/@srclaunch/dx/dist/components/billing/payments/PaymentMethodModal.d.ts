import { PaymentMethod, User } from '@srclaunch/types';
import { ReactElement } from 'react';
declare type PaymentMethodModalProps = {
    readonly paymentMethods: readonly PaymentMethod[];
    readonly premium: User['membership'];
    readonly visible: boolean;
};
export declare const PaymentMethodModal: import("react").MemoExoticComponent<({ paymentMethods, premium, visible, }: PaymentMethodModalProps) => ReactElement>;
export {};
//# sourceMappingURL=PaymentMethodModal.d.ts.map