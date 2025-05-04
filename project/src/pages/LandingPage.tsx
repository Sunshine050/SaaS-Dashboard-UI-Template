import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle, Shield, Zap, Users, BarChart4, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Navigation */}
      <nav className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-primary-600 dark:text-primary-400">SaaS</span>
                <span className="text-xl font-medium ml-1">Dashboard</span>
              </div>
            </div>
            <div className="flex items-center">
              <Link to="/dashboard">
                <Button variant="primary" size="sm" icon={<ChevronRight size={16} />} iconPosition="right">
                  View Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-6">
                Modern Dashboard <span className="text-primary-600 dark:text-primary-400">UI Kit</span> for Your SaaS
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                A professional, responsive dashboard template built with React and Tailwind CSS.
                Perfect for your next SaaS, admin panel, or business application.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/dashboard">
                  <Button variant="primary" size="lg">
                    Live Demo
                  </Button>
                </Link>
                <Link to="/components">
                  <Button variant="outline" size="lg">
                    View Components
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="shadow-2xl rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
                <img 
                  src="https://images.pexels.com/photos/8297543/pexels-photo-8297543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Dashboard Preview" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Packed with Essential Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to build beautiful dashboards and admin panels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg inline-block mb-4">
                <Layout size={24} className="text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Looks great on all devices, from mobile phones to large desktop monitors.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg inline-block mb-4">
                <BarChart4 size={24} className="text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Visualization</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Beautiful charts and graphs to display important metrics and KPIs.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg inline-block mb-4">
                <Users size={24} className="text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">User Management</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Comprehensive user profile, settings, and management interfaces.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg inline-block mb-4">
                <Shield size={24} className="text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Authentication</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Secure authentication flows, account management, and security settings.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg inline-block mb-4">
                <Zap size={24} className="text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Optimized for speed with smooth animations and transitions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg inline-block mb-4">
                <CheckCircle size={24} className="text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Production Ready</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Well-documented, customizable, and ready for your next project.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Beautifully Designed Pages
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Every screen is carefully crafted with attention to detail
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.pexels.com/photos/8297168/pexels-photo-8297168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Dashboard Preview" 
                className="w-full h-auto"
              />
              <div className="p-4 bg-white dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Analytics Dashboard</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Visualize your key metrics and performance indicators
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="User Management Preview" 
                className="w-full h-auto"
              />
              <div className="p-4 bg-white dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">User Management</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Manage user accounts, roles, and permissions
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 dark:bg-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Explore the Dashboard?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Check out the live demo to see all the features and components in action.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/dashboard">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white text-primary-700 hover:bg-primary-50 border-white"
                >
                  View the Dashboard
                </Button>
              </Link>
              <Link to="/components">
                <Button
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-primary-700"
                >
                  Browse Components
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:justify-start">
              <div className="flex items-center">
                <span className="text-xl font-bold text-primary-600 dark:text-primary-400">SaaS</span>
                <span className="text-xl font-medium ml-1">Dashboard</span>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <p className="text-center md:text-right text-gray-500 dark:text-gray-400">
                &copy; {new Date().getFullYear()} SaaS Dashboard. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;