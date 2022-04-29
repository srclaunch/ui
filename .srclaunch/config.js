import {
  BuildFormat,
  BuildPlatform,
  BuildTarget,
  BuildTool,
  ProjectType,
  RunTool,
  TestReporter,
  TestTool,
} from '@srclaunch/types';

export default {
  name: '@srclaunch/ui',
  description: 'SrcLaunch UI React component library',
  type: ProjectType.Library,
  build: {
    bundle: {
      exclude: ['react', 'react-dom', 'styled-components'],
      globals: {
        react: 'React',
        'styled-components': 'styled',
      },
    },
    input: {
      directory: 'src',
      file: 'index.tsx',
    },
    formats: [BuildFormat.ESM, BuildFormat.UMD],
    platform: BuildPlatform.Browser,
    target: BuildTarget.ESNext,
    tool: BuildTool.Vite,
  },
  run: {
    development: {
      ssr: false,
      tool: RunTool.Vite,
    },
    preview: {
      ssr: false,
    },
    qa: {
      ssr: false,
    },
    production: {
      ssr: false,
    },
  },
  test: {
    coverage: {
      reporters: [TestReporter.Lcov, TestReporter.JSONSummary],
    },
    tool: TestTool.Jest,
    verbose: true,
  },
};
