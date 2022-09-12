import Link from 'next/link';
import React from 'react';

interface LayoutProps {
  children?: JSX.Element | JSX.Element[];
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col max-w-2xl mx-auto min-h-screen">
      <header className="flex flex-row justify-between items-center py-3 px-4 bg-slate-100">
        <Link href="/" passHref>
          <a>
            <h1 className="textlg font-bold">NEXT SSR</h1>
          </a>
        </Link>
        <div className="text-sm">
          <button className="px-2 py-1  font-semibold rounded-md border border-gray-900">
            Add Post
          </button>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
