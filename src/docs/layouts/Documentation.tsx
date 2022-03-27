import { DualLightIcons } from '@srclaunch/icons';
import { useNavigate } from '@srclaunch/web-application-state';
import { memo, ReactElement } from 'react';

import { Container, ContainerProps } from '../../components/layout/Container';
import { Spacer } from '../../components/layout/Spacer';
import { MenuItemProps } from '../../components/menus/MenuItem';

import {
  Alignment,
  AlignVertical,
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  Fill,
  Icon,
  Label,
  NavigationMenu,
  Orientation,
  Overflow,
  Size,
  TextColors,
  TextSize,
  TextWeight,
  ThemeSelector,
  Title,
} from '../../index';
import { AlignHorizontal } from '../../types';
import componentLibrary from '../component-library';
{
  /* <Workspace>
          <WorkspaceFooter>
            <FooterLinks>
              <Link
                label="Get Help"
                name="Workspace Footer > Get Help"
                to="https://srclaunch.com/help"
                target="_blank"
                rel="noreferrer"
              />
              <i>&bull;</i>
              <Link
                label="Privacy Policy"
                name="Workspace Footer > Privacy Policy"
                to="https://srclaunch.com/privacy"
                target="_blank"
                rel="noreferrer"
              />
            </FooterLinks>
            <Trademark>
              <Small text="&copy; 2021 SrcLaunch LLC" />
            </Trademark>
          </WorkspaceFooter>
        </Workspace> */
}

export const Documentation = memo(
  ({ children }: ContainerProps): ReactElement => {
    return (
      <Container
        background={{ color: BackgroundColors.Darker }}
        className="documentation-layout"
        size={{
          fill: Fill.Both,
        }}
      >
        <Container
          alignment={{
            orientation: Orientation.Horizontal,
            vertical: AlignVertical.Center,
          }}
          background={{ color: BackgroundColors.Lightest }}
          border={{
            bottom: {
              color: BorderColors.Default,
              style: BorderStyle.Solid,
              width: 1,
            },
          }}
          className="navigation-bar"
          padding={{
            all: Amount.Least,
            left: Amount.Default,
            right: Amount.Default,
          }}
        >
          <Title>AppLab Component Docs</Title>

          <Spacer />

          <ThemeSelector size={{ width: 200 }} />
        </Container>

        <Container
          className="bottom"
          alignment={{ orientation: Orientation.Horizontal }}
          size={{
            fill: Fill.Both,
          }}
        >
          <NavigationMenu
            menu={[
              ...(componentLibrary.components?.map(component => {
                return {
                  label: component.title,
                  to: component.path,
                };
              }) as MenuItemProps[]),
            ]}
          />

          <Container size={{ fill: Fill.Both }}>{children}</Container>
        </Container>
      </Container>
    );
  },
);

// const WorkspaceFooter = styled.div`
//   bottom: 0;
//   left: 0;
//   padding: 10px 15px;
//   right: 0;
//   text-align: center;
//   width: 100%;

//   &:after {
//     clear: both;
//     content: '';
//     display: block;
//   }
// `;

// const Trademark = styled.div`
//   color: #aaa;
//   font-size: 12px;
//   line-height: 18px;
// `;

// const FooterLinks = styled.div`
//   line-height: 18px;
//   margin: 50px 0 10px 0;

//   a {
//     /* color: #9b9b9b; */
//     display: inline-block;
//     font-size: 13px;
//     font-weight: 600;
//     line-height: 18px;
//     vertical-align: top;
//     text-decoration: none;

//     &:hover {
//       color: #5b5b5b;
//       text-decoration: underline;
//     }
//   }

//   i {
//     display: inline-block;
//     font-style: normal;
//     color: #aaa;
//     line-height: 18px;
//     padding: 0 8px;
//   }
// `;
