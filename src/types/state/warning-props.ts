import { Warning } from '@srclaunch/exceptions';

export type WarningProps<P = {}> = {
  warning?: Warning;
} & P;
