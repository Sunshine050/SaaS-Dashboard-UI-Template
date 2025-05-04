import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Circle, Clock, Trash } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
}

interface TasksListProps {
  title?: string;
  tasks: Task[];
  onTaskToggle?: (id: string) => void;
  onTaskDelete?: (id: string) => void;
  className?: string;
}

const TasksList: React.FC<TasksListProps> = ({
  title = 'Tasks',
  tasks,
  onTaskToggle,
  onTaskDelete,
  className = '',
}) => {
  const [hoveredTaskId, setHoveredTaskId] = useState<string | null>(null);

  const getPriorityBadge = (priority: Task['priority']) => {
    const variants = {
      low: <Badge variant="success">Low</Badge>,
      medium: <Badge variant="warning">Medium</Badge>,
      high: <Badge variant="error">High</Badge>,
    };
    return variants[priority];
  };

  return (
    <Card title={title} className={className}>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {tasks.length === 0 ? (
          <p className="py-4 text-center text-gray-500 dark:text-gray-400">
            No tasks available
          </p>
        ) : (
          tasks.map((task) => (
            <motion.div
              key={task.id}
              className="py-3 flex items-center justify-between"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => setHoveredTaskId(task.id)}
              onMouseLeave={() => setHoveredTaskId(null)}
            >
              <div className="flex items-start gap-3">
                <button
                  onClick={() => onTaskToggle && onTaskToggle(task.id)}
                  className="mt-0.5 flex-shrink-0 text-gray-400 hover:text-primary-500 transition-colors"
                >
                  {task.completed ? (
                    <CheckCircle size={18} className="text-primary-500" />
                  ) : (
                    <Circle size={18} />
                  )}
                </button>
                <div>
                  <p className={task.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''}>
                    {task.title}
                  </p>
                  <div className="flex gap-2 mt-1">
                    {getPriorityBadge(task.priority)}
                    {task.dueDate && (
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <Clock size={12} className="mr-1" />
                        {task.dueDate}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <AnimatePresence>
                {(hoveredTaskId === task.id) && onTaskDelete && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                    onClick={() => onTaskDelete(task.id)}
                    className="text-gray-400 hover:text-error-500 transition-colors"
                  >
                    <Trash size={16} />
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>
          ))
        )}
      </div>
    </Card>
  );
};

export default TasksList;