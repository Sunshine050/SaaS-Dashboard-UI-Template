import React from 'react';
import { motion } from 'framer-motion';
import { Home, Search } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col justify-center items-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="flex justify-center mb-6">
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0] 
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="text-9xl font-bold text-primary-600 dark:text-primary-400"
          >
            404
          </motion.div>
        </div>
        
        <h1 className="text-3xl font-bold mb-2">Page Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          We couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link to="/dashboard">
            <Button variant="primary" icon={<Home size={16} />}>
              Back to Dashboard
            </Button>
          </Link>
          <Link to="/components">
            <Button variant="outline" icon={<Search size={16} />}>
              Browse Components
            </Button>
          </Link>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-20 text-center"
      >
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Need help? <a href="#" className="text-primary-600 dark:text-primary-400 hover:underline">Contact Support</a>
        </p>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;