import {
  CountryCode,
  CurrencyCode,
  LanguageCode,
  Menu as MenuType,
  Primitive,
  Primitives,
  ValidationProblem,
} from '@srclaunch/types';
import { validate } from '@srclaunch/validation';
import { memo, ReactElement, useEffect, useState } from 'react';

import {
  Align,
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  CommonComponentProps,
  Depth,
  DepthShadow,
  InputProps,
  Orientation,
  Size,
  SizeProps,
  TextColors,
} from '../../../../types';
import { ErrorLabel } from '../../../errors/ErrorLabel';
import { Container, ContainerProps } from '../../../layout/Container';
import { Menu, MenuProps } from '../../../menus/Menu';
import { MenuItemProps } from '../../../menus/MenuItem';
import { LabelProps } from '../../../typography/Label';
import { InputLabel } from '../../labels/InputLabel';
import { DropdownControl } from '../shared/DropdownControl';
import { DropdownPanel } from '../shared/DropdownPanel';

export type DropdownInputProps<V = any> = InputProps<HTMLSelectElement, V> &
  MenuProps;

export const DropdownInput = memo(
  ({
    backgroundColor = BackgroundColors.DropdownMenu,
    border = {
      color: BorderColors.InputControl,
      style: BorderStyle.Solid,
      width: 1,
    },
    borderRadius = Amount.Least,
    className = '',
    defaultValue,
    label,
    menu,
    maxWidth = 300,
    minWidth = 240,
    name,
    onChange,
    padding = 5,
    placeholder,
    size = Size.Default,
    validation,
    ...props
  }: DropdownInputProps): ReactElement => {
    // const [value, setValue] = useState(defaultValue);
    const [focused, setFocused] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
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
      if (validation && valueChanged) {
        const probs = validate(item, validation);

        setProblems(probs);

        if (onChange)
          onChange({
            problems: probs,
            validated: probs.length === 0,
            value: item?.value,
          });
      } else {
        setProblems([]);

        if (onChange)
          onChange({
            problems: [],
            validated: true,
            value: item?.value,
          });
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
          <InputLabel error={problems}>{label}</InputLabel>
        )}

        <Container
          boxShadow={menuVisible ? DepthShadow.Higher : DepthShadow.Surface}
          borderRadius={borderRadius}
          className={`${className} dropdown-input`}
          depth={menuVisible ? Depth.Higher : Depth.Surface}
          grow={false}
          minWidth={minWidth}
          orientation={Orientation.Vertical}
          onMouseLeave={() => setMenuVisible(false)}
          height={size}
          {...props}
        >
          <DropdownControl
            backgroundColor={backgroundColor}
            border={border}
            boxShadow={DepthShadow.Low}
            component={item?.component}
            depth={Depth.High}
            error={problems}
            focused={focused}
            icon={item?.icon}
            label={item?.label}
            menuVisible={menuVisible}
            name={name}
            onBlur={() => {
              setFocused(false);
            }}
            onFocus={() => setFocused(true)}
            onClick={() => setMenuVisible(!menuVisible)}
            placeholder={placeholder}
            size={size}
          />

          <DropdownPanel
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            focused={focused}
            padding={padding}
            visible={menuVisible}
          >
            <Menu
              backgroundColor={BackgroundColors.Light}
              borderRadius={borderRadius}
              menu={menu}
              onItemClick={i => {
                setValueChanged(true);
                setItem(i);
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
