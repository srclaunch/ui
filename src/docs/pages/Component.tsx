import { memo, ReactElement } from 'react';
import { useMatch, useLocation } from '@srclaunch/web-application-state';
import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColors,
  BorderColors,
  BreadcrumbNavigation,
  CodeBlock,
  Depth,
  DepthShadow,
  Fill,
  Heading,
  NavigationLink,
  PropertyEditor,
  ObjectPropertiesView,
  Label,
  LineBreak,
  Paragraph,
  Sizes,
  Tab,
  Tabs,
  TextSize,
  Title,
  UnorderedList,
  Workspace,
} from '../../index';
import { Documentation } from '../layouts/Documentation';
import componentLibrary from '../component-library';
import { getRoutes } from '../routes';
import { Container } from '../../components/layout/Container';
import { Component } from '../types/component';

export const ComponentPage = memo((): ReactElement => {
  const location = useLocation();
  const routes = getRoutes(componentLibrary.components);
  const matchedRoute = routes.find(
    route => route.path === location.pathname,
  ) as Component;

  const getBreadcrumbItems = (): { label?: string; path?: string }[] => {
    let constructedPath = '';
    let items: { label?: string; path?: string }[] = [];
    const urlParts = location.pathname.split('/');

    if (urlParts?.length === 2) {
      const route = routes.find(route => route.path === `/${urlParts[1]}`);

      if (route) {
        const matchingRoute = route.path === matchedRoute.path;

        items = [
          {
            label: route?.name ?? route?.title,
            path: !matchingRoute ? route.path : undefined,
          },
        ];
      }
    } else if (urlParts && urlParts?.length > 2) {
      for (const part of urlParts) {
        const indexPart = part === '';

        if (!indexPart) {
          constructedPath += part.includes('/') ? part : `/${part}`;

          const route = routes.find(route => route.path === constructedPath);

          if (route) {
            const matchingRoute = route.path === matchedRoute.path;

            items = [
              ...items,
              {
                label: route.name ?? route.title,
                path: !matchingRoute ? route.path : undefined,
              },
            ];
          }
        }
      }
    }

    return items;
  };

  return (
    <Workspace
      header={{
        title: (
          <Container
            alignment={{
              horizontal: AlignHorizontal.Left,
            }}
            size={{
              fill: Fill.Horizontal,
            }}
          >
            <BreadcrumbNavigation
              items={getBreadcrumbItems()}
              textSize={TextSize.Large}
            />
          </Container>
        ),
      }}
      layout={Documentation}
      padding={{ all: Amount.Most }}
      title={`${matchedRoute.title} - ${componentLibrary.name}`}
    >
      <Container
        alignment={{ horizontal: AlignHorizontal.Stretch }}
        background={{ color: BackgroundColors.Lightest }}
        borderRadius={{ all: Amount.Less }}
        padding={{ all: Amount.All }}
      >
        <Title textSize={TextSize.Largest}>
          &lt;{matchedRoute.title} /&gt;
        </Title>

        <Paragraph>{matchedRoute.description}</Paragraph>

        <LineBreak
          border={{
            bottom: {
              color: BorderColors.Default,
            },
          }}
          margin={{
            bottom: Amount.All,
          }}
          size={{
            height: Sizes.Default,
          }}
        />

        {matchedRoute?.components && (
          <Container
            margin={{
              bottom: Amount.All,
            }}
          >
            <Heading textSize={TextSize.Larger}>Components</Heading>

            <LineBreak size={{ height: Sizes.Smaller }} />

            <UnorderedList
              items={matchedRoute?.components.map((component: Component) => (
                <NavigationLink to={component.path} label={component.title} />
              ))}
            />
          </Container>
        )}

        {matchedRoute?.properties && (
          <Container
            margin={{
              bottom: Amount.All,
            }}
          >
            <Heading textSize={TextSize.Larger}>Properties</Heading>

            <LineBreak size={{ height: Sizes.Smaller }} />

            <ObjectPropertiesView properties={matchedRoute?.properties} />
          </Container>
        )}

        {matchedRoute?.examples && (
          <Container>
            <Heading
              margin={{ bottom: Amount.Default }}
              textSize={TextSize.Larger}
            >
              Examples
            </Heading>

            <Container>
              {matchedRoute?.examples.map(
                (
                  {
                    code,
                    description,
                    properties,
                    render: RenderComponent,
                    title,
                  },
                  key,
                ) => (
                  <Container
                    className="component-example"
                    key={key}
                    margin={{ bottom: Amount.Default }}
                  >
                    <Heading textSize={TextSize.Default}>{title}</Heading>

                    {description && <Paragraph>{description}</Paragraph>}

                    <LineBreak size={{ height: Sizes.Smaller }} />

                    {matchedRoute.component && (
                      <Container
                        className="component-example-preview"
                        key={key}
                        size={{
                          minHeight: 260,
                        }}
                      >
                        <Container
                          background={{ color: BackgroundColors.Lighter }}
                          borderRadius={{ all: Amount.Least }}
                          className="component-example-container"
                          depth={Depth.Higher}
                          margin={{ bottom: Amount.Default }}
                          padding={{ all: Amount.All }}
                          shadow={DepthShadow.Low}
                        >
                          {RenderComponent ? (
                            <RenderComponent />
                          ) : (
                            <matchedRoute.component {...properties} />
                          )}
                        </Container>

                        <Tabs>
                          <Tab label="Properties">
                            {!properties ? (
                              <Label
                                alignment={{
                                  horizontal: AlignHorizontal.Center,
                                }}
                                background={{
                                  color: BackgroundColors.Lightest,
                                }}
                                borderRadius={{ all: Amount.Least }}
                                padding={{ all: Amount.Less }}
                                shadow={DepthShadow.Low}
                              >
                                No arguments
                              </Label>
                            ) : (
                              <PropertyEditor defaultValue={properties} />
                            )}
                          </Tab>

                          <Tab label="Code" visible={Boolean(code)}>
                            {code && <CodeBlock value={code} />}
                          </Tab>
                        </Tabs>
                      </Container>
                    )}

                    <LineBreak
                      border={{
                        bottom: {
                          color: BorderColors.Lighter,
                        },
                      }}
                      margin={{
                        bottom: Amount.All,
                        top: Amount.All,
                      }}
                      size={{
                        height: Sizes.Default,
                      }}
                    />
                  </Container>
                ),
              )}
            </Container>
          </Container>
        )}
      </Container>
    </Workspace>
  );
});
