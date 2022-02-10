import { memo, ReactElement } from 'react';
import {
  useDispatch,
  useSelector,
  setTheme,
  RootState,
} from '@srclaunch/state';
import {
  DropdownInput,
  DropdownInputProps,
} from '../forms/inputs/menu/DropdownInput';
import { Theme } from '@srclaunch/types';
import { Container } from '../layout/Container';
import { InputLabel } from '../forms/labels/InputLabel';
import { ContainerProps } from '../layout/Container';

export type ThemeSelectorProps = ContainerProps<
  HTMLDivElement,
  DropdownInputProps
>;

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
          placeholder={'Choose a theme'}
          {...props}
        />
      </Container>
    );
  },
);
