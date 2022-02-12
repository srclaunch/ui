export enum Cursor {
  Auto = 'auto',
  Crosshair = 'crosshair',
  Default = 'default',
  Help = 'help',
  Move = 'move',
  NotAllowed = 'not-allowed',
  Pointer = 'pointer',
  Resize = 'resize',
  ResizeTopLeft = 'resize-nw',
  ResizeTop = 'resize-top',
  ResizeTopRight = 'resize-ne',
  ResizeRight = 'resize-right',
  ResizeBottomRight = 'resize-se',
  ResizeBottom = 'resize-bottom',
  ResizeBottomLeft = 'resize-sw',
  ResizeLeft = 'resize-left',
  Text = 'text',
  Wait = 'wait',
}

export type CursorProps = {
  readonly cursor?: Cursor | string;
};
