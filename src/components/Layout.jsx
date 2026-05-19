import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children, currentScreen, setCurrentScreen }) => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
      
      <main className="flex-1 ml-[260px] min-h-screen">
        <div className="max-w-[1440px] mx-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
