// components/Sidebar.tsx
import React from 'react';
import { Home, Search, Bell, Mail, Bookmark, User } from 'lucide-react';

const sidebarItems = [
  { icon: Home, label: 'Home', key: 'home' },
  { icon: Search, label: 'Explore', key: 'explore' },
  { icon: Bell, label: 'Notifications', key: 'notifications', badge: 5 },
  { icon: Mail, label: 'Messages', key: 'messages', badge: 2 },
  { icon: Bookmark, label: 'Bookmarks', key: 'bookmarks' },
  { icon: User, label: 'Profile', key: 'profile' }
];

type SidebarProps = {
  activeTab: string;
  setActiveTab: (key: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-100">
        <h1 className="text-2xl font-bold text-blue-600">Auranize</h1>
      </div>
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.key}>
              <button
                onClick={() => setActiveTab(item.key)}
                className={`w-full flex items-center px-4 py-3 rounded-xl text-left transition-colors ${
                  activeTab === item.key
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-6 h-6 mr-3" />
                <span className="font-medium">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">
                    {item.badge}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
