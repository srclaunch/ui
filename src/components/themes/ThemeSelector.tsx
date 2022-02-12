import { Theme } from '@srclaunch/types';
import {
  RootState,
  setTheme,
  useDispatch,
  useSelector,
} from '@srclaunch/web-application-state';
import { memo, ReactElement } from 'react';

import {
  DropdownInput,
  DropdownInputProps,
} from '../forms/inputs/menu/DropdownInput';
import { InputLabel } from '../forms/labels/InputLabel';
import { Container, ContainerProps } from '../layout/Container';

export type ThemeSelectorProps = ContainerProps<HTMLDivElement> &
  DropdownInputProps;

export const ThemeSelector = memo(
  ({ ...props }: ThemeSelectorProps): ReactElement => {
    const dispatch = useDispatch();

    const { current, list } = useSelector(
      (state: RootState) => state.ui.themes,
    );

    return (
      <Container>
        <InputLabel>Theme</InputLabel>

        <DropdownInput
          defaultValue={current}
          name="theme"
          menu={list.map((i: Theme) => {
            return {
              label: i.name,
              value: i.id,
            };
          })}
          onChange={({ value }) => {
            const newTheme = list.find((t: Theme) => t.id === value);

            dispatch(setTheme(newTheme.id));
          }}
          placeholder="Choose a theme"
          {...props}
        />
      </Container>
    );
  },
);
