import { ReactElement, ElementType } from 'react';
import { Size } from '../../index';

export type Component = {
  component?: ElementType;
  components?: Component[];
  description?: string;
  examples?: [
    {
      code?: string;
      description?: string;
      properties?: Record<string, any>;
      render?: () => ReactElement;
      size?: Size;
      title: string;
    },
  ];
  name?: string;
  path: string;
  properties?: {
    [key: string]: {
      types: string[];
      required?: boolean;
    };
  };
  title: string;
};

export type ComponentLibrary = {
  name: string;
  description?: string;
  components?: Component[];
};
