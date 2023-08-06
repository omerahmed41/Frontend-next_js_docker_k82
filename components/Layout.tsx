// components/Layout.tsx

import React from 'react';
import NavigationMenu from './NavigationMenu';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <NavigationMenu />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
