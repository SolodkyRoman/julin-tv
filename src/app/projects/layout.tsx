import React, { ReactNode } from 'react';
import CommonLayout from '@/components/CommonLayout';

const Layout = ({ children }: { children: ReactNode }) => {
  return <CommonLayout>{children}</CommonLayout>;
};

export default Layout;
