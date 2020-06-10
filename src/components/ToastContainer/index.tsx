import React, { FC } from 'react';

import { ToastMessage } from '../../hooks/Toast';
import { Container } from './styles';

import Toast from './Toast';

interface ToastContainerprops {
  messages: ToastMessage[];
}

const ToastContainer: FC<ToastContainerprops> = ({ messages }) => {
  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
