import { Activities } from '@srclaunch/types';

export function getActivityLabel(activity?: Activities) {
  switch (activity) {
    case Activities.Comment:
      return 'commented';
    case Activities.Create:
      return 'created';
    case Activities.Delete:
      return 'deleted';
    case Activities.Edit:
      return 'edited';
    case Activities.Invoice:
      return 'invoiced';
    case Activities.Message:
      return 'messaged';
    case Activities.PageView:
      return 'viewed';
    case Activities.Paid:
      return 'paid';
    case Activities.Payment:
      return 'paid';
    case Activities.Purchase:
      return 'purchased';
    case Activities.Referral:
      return 'referred';
    case Activities.Renewal:
      return 'renewed';
    case Activities.Signup:
      return 'signed up';
    case Activities.Subscription:
      return 'subscribed';
    case Activities.Upgrade:
      return 'upgraded';
    default:
      return activity;
  }
}
