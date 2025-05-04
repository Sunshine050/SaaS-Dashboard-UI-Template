import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';
import StatCard from '../components/dashboard/StatCard';
import AreaChart from '../components/dashboard/AreaChart';
import BarChart from '../components/dashboard/BarChart';
import TasksList from '../components/dashboard/TasksList';
import CustomersTable from '../components/dashboard/CustomersTable';
import UserActivity from '../components/dashboard/UserActivity';
import {
  salesData,
  trafficData,
  mockCustomers,
  mockActivities,
  mockTasks,
} from '../data/mockData';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
}

const DashboardPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);

  const handleTaskToggle = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleTaskDelete = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-semibold">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Welcome back to your dashboard.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <StatCard
            title="Total Customers"
            value="3,456"
            icon={<Users size={20} className="text-primary-600 dark:text-primary-400" />}
            change={{ value: 12, type: 'increase' }}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <StatCard
            title="Revenue"
            value="$24,780"
            icon={<DollarSign size={20} className="text-secondary-600 dark:text-secondary-400" />}
            change={{ value: 8, type: 'increase' }}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <StatCard
            title="Sales"
            value="1,245"
            icon={<ShoppingCart size={20} className="text-accent-600 dark:text-accent-400" />}
            change={{ value: 5, type: 'decrease' }}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <StatCard
            title="Conversion Rate"
            value="3.2%"
            icon={<TrendingUp size={20} className="text-success-600 dark:text-success-400" />}
            change={{ value: 2, type: 'increase' }}
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AreaChart
            title="Revenue Overview"
            subtitle="Monthly revenue and profit"
            data={salesData}
            dataKeys={['revenue', 'profit']}
            colors={['#4f46e5', '#10b981']}
          />
        </div>
        <div>
          <BarChart
            title="Traffic Sources"
            subtitle="Weekly traffic by source"
            data={trafficData}
            dataKeys={['direct', 'social', 'organic']}
            colors={['#4f46e5', '#f59e0b', '#10b981']}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div>
          <TasksList
            title="Today's Tasks"
            tasks={tasks}
            onTaskToggle={handleTaskToggle}
            onTaskDelete={handleTaskDelete}
          />
        </div>
        <div className="lg:col-span-2">
          <CustomersTable
            title="Recent Customers"
            customers={mockCustomers}
          />
        </div>
      </div>

      <div>
        <UserActivity
          title="Recent Activity"
          activities={mockActivities}
        />
      </div>
    </div>
  );
};

export default DashboardPage;