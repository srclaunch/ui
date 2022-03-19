import { ReactEventHandler } from 'react';
import { Events } from '../types';

export function getEventHandlers(events: Events): {
  [key: string]: ReactEventHandler;
} {
  const entries = [...Object.entries(events)];

  let handlers: { [handler: string]: ReactEventHandler } = {};

  for (const entry of entries) {
    for (const handler of [...Object.entries(entry[1])]) {
      if (handler[0] !== 'disbled' && handler[0] !== 'onValueChange') {
        handlers = { ...handlers, [handler[0]]: handler[1] };
      }
    }
  }

  return handlers;
}
