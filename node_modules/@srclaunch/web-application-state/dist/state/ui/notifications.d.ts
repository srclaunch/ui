import { Notification } from '../../types/notification';
import { AppThunk } from '../../index';
export declare function addToastNotification({ color, icon, message, timed, seconds, }: {
    color: string;
    icon: string;
    message: string;
    timed: boolean;
    seconds: number;
}): AppThunk;
declare const _default: import("redux").Reducer<import("@reduxjs/toolkit").EntityState<Notification>, import("redux").AnyAction>;
export default _default;
//# sourceMappingURL=notifications.d.ts.map