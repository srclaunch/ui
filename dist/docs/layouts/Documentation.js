import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from 'react';
import { Align, Amount, BackgroundColors, BorderColors, BorderStyle, Container, Label, NavigationMenu, Orientation, Overflow, TextColors, TextSize, TextWeight, } from '../../index';
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
export const Documentation = memo(({ children }) => {
    return (_jsxs(Container, { backgroundColor: BackgroundColors.Darker, fillScreen: true, orientation: Orientation.Vertical, children: [_jsxs(Container, { backgroundColor: BackgroundColors.Lightest, border: {
                    bottom: {
                        color: BorderColors.Default,
                        style: BorderStyle.Solid,
                        width: 1,
                    },
                }, grow: false, orientation: Orientation.Horizontal, children: [_jsx(Container, { alignItems: Align.Center, grow: false, orientation: Orientation.Horizontal, padding: Amount.Default, children: _jsx(Label
                        // alignContent={Align.Center}
                        , { 
                            // alignContent={Align.Center}
                            textColor: TextColors.Dark, textSize: TextSize.Larger, textWeight: TextWeight.Most, children: "AppLab Component Docs" }, void 0) }, void 0), _jsx(Container, {}, void 0)] }, void 0), _jsxs(Container, { orientation: Orientation.Horizontal, children: [_jsx(Container, { backgroundColor: BackgroundColors.Lightest, width: 260, children: _jsx(NavigationMenu
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
                        , { 
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
                            menu: [
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
                            ], overflow: Overflow.ScrollVertical, scrollable: true }, void 0) }, void 0), _jsx(Container, { grow: true, orientation: Orientation.Vertical, children: children }, void 0)] }, void 0)] }, void 0)
    // </WebApplication>
    );
});
//# sourceMappingURL=Documentation.js.map