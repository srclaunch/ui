import { memo, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

type ModalProps = {
  children: React.ReactChildren;
  visible: boolean;
  setVisible: (visible: boolean) => unknown;
};

export const Modal = memo(
  ({ children, visible, setVisible }: ModalProps): ReactElement => {
    return ReactDOM.createPortal(
      <Container
        className="modal-container"
        visible={visible}
        onClick={() => {
          setVisible(false);
        }}
      >
        <Content>{children}</Content>
      </Container>,
      document.getElementById('root') as HTMLElement,
    );
  },
);

const Container = styled.div<{ visible: boolean }>`
  background: rgba(0, 0, 0, 0.3);
  bottom: 0;
  left: 0;
  opacity: ${props => (props.visible ? '1' : '0')};
  pointer-events: ${props => (props.visible ? 'auto' : 'none')};
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.2s ease-out;
  z-index: 500000;
`;

const Content = styled.div`
  background: white;
  border-radius: 15px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;
