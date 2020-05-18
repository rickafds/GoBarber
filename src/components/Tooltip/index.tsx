import React, { FC } from 'react';

import { Container } from './styles';

interface Tooltiprops {
  title: string;
  className?: string;
}

const Tooltip: FC<Tooltiprops> = ({ title, children, className }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
