// components/Header.tsx
import React from 'react';
import { Settings, LogOut } from 'lucide-react';

type HeaderProps = {
  activeTab: string;
};

const Header: React.FC<HeaderProps> = ({ activeTab }) => (
  <header className="bg-white border-b border-gray-200 px-6 py-4">
    <div className="flex items-center justify-between">
      <h2 className="text-xl font-semibold text-gray-900 capitalize">{activeTab}</h2>
      <div className="flex items-center space-x-3">
        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full">
          <Settings className="w-5 h-5" />
        </button>
        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full">
          <LogOut className="w-5 h-5" />
        </button>
      </div>
    </div>
  </header>
);

export default Header;
