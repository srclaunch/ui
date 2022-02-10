import { memo, ReactElement, useEffect, useState } from 'react';
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

import {
  Align,
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  Depth,
  DepthShadow,
  DimensionProps,
  InputProps,
  Orientation,
  Size,
  SizeProps,
  TextColors,
} from '../../../../types';
import { Container, ContainerProps } from '../../../layout/Container';
import { DropdownPanel } from '../shared/DropdownPanel';
import { Menu, MenuProps } from '../../../menus/Menu';
import { MenuItemProps } from '../../../menus/MenuItem';
import { DropdownControl } from '../shared/DropdownControl';
import { TextProps } from '../../../typography/Text';
import { ErrorLabel } from '../../../errors/ErrorLabel';
import { InputLabel } from '../../labels/InputLabel';

export type DropdownInputProps<
  E = HTMLElement,
  T = any,
  P = {},
> = ContainerProps<E, InputProps<E, T, MenuProps<E, T, TextProps<E>>>> & P;

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
    textColor = TextColors.DropdownMenu,
    validation,
    ...props
  }: DropdownInputProps<any>): ReactElement => {
    // const [value, setValue] = useState(defaultValue);
    const [focused, setFocused] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [problems, setProblems] = useState<ValidationProblem[]>([]);
    const [item, setItem] = useState<MenuItemProps<any> | undefined>(
      menu?.find((i: MenuItemProps<any>) => i.value === defaultValue),
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
        menu?.find((i: MenuItemProps<Primitive>) => i.value === defaultValue) ??
          item ??
          undefined,
      );
    }, [defaultValue]);

    return (
      <>
        {(label || problems.length > 0) && (
          <InputLabel errorMessage={problems[0]?.message.short}>
            {label}
          </InputLabel>
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
            textColor={textColor}
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
              onClick={i => {
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
