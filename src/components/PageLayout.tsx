import React, { ReactNode } from 'react';
import Header from './Header';

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default PageLayout;
