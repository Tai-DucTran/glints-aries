import * as React from 'react';

import { CloseIcon } from '../../General/Icon/components';

import { escEvent } from '../../Utils/DomUtils';

import {
  ToastContainer,
  ToastTopWrapper,
  ToastIcon,
  ToastBodyWrapper,
} from './ToastStyle';

class Toast extends React.Component<Props> {
  componentDidMount() {
    const { onClose } = this.props;

    document.addEventListener('keydown', escEvent(onClose), false);
  }

  componentWillUnmount() {
    const { onClose } = this.props;

    document.removeEventListener('keydown', escEvent(onClose), false);
  }

  render() {
    const { children, isVisible, onClose, theme } = this.props;

    return (
      <ToastContainer
        className="aries-toast"
        theme={theme}
        isVisible={isVisible}
      >
        <ToastTopWrapper className="toast-header">
          <ToastIcon onClick={onClose}>
            <CloseIcon color={theme === 'black' ? 'white' : 'black'} />
          </ToastIcon>
        </ToastTopWrapper>
        <ToastBodyWrapper className="toast-body">{children}</ToastBodyWrapper>
      </ToastContainer>
    );
  }
}

interface Props {
  children: React.ReactNode;
  isVisible: boolean;
  onClose(): void;
  theme?: string;
}

export default Toast;
