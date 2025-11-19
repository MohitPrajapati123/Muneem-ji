import React from 'react';

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
    
      <main className="flex-1">
        {children}
      </main>

    
    </div>
  );
};

export default HomeLayout;
