import { DualLightIcons } from '@srclaunch/icons';
import { useNavigate } from '@srclaunch/web-application-state';

import {
  Align,
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  Container,
  ContainerProps,
  FillBehavior,
  Icon,
  Label,
  NavigationMenu,
  Orientation,
  Overflow,
  Size,
  TextColors,
  TextSize,
  TextWeight,
} from '../../index';

import { memo, ReactElement } from 'react';

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

type DocumentationProps = ContainerProps;

export const Documentation = memo(
  ({ children }: DocumentationProps): ReactElement => {
    return (
      <Container
        backgroundColor={BackgroundColors.Darker}
        fillScreen={true}
        orientation={Orientation.Vertical}
      >
        <Container
          backgroundColor={BackgroundColors.Lightest}
          border={{
            bottom: {
              color: BorderColors.Default,
              style: BorderStyle.Solid,
              width: 1,
            },
          }}
          grow={false}
          orientation={Orientation.Horizontal}
        >
          <Container
            alignItems={Align.Center}
            grow={false}
            orientation={Orientation.Horizontal}
            padding={Amount.Default}
          >
            <Label
              // alignContent={Align.Center}
              textColor={TextColors.Dark}
              textSize={TextSize.Larger}
              textWeight={TextWeight.Most}
            >
              AppLab Component Docs
            </Label>
          </Container>

          <Container />
        </Container>

        <Container orientation={Orientation.Horizontal}>
          <Container backgroundColor={BackgroundColors.Lightest} width={260}>
            <NavigationMenu
              // itemProps={{
              //   active: {
              //     backgroundColor: BackgroundColor.Primary,
              //     textColor: TextColor.White,
              //   },
              //   hover: {
              //     backgroundColor: BackgroundColor.Darker,
              //     textColor: TextColor.White,
              //   },
              // }}
              menu={[
                {
                  label: 'Introduction',
                  to: '/',
                },
                {
                  label: 'Animation',
                  to: '/animation',
                },
                {
                  label: 'Authentication',
                  to: '/authentication',
                },
                {
                  label: 'Billing',
                  to: '/billing',
                },
                {
                  label: 'Cards',
                  to: '/cards',
                },

                {
                  label: 'Charts',
                  to: '/charts',
                },
                {
                  label: 'Data',
                  to: '/data',
                },
                {
                  label: 'Editors',
                  to: '/editors',
                },
                {
                  label: 'Errors',
                  to: '/errors',
                },
                {
                  label: 'Feeds',
                  to: '/feeds',
                },
                {
                  label: 'Forms',
                  to: '/forms',
                },
                {
                  label: 'Layout',
                  to: '/layout',
                },
                {
                  label: 'Media',
                  to: '/media',
                },
                {
                  label: 'Menus',
                  to: '/menus',
                },
                {
                  label: 'Messaging',
                  to: '/messaging',
                },
                {
                  label: 'Modals',
                  to: '/modals',
                },
                {
                  label: 'Navigation',
                  to: '/navigation',
                },
                {
                  label: 'Network',
                  to: '/network',
                },
                {
                  label: 'Notifications',
                  to: '/notifications',
                },
                {
                  label: 'Progress',
                  to: '/progress',
                },
                {
                  label: 'Search',
                  to: '/search',
                },
                {
                  label: 'Themes',
                  to: '/themes',
                },
                {
                  label: 'Typography',
                  to: '/typography',
                },
                {
                  label: 'User',
                  to: '/user',
                },
                {
                  label: 'Workspaces',
                  to: '/workspaces',
                },
              ]}
              overflow={Overflow.ScrollVertical}
              scrollable={true}
            />
          </Container>

          <Container grow={true} orientation={Orientation.Vertical}>
            {children}
          </Container>
        </Container>
      </Container>
      // </WebApplication>
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
