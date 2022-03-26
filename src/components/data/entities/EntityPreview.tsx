// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { memo, ReactElement } from 'react';
import { Model } from '@srclaunch/types';

import { LoadingOverlay } from '../../progress/LoadingOverlay';
import { Container } from '../../layout/Container';

// import Edit from './Edit';
// import AccountMoreMenu from './MoreMenu';
// import New from './New';
// import Preview from './Preview';

export const EntityPreview = memo(
  ({ id, model }: { id?: string; model: Model }): ReactElement => {
    return (
      <Container data-testid="account-pane">
        <LoadingOverlay
          states={{
            state: {
              visible: false,
            },
          }}
        />
      </Container>
    );
  },
);
