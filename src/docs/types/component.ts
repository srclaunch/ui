import { ElementType } from 'react';

export type Component = {
  component?: ElementType;
  components?: Component[];
  description?: string;
  examples?: [
    {
      code?: string;
      description?: string;
      properties?: Record<string, any>;
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
