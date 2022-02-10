import { memo, ReactElement } from 'react';

type MarkdownEditorProps = {
  value: string;
  onChange: (value: string) => void;
};

export const MarkdownEditor = memo(
  ({ ...props }: MarkdownEditorProps): ReactElement => {
    return <div />;
  },
);
