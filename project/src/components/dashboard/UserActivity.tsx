import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';

export interface Activity {
  id: string;
  user: {
    name: string;
    avatar?: string;
  };
  action: string;
  target: string;
  time: string;
}

interface UserActivityProps {
  activities: Activity[];
  title?: string;
  className?: string;
}

const UserActivity: React.FC<UserActivityProps> = ({
  activities,
  title = 'Recent Activity',
  className = '',
}) => {
  return (
    <Card title={title} className={className}>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex"
          >
            <div className="mr-4 flex-shrink-0">
              {activity.user.avatar ? (
                <img
                  className="h-8 w-8 rounded-full"
                  src={activity.user.avatar}
                  alt={activity.user.name}
                />
              ) : (
                <div className="h-8 w-8 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center text-sm font-medium">
                  {activity.user.name.charAt(0)}
                </div>
              )}
            </div>
            <div>
              <p className="text-sm">
                <span className="font-medium">{activity.user.name}</span>{' '}
                <span className="text-gray-600 dark:text-gray-400">{activity.action}</span>{' '}
                <span className="font-medium">{activity.target}</span>
              </p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
            </div>
          </motion.div>
        ))}
        
        {activities.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 py-4">
            No recent activity
          </p>
        )}
      </div>
    </Card>
  );
};

export default UserActivity;