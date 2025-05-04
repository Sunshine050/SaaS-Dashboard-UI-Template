import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Tab {
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: number;
  variant?: 'default' | 'pills' | 'underline';
  className?: string;
  onChange?: (index: number) => void;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultTab = 0,
  variant = 'default',
  className = '',
  onChange,
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    if (onChange) {
      onChange(index);
    }
  };

  // Tab styles based on variant
  const getTabStyles = (index: number) => {
    const isActive = index === activeTab;
    
    if (variant === 'pills') {
      return isActive
        ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400'
        : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300';
    }
    
    if (variant === 'underline') {
      return isActive
        ? 'text-primary-600 dark:text-primary-400'
        : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300';
    }
    
    // default
    return isActive
      ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600';
  };

  const tabClasses = {
    default: 'inline-flex items-center px-4 py-2 border-b-2 font-medium text-sm',
    pills: 'inline-flex items-center px-3 py-2 rounded-md text-sm font-medium',
    underline: 'inline-flex items-center px-1 py-3 border-b-2 font-medium text-sm',
  };

  return (
    <div className={className}>
      <div className={`border-b border-gray-200 dark:border-gray-700 ${variant === 'pills' ? 'border-none' : ''}`}>
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`${tabClasses[variant]} ${getTabStyles(index)}`}
              aria-current={activeTab === index ? 'page' : undefined}
            >
              {tab.icon && <span className="mr-2">{tab.icon}</span>}
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="py-4">
        <AnimatedTabContent activeTab={activeTab}>
          {tabs.map((tab, index) => (
            <div key={index} className={index === activeTab ? 'block' : 'hidden'}>
              {tab.content}
            </div>
          ))}
        </AnimatedTabContent>
      </div>
    </div>
  );
};

const AnimatedTabContent: React.FC<{
  activeTab: number;
  children: React.ReactNode;
}> = ({ activeTab, children }) => {
  return (
    <motion.div
      key={activeTab}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default Tabs;