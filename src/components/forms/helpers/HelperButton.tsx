import { memo, ReactElement, useState } from 'react';
import styled, { css } from 'styled-components';
import { BasicIcons } from '@srclaunch/icons';
import { Icon } from '../../media/Icon';

export const HelperButton = memo(
  ({ content }: { content: ReactElement }): ReactElement => {
    const [contentVisible, setContentVisible] = useState(false);

    return (
      <Container>
        <Button
          onClick={() => {}}
          secondary={true}
          onMouseEnter={() => setContentVisible(true)}
          onMouseLeave={() => setContentVisible(false)}
        >
          <Icon name={BasicIcons.HelpBubble} />
        </Button>
        <Content visible={contentVisible}>{content}</Content>
      </Container>
    );
  },
);

const Container = styled.div`
  position: relative;

  &:hover {
    z-index: 50000;
  }
`;
const Button = styled.button<{ secondary: boolean }>`
  background: transparent;
  border: none;
  line-height: 22px;

  svg {
    fill: rgba(162, 192, 80, 1);
    height: 24px;
    vertical-align: middle;
    width: 24px;
  }
`;

const Content = styled.div<{ visible: boolean }>`
  background: white;
  border: 10px solid rgba(203, 226, 90, 1);
  border-radius: 25px;
  bottom: 30px;
  box-shadow: 0 15px 25px rgba(65, 146, 64, 0.3);
  // color: rgba(65, 146, 64, 1);
  color: rgba(120, 120, 120, 1);
  font-size: 14px;
  opacity: 0;
  padding: 15px;
  pointer-events: none;
  position: absolute;
  transition: all 0.2s ease-in;
  transform: translateX(-100px);
  width: 220px;

  b {
    font-weight: 700;
  }

  ${props =>
    props.visible &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
`;
