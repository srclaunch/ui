import { ValidationProblem } from '@srclaunch/types';
import { validate } from '@srclaunch/validation';
import { memo, ReactElement, useEffect, useState } from 'react';

import {
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  Depth,
  DepthShadow,
  InputProps,
  Orientation,
  Overflow,
  Sizes,
} from '../../../../types';
import { ErrorLabel } from '../../../errors/ErrorLabel';
import { Container, ContainerProps } from '../../../layout/Container';
import { Menu, MenuProps } from '../../../menus/Menu';
import { MenuItemProps } from '../../../menus/MenuItem';
import { LabelProps } from '../../../typography/Label';
import { InputLabel } from '../../labels/InputLabel';
import { DropdownControl } from '../shared/DropdownControl';
import { DropdownPanel } from '../shared/DropdownPanel';

export type DropdownInputProps<V = any> = ContainerProps &
  InputProps<HTMLSelectElement, V> &
  MenuProps;

export const DropdownInput = memo(
  ({
    background = {},
    border = {},
    borderRadius = {},
    className = '',
    defaultValue,
    label,
    menu,
    name,
    onChange,
    padding = {},
    placeholder,
    size = {},
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
          alignment={{
            overflow: Overflow.Visible,
          }}
          borderRadius={{ all: Amount.Least, ...borderRadius }}
          className={`${className} dropdown-input`}
          depth={menuVisible ? Depth.Higher : Depth.Surface}
          onMouseLeave={() => setMenuVisible(false)}
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
            shadow={DepthShadow.Low}
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
                color: BorderColors.InputControl,
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
            focused={focused}
            padding={padding}
            position={{ top: `calc(${Sizes.Default} - 0px)` }}
            size={{
              height: Sizes.Default,
              maxWidth: 300,
              minWidth: 240,
              ...size,
            }}
            visible={menuVisible}
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
