import { ValidationProblem } from '@srclaunch/types';
import { validate } from '@srclaunch/validation';
import { memo, ReactElement, useEffect, useRef, useState } from 'react';
import {
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  Depth,
  DepthShadow,
  Sizes,
} from '../../../../types';
import { Container, ContainerProps } from '../../../layout/Container';
import { Menu, MenuProps } from '../../../menus/Menu';
import { MenuItemProps } from '../../../menus/MenuItem';

import { InputLabel } from '../../labels/InputLabel';
import { DropdownControl } from '../shared/DropdownControl';
import { DropdownPanel } from '../shared/DropdownPanel';
import { InputProps } from '../shared/Input';

export type DropdownInputProps<V = unknown> = ContainerProps &
  MenuProps &
  InputProps<V>;

export const DropdownInput = memo(
  ({
    background = {},
    border = {},
    borderRadius = {},
    className = '',
    defaultValue,
    events = {},
    label,
    menu,
    name,
    padding = {},
    placeholder,
    size = {},
    validation,
    ...props
  }: DropdownInputProps): ReactElement => {
    // const [value, setValue] = useState(defaultValue);
    const [focused, setFocused] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const menuVisibleRef = useRef(menuVisible);
    menuVisibleRef.current = false;
    const [problems, setProblems] = useState<ValidationProblem[]>([]);
    const [item, setItem] = useState<MenuItemProps | undefined>(
      menu?.find((i: MenuItemProps) => i.value === defaultValue),
    );
    const [valueChanged, setValueChanged] = useState(false);

    // useEffect(() => {
    //   if (onChange && item)
    //     onChange({
    //       value: item.value as CountryCode | CurrencyCode | LanguageCode,
    //     });
    // }, [item]);

    useEffect(() => {
      if (valueChanged) {
        if (validation && validation?.conditions) {
          const probs = validate(item, validation.conditions);

          setProblems(probs);

          if (events.input?.onValueChange)
            events.input.onValueChange({
              validation: {
                problems: probs,
                validated: probs.length === 0,
              },
              value: item?.value,
            });
        } else {
          if (events.input?.onValueChange)
            events.input.onValueChange({
              value: item?.value,
            });
        }
      }
    }, [item]);

    useEffect(() => {
      setItem(
        menu?.find((i: MenuItemProps) => i.value === defaultValue) ??
          item ??
          undefined,
      );
    }, [defaultValue]);

    return (
      <>
        {(label || problems.length > 0) && (
          <InputLabel states={{ state: { error: problems } }}>
            {label}
          </InputLabel>
        )}

        <Container
          borderRadius={{ all: Amount.Least, ...borderRadius }}
          className={`${className} dropdown-input`}
          depth={menuVisible ? Depth.Higher : Depth.Surface}
          events={{
            mouse: {
              onMouseLeave: () => setMenuVisible(false),
            },
          }}
          size={{
            height: Sizes.Default,
            maxWidth: 300,
            minWidth: 240,
            ...size,
          }}
          shadow={menuVisible ? DepthShadow.Higher : DepthShadow.Surface}
          {...props}
        >
          <DropdownControl
            background={{ color: BackgroundColors.DropdownMenu, ...background }}
            border={{
              all: {
                color: BorderColors.InputControl,
                style: BorderStyle.Solid,
                width: 1,
              },
              ...border,
            }}
            component={item?.component}
            depth={Depth.High}
            events={{
              focus: {
                onBlur: () => {
                  setFocused(false);
                },
                onFocus: () => setFocused(true),
              },
              mouse: {
                onClick: () => {
                  menuVisibleRef.current = !menuVisibleRef.current;
                  setMenuVisible(!menuVisible);
                },
              },
            }}
            icon={item?.icon}
            label={item?.label}
            name={name}
            placeholder={placeholder}
            shadow={DepthShadow.Low}
            states={{ state: { error: problems, focused } }}
            size={{
              height: Sizes.Default,
              ...size,
            }}
          />

          <DropdownPanel
            background={{ color: BackgroundColors.DropdownMenu, ...background }}
            border={{
              all: {
                color: BorderColors.InputControl,
                style: BorderStyle.Solid,
                width: 1,
              },
              top: {
                color: BorderColors.Transparent,
                style: BorderStyle.Solid,
                width: 0,
              },
              ...border,
            }}
            borderRadius={{
              all: Amount.Least,
              // topLeft: Amount.None,
              // topRight: Amount.None,
              ...borderRadius,
            }}
            padding={padding}
            position={{ top: `calc(${Sizes.Default} - 0px)` }}
            size={{
              height: Sizes.Default,
              maxWidth: 300,
              minWidth: 240,
              ...size,
            }}
            states={{ state: { focused, visible: menuVisible } }}
          >
            <Menu
              background={{
                color: BackgroundColors.Lightest,
              }}
              borderRadius={{ all: Amount.Least, ...borderRadius }}
              menu={menu}
              onItemClick={i => {
                setValueChanged(true);
                setItem(i);
                menuVisibleRef.current = false;
                setMenuVisible(false);
              }}
              padding={padding}
            />
          </DropdownPanel>
        </Container>
      </>
    );
  },
);
