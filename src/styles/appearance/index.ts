import { css } from 'styled-components';

import { AppearanceProps } from '../../types';
import { AnimationStyles } from '../animation/index';
import { BackgroundStyles } from './background';
import { BorderStyles } from './border';
import { BorderRadiusStyles } from './border-radius';
import { BoxShadowStyles } from './box-shadow';
import { CursorStyles } from './cursor';
import { TranslucencyStyles } from './translucency';

export const AppearanceStyles = css<AppearanceProps>`
  ${AnimationStyles};
  ${BackgroundStyles};
  ${BorderStyles};
  ${BorderRadiusStyles};
  ${BoxShadowStyles};
  ${CursorStyles};
  ${TranslucencyStyles};

  transition: opacity 0.13s ease-in-out, background 0.13s ease-in-out,
    background-color 0.13s ease-in-out, border-radius 0.13s ease-in-out,
    border-bottom-left-radius 0.13s ease-in-out,
    border-bottom-right-radius 0.13s ease-in-out,
    border-top-left-radius 0.13s ease-in-out,
    border-top-right-radius 0.13s ease-in-out, border 0.13s ease-in-out,
    border-color 0.13s ease-in-out, box-shadow 0.13s ease-in-out,
    color 0.13s ease-in, transform 0.13s ease-in-out;
`;
