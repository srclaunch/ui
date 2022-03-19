import { memo, ReactElement } from 'react';
// @ts-ignore
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// @ts-ignore
import { duotoneDark as style } from 'react-syntax-highlighter/dist/esm/styles/prism';

import {
  Amount,
  DepthShadow,
  Overflow,
  Sizes,
  TextColors,
  TextSize,
} from '../../types';
import { Container, ContainerProps } from '../layout/Container';
import { TextProps } from './Text';

type CodeBlockProps = ContainerProps &
  TextProps & {
    value: string;
  };

export const CodeBlock = memo(
  ({
    alignment = {},
    borderRadius = {},
    lineHeight = Sizes.Default,
    textSize = TextSize.Default,
    value,
    ...props
  }: CodeBlockProps): ReactElement => {
    return (
      <Container
        alignment={{ overflow: Overflow.Hidden, ...alignment }}
        borderRadius={{ all: Amount.Least, ...borderRadius }}
        shadow={DepthShadow.Low}
        {...props}
      >
        <SyntaxHighlighter
          customStyle={{
            fontSize: textSize,
            borderRadius: 'inherit',
            margin: 0,
          }}
          language="tsx"
          showLineNumbers={true}
          style={style}
        >
          {value}
        </SyntaxHighlighter>
      </Container>
    );
  },
);
