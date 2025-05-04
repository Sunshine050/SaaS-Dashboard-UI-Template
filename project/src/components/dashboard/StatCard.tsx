import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUp } from 'lucide-react';
import Card from '../ui/Card';

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  change?: {
    value: number;
    type: 'increase' | 'decrease';
  };
  subtitle?: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  change,
  subtitle,
  className = '',
}) => {
  return (
    <Card className={className} hover>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <h3 className="mt-1 text-xl font-semibold">{value}</h3>
          
          {change && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center mt-1"
            >
              {change.type === 'increase' ? (
                <>
                  <ArrowUp size={14} className="text-success-500 mr-1" />
                  <span className="text-xs font-medium text-success-500">{change.value}%</span>
                </>
              ) : (
                <>
                  <ArrowDown size={14} className="text-error-500 mr-1" />
                  <span className="text-xs font-medium text-error-500">{change.value}%</span>
                </>
              )}
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">from last month</span>
            </motion.div>
          )}
          
          {subtitle && (
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{subtitle}</p>
          )}
        </div>
        
        {icon && (
          <div className="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
};

export default StatCard;