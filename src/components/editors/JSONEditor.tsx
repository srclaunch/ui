import { memo, ReactElement } from 'react';
import { JSONObject } from '@srclaunch/types';
import { InputProps } from '../../types';

type JSONEditorProps = InputProps<HTMLDivElement, JSONObject>;

export const JSONEditor = memo(
  ({ ...props }: JSONEditorProps): ReactElement => {
    return <div>{'JSONEditor'}</div>;
  },
);
