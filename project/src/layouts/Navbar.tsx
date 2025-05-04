import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bell, 
  Search, 
  Menu,
} from 'lucide-react';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
    if (showNotifications) setShowNotifications(false);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    if (showUserMenu) setShowUserMenu(false);
  };

  const notificationItems = [
    { id: 1, title: 'New message received', time: '5 min ago', read: false },
    { id: 2, title: 'Your subscription is expiring', time: '1 hour ago', read: false },
    { id: 3, title: 'New user signed up', time: '2 hours ago', read: true },
    { id: 4, title: 'Monthly report available', time: 'Yesterday', read: true },
  ];

  return (
    <header className="flex items-center h-14 px-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 z-10">
      <button
        className="text-gray-500 dark:text-gray-400 lg:hidden"
        onClick={toggleSidebar}
      >
        <Menu size={24} />
      </button>
      
      <div className="relative max-w-md w-full ml-4 mr-auto hidden sm:block">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search size={18} className="text-gray-400" />
        </div>
        <input
          type="search"
          className="input pl-10 bg-gray-50 dark:bg-gray-700 w-full"
          placeholder="Search..."
        />
      </div>
      
      <div className="flex items-center ml-auto space-x-4">
        {/* Notifications */}
        <div className="relative" ref={notificationsRef}>
          <button 
            onClick={toggleNotifications}
            className="flex items-center justify-center h-8 w-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 relative"
          >
            <Bell size={20} className="text-gray-600 dark:text-gray-300" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-error-500"></span>
          </button>
          
          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-md shadow-dropdown border border-gray-200 dark:border-gray-700 z-50"
              >
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="font-medium">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notificationItems.map((item) => (
                    <div
                      key={item.id}
                      className={`p-4 border-b border-gray-200 dark:border-gray-700 ${
                        !item.read ? 'bg-primary-50 dark:bg-primary-900/10' : ''
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm font-medium">{item.title}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.time}</p>
                        </div>
                        {!item.read && (
                          <span className="h-2 w-2 rounded-full bg-primary-500"></span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 text-center border-t border-gray-200 dark:border-gray-700">
                  <button className="text-sm text-primary-600 dark:text-primary-400 hover:underline">
                    View all notifications
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* User menu */}
        <div className="relative" ref={userMenuRef}>
          <button
            onClick={toggleUserMenu}
            className="flex items-center text-sm rounded-full focus:outline-none"
          >
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.pexels.com/photos/1438086/pexels-photo-1438086.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="User"
            />
          </button>
          
          <AnimatePresence>
            {showUserMenu && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-dropdown border border-gray-200 dark:border-gray-700 z-50"
              >
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <p className="text-sm font-medium">Sarah Johnson</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">sarah.johnson@example.com</p>
                </div>
                <div className="py-1">
                  <a href="/profile" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                    Your Profile
                  </a>
                  <a href="/settings" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                    Settings
                  </a>
                  <a href="/billing" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                    Billing
                  </a>
                </div>
                <div className="py-1 border-t border-gray-200 dark:border-gray-700">
                  <a href="#" className="block px-4 py-2 text-sm text-error-600 dark:text-error-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Sign out
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Navbar;