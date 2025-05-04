import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  User, 
  Settings, 
  CreditCard, 
  LayoutGrid, 
  LogOut, 
  HelpCircle,
  BarChart4
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface SidebarProps {
  closeSidebar?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ closeSidebar }) => {
  const { theme, toggleTheme } = useTheme();

  const navigationItems = [
    { name: 'Dashboard', to: '/dashboard', icon: <Home size={20} /> },
    { name: 'Profile', to: '/profile', icon: <User size={20} /> },
    { name: 'Analytics', to: '/analytics', icon: <BarChart4 size={20} /> },
    { name: 'Billing', to: '/billing', icon: <CreditCard size={20} /> },
    { name: 'Settings', to: '/settings', icon: <Settings size={20} /> },
    { name: 'UI Components', to: '/components', icon: <LayoutGrid size={20} /> },
  ];

  return (
    <div className="h-full flex flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="flex h-14 items-center px-4 py-4 border-b border-gray-200 dark:border-gray-700">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center"
        >
          <span className="text-xl font-bold text-primary-600 dark:text-primary-400">SaaS</span>
          <span className="text-xl font-medium ml-1">Dashboard</span>
        </motion.div>
      </div>
      <div className="flex-1 flex flex-col justify-between overflow-y-auto">
        <nav className="flex-1 px-2 py-4 space-y-1">
          {navigationItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
              onClick={closeSidebar}
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
        <div className="p-4 space-y-2">
          <button
            onClick={toggleTheme}
            className="sidebar-link w-full justify-between"
          >
            <span className="flex items-center gap-3">
              <Settings size={20} />
              <span>Theme</span>
            </span>
            <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
          </button>
          <button className="sidebar-link w-full">
            <HelpCircle size={20} />
            <span>Help & Support</span>
          </button>
          <button className="sidebar-link w-full text-error-600 dark:text-error-400">
            <LogOut size={20} />
            <span>Log out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;