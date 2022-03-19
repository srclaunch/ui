import { ElementType } from 'react';
export declare type Component = {
    component?: ElementType;
    components?: Component[];
    description?: string;
    examples?: [
        {
            code?: string;
            description?: string;
            properties?: Record<string, any>;
            title: string;
        }
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
export declare type ComponentLibrary = {
    name: string;
    description?: string;
    components?: Component[];
};
//# sourceMappingURL=component.d.ts.map