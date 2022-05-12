import {
  BuildFormat,
  BuildPlatform,
  BuildTarget,
  BuildTool,
  CodeFormatterTool,
  CodeLinterTool,
  StaticTypingTool,
  License,
  Project,
  ProjectType,
  PublishAccess,
  TestReporter,
  TestTool,
} from "@srclaunch/types";

export default <Project>{
  name: "@srclaunch/ui",
  description: "SrcLaunch UI React component library",
  type: ProjectType.ComponentLibrary,
  build: {
    bundle: {
      exclude: ["react", "react-dom", "styled-components"],
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
        "styled-components": "styled",
      },
    },
    formats: [BuildFormat.ESM, BuildFormat.UMD],
    input: {
      directory: "src",
      file: "index.tsx",
    },
    platform: BuildPlatform.Browser,
    target: BuildTarget.ESNext,
    tool: BuildTool.Vite,
  },
  environments: {
    development: {
      formatters: [CodeFormatterTool.Prettier],
      linters: [CodeLinterTool.ESLint, CodeLinterTool.Stylelint],
      staticTyping: [StaticTypingTool.TypeScript],
    },
  },
  test: {
    coverage: {
      reporters: [TestReporter.Lcov, TestReporter.JSONSummary],
    },
    tool: TestTool.Jest,
  },
  release: {
    publish: {
      access: PublishAccess.Public,
      license: License.MIT,
      registry: "https://registry.npmjs.org/",
    },
  },
  requirements: {
    node: ">=16",
    yarn: ">=3.2.0",
    packages: [
      "@srclaunch/exceptions",
      "@srclaunch/http-client",
      "@srclaunch/i18n",
      "@srclaunch/logger",
      "@srclaunch/themes",
      "@srclaunch/web-environment",
      "@srclaunch/validation",
      "amazon-cognito-identity-js",
      "history",
      "crypto-js",
      "luxon",
      "nanoid",
      "react",
      "styled-components",
    ],
    peerPackages: [
      "@reduxjs/toolkit",
      "react-dom",
      "react-redux",
      "react-router",
      "redux",
    ],
    srclaunch: {
      dx: true,
      cli: true,
      types: true,
    },
  },
};
