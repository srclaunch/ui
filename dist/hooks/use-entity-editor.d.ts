import { Model } from '@srclaunch/types';
export declare function useEntityEditor(): {
    entity: ({
        [f: string]: unknown;
    } & {
        id?: string | undefined;
    }) | undefined;
    hideEntityEditor: () => void;
    mode: {
        edit: false;
        new: false;
        view: false;
    } | {
        edit: true;
        new: false;
        view: false;
    } | {
        edit: false;
        new: true;
        view: false;
    } | {
        edit: false;
        new: false;
        view: true;
    };
    model: Model | null;
    showEntityEditor: ({ edit, new: new_, set, view, id, }: {
        edit?: string | undefined;
        new?: string | undefined;
        id?: string | undefined;
        set?: Record<string, string> | undefined;
        view?: string | undefined;
    }) => void;
};
//# sourceMappingURL=use-entity-editor.d.ts.map