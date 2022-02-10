import { memo, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
// @ts-ignore
import colorNamer from 'color-namer';
import hexRgb from 'hex-rgb';
import { HexColorPicker } from 'react-colorful';
import rgbHex from 'rgb-hex';

import { Color, InputProps } from '../../../../types';

export const defaultColors = [
  '244,67,54',
  '233,30,99',
  '156,39,176',
  '103,58,183',
  '63,81,181',
  '33,150,243',
  '3,169,244',
  '0,188,212',
  '0,150,136',
  '76,175,80',
  '139,195,74',
  '205,220,57',
  '255,235,59',
  '255,193,7',
  '255,152,0',
  '255,87,34',
  '121,85,72',
  '96,125,139',
];

type ColorInputProps = InputProps<HTMLDivElement, Color>;

export const ColorInput = memo(
  ({ defaultValue, onChange }: ColorInputProps): React.ReactElement => {
    const [value, setValue] = useState<Color | undefined>(defaultValue);
    const [colorName, setColorName] = useState(null);

    useEffect(() => {
      setColorName(colorNamer(`rgb(${value})`).pantone[0].name);

      if (value !== defaultValue) {
        if (onChange) onChange({ value });
      }
    }, [value]);

    return (
      <Container
        data-testid="color-picker"
        //  modal={modal}
      >
        {/* <ColorPreview modal={modal}>
        <ColorCircle color={value} />
      </ColorPreview> */}
        <ColorMenu
        // modal={modal}
        >
          <ColorName>{colorName}</ColorName>
          <PresetColors>
            {defaultColors.map((color, key) => {
              return (
                <PresetColor
                  onClick={() => setValue(color)}
                  color={color}
                  key={key}
                  selected={color === value}
                />
              );
            })}
          </PresetColors>
          <ColorMixer>
            <HexColorPicker
              color={rgbHex(value?.toString() ?? '')}
              onChange={(color: string) => {
                const rgb = hexRgb(color);

                setValue(`${rgb.red},${rgb.green},${rgb.blue}`);
              }}
            />
          </ColorMixer>
        </ColorMenu>
      </Container>
    );
  },
);

const ColorPreview = styled.div<{
  modal?: boolean;
}>`
  border-radius: 4px 4px 0 0;
  padding: 8px;
`;

const ColorMenu = styled.div<{
  modal?: boolean;
}>`
  background: white;

  border-radius: 12px 0 12px 12px;
  height: 250px;
  overflow: hidden;

  /* ${props =>
    props.modal &&
    css`
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
      display: none;
      position: absolute;
      right: 0;
      width: 220px;
      z-index: 10001;
    `}; */
`;

const Container = styled.div<{
  modal?: boolean;
}>`
  position: relative;

  ${props =>
    props.modal &&
    css`
      &:hover {
        ${ColorMenu} {
          display: block;
        }

        ${ColorPreview} {
          background: white;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
      }
    `};
`;

const ColorName = styled.div`
  color: #5b5b5b;
  font-size: 12px;
  font-weight: 600;
  height: 20px;
  padding: 8px 0;
  text-align: center;
`;

const PresetColors = styled.div`
  height: 60px;
  padding: 9px 4px 9px 9px;
`;

const PresetColor = styled.button<{
  selected?: boolean;
}>`
  background: transparent;
  border-radius: 18px;
  border: ${props =>
    props.selected
      ? `4px solid rgba(${props.color}, 1)`
      : `9px solid rgba(${props.color}, 1)`};
  cursor: pointer;
  float: left;
  height: 18px;
  outline: none;
  margin: 0 5px 5px 0;
  transform: scale(1);
  transition: border 0.2s ease-in-out, transform 0.2s ease-in-out;
  width: 18px;

  &:hover {
    transform: scale(1.2);
  }
`;

const ColorMixer = styled.div`
  height: 190px;
  width: 100%;

  .react-colorful {
    height: 170px;
    width: 220px;
  }
  .react-colorful__saturation {
    border-radius: 3px 3px 0 0;
  }
  .react-colorful__hue {
    height: 30px;
    border-radius: 0 0 3px 3px;
  }
  .react-colorful__saturation-pointer {
    border-radius: 15px;
    height: 15px;
    width: 15px;
  }
  .react-colorful__hue-pointer {
    border-radius: 15px;
    height: 15px;
    width: 15px;
  }
`;

// const ColorCircle = styled.div`
//   background: transparent;
//   border: 5px solid rgba(${props => props.color}, 1);
//   border-radius: 24px;
//   height: 24px;
//   position: relative;
//   width: 24px;
//   z-index: 10000;
// `;
