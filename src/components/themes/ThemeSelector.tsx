import { Theme } from '@srclaunch/types';
import {
  RootState,
  setTheme,
  useDispatch,
  useSelector,
} from '@srclaunch/web-application-state';
import { memo, ReactElement } from 'react';

import { AlignVertical, Fill, Overflow } from '../../types';
import {
  DropdownInput,
  DropdownInputProps,
} from '../forms/inputs/menu/DropdownInput';
import { InputLabel } from '../forms/labels/InputLabel';
import { Container, ContainerProps } from '../layout/Container';

export type ThemeSelectorProps = ContainerProps &
  DropdownInputProps & {
    readonly showLabel?: boolean;
  };

export const ThemeSelector = memo(
  ({ showLabel = true, ...props }: ThemeSelectorProps): ReactElement => {
    const dispatch = useDispatch();

    const { current, list } = useSelector(
      (state: RootState) => state.ui.themes,
    );

    return (
      <>
        {showLabel && <InputLabel>Theme</InputLabel>}

        <DropdownInput
          defaultValue={current}
          events={{
            input: {
              onValueChange: ({ value }) => {
                const newTheme = list.find((t: Theme) => t.id === value);

                dispatch(setTheme(newTheme.id));
              },
            },
          }}
          name="theme"
          menu={list.map((i: Theme) => {
            return {
              label: i.name,
              value: i.id,
            };
          })}
          placeholder="Choose a theme"
          {...props}
        />
      </>
    );
  },
);
