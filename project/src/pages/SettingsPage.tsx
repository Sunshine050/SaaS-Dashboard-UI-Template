import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Monitor, 
  Bell, 
  Database, 
  Shield, 
  Clock, 
  HelpCircle 
} from 'lucide-react';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Button from '../components/ui/Button';
import { useTheme } from '../context/ThemeContext';

const SettingsPage: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const settingsSections = [
    {
      title: 'General',
      icon: <Globe />,
      description: 'Basic settings for your account',
      settings: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Input 
            label="Company Name" 
            defaultValue="Acme Inc." 
          />
          <Select 
            label="Language" 
            options={[
              { value: 'en', label: 'English (US)' },
              { value: 'fr', label: 'French' },
              { value: 'de', label: 'German' },
              { value: 'es', label: 'Spanish' },
            ]} 
            defaultValue="en"
          />
          <Select 
            label="Timezone" 
            options={[
              { value: 'utc-8', label: 'Pacific Time (PT)' },
              { value: 'utc-5', label: 'Eastern Time (ET)' },
              { value: 'utc+0', label: 'Greenwich Mean Time (GMT)' },
              { value: 'utc+1', label: 'Central European Time (CET)' },
            ]} 
            defaultValue="utc-8"
          />
          <Select 
            label="Date Format" 
            options={[
              { value: 'mm-dd-yyyy', label: 'MM/DD/YYYY' },
              { value: 'dd-mm-yyyy', label: 'DD/MM/YYYY' },
              { value: 'yyyy-mm-dd', label: 'YYYY/MM/DD' },
            ]} 
            defaultValue="mm-dd-yyyy"
          />
          <div className="md:col-span-2 mt-2">
            <Button variant="primary">Save Changes</Button>
          </div>
        </div>
      ),
    },
    {
      title: 'Appearance',
      icon: <Monitor />,
      description: 'Customize how the dashboard looks',
      settings: (
        <div className="mt-4 space-y-4">
          <div>
            <p className="font-medium mb-2">Theme</p>
            <div className="flex gap-4">
              <div 
                onClick={() => theme === 'dark' && toggleTheme()}
                className={`
                  cursor-pointer border-2 rounded-md p-2 w-40
                  ${theme === 'light' ? 'border-primary-500' : 'border-gray-200 dark:border-gray-700'}
                `}
              >
                <div className="h-20 bg-white border border-gray-200 rounded-md mb-2">
                  <div className="h-3 bg-gray-100 m-2 rounded"></div>
                  <div className="h-3 w-3/4 bg-gray-100 m-2 rounded"></div>
                </div>
                <p className="text-center text-sm font-medium">Light</p>
              </div>
              
              <div 
                onClick={() => theme === 'light' && toggleTheme()}
                className={`
                  cursor-pointer border-2 rounded-md p-2 w-40
                  ${theme === 'dark' ? 'border-primary-500' : 'border-gray-200 dark:border-gray-700'}
                `}
              >
                <div className="h-20 bg-gray-800 border border-gray-700 rounded-md mb-2">
                  <div className="h-3 bg-gray-700 m-2 rounded"></div>
                  <div className="h-3 w-3/4 bg-gray-700 m-2 rounded"></div>
                </div>
                <p className="text-center text-sm font-medium">Dark</p>
              </div>
            </div>
          </div>
          
          <div>
            <p className="font-medium mb-2">Sidebar Position</p>
            <div className="flex gap-2">
              <label className="inline-flex items-center">
                <input type="radio" name="sidebar" defaultChecked className="form-radio h-4 w-4 text-primary-600" />
                <span className="ml-2">Left</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="sidebar" className="form-radio h-4 w-4 text-primary-600" />
                <span className="ml-2">Right</span>
              </label>
            </div>
          </div>
          
          <div>
            <p className="font-medium mb-2">Density</p>
            <div className="flex gap-2">
              <label className="inline-flex items-center">
                <input type="radio" name="density" className="form-radio h-4 w-4 text-primary-600" />
                <span className="ml-2">Compact</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="density" defaultChecked className="form-radio h-4 w-4 text-primary-600" />
                <span className="ml-2">Default</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="density" className="form-radio h-4 w-4 text-primary-600" />
                <span className="ml-2">Comfortable</span>
              </label>
            </div>
          </div>
          
          <div className="pt-2">
            <Button variant="primary">Save Preferences</Button>
          </div>
        </div>
      ),
    },
    {
      title: 'Notifications',
      icon: <Bell />,
      description: 'Control when and how you receive notifications',
      settings: (
        <div className="mt-4 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Receive email notifications for important updates</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Push Notifications</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Receive browser push notifications</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">SMS Notifications</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Receive text message notifications for critical alerts</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
              </label>
            </div>
          </div>
          
          <div className="pt-4">
            <p className="font-medium mb-2">Notification Types</p>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="form-checkbox h-4 w-4 text-primary-600" />
                <span className="ml-2">Task assignments</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="form-checkbox h-4 w-4 text-primary-600" />
                <span className="ml-2">Comments and mentions</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="form-checkbox h-4 w-4 text-primary-600" />
                <span className="ml-2">Project updates</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-primary-600" />
                <span className="ml-2">Marketing and promotional emails</span>
              </label>
            </div>
          </div>
          
          <div className="pt-2">
            <Button variant="primary">Save Notification Settings</Button>
          </div>
        </div>
      ),
    },
    {
      title: 'Data Management',
      icon: <Database />,
      description: 'Manage your data and exports',
      settings: (
        <div className="mt-4 space-y-6">
          <div>
            <p className="font-medium mb-2">Data Export</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Export all your data in various formats for backup or analysis purposes.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Export as CSV</Button>
              <Button variant="outline" size="sm">Export as JSON</Button>
              <Button variant="outline" size="sm">Export as Excel</Button>
            </div>
          </div>
          
          <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
            <p className="font-medium mb-2">Data Retention</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Control how long your data is stored in the system.
            </p>
            <Select 
              options={[
                { value: '30days', label: '30 Days' },
                { value: '90days', label: '90 Days' },
                { value: '1year', label: '1 Year' },
                { value: 'forever', label: 'Forever' },
              ]} 
              defaultValue="forever"
            />
          </div>
          
          <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
            <p className="font-medium mb-2 text-error-600 dark:text-error-400">Danger Zone</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Once you delete your account, there is no going back. Please be certain.
            </p>
            <Button variant="outline" size="sm" className="text-error-600 border-error-300 hover:bg-error-50 dark:border-error-700 dark:text-error-400 dark:hover:bg-error-900/20">
              Delete Account
            </Button>
          </div>
        </div>
      ),
    },
    {
      title: 'Security',
      icon: <Shield />,
      description: 'Manage your security settings',
      settings: (
        <div className="mt-4 space-y-6">
          <div>
            <p className="font-medium mb-2">Two-Factor Authentication</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Add an additional layer of security to your account.
            </p>
            <Button variant="primary">Enable 2FA</Button>
          </div>
          
          <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
            <p className="font-medium mb-2">Session Management</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              View and manage your active sessions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700">
                <div>
                  <p className="font-medium">Current Session</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    San Francisco, CA • Chrome on macOS • Started 2 hours ago
                  </p>
                </div>
                <span className="badge badge-success">Active</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700">
                <div>
                  <p className="font-medium">Mobile App</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    San Francisco, CA • iOS 15 • Started 1 day ago
                  </p>
                </div>
                <Button variant="outline" size="sm">Revoke</Button>
              </div>
            </div>
          </div>
          
          <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
            <p className="font-medium mb-2">API Keys</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Manage your API keys for third-party applications.
            </p>
            <Button variant="outline">Generate New API Key</Button>
          </div>
        </div>
      ),
    },
    {
      title: 'Billing',
      icon: <Clock />,
      description: 'Manage your subscription and payment methods',
      settings: (
        <div className="mt-4 space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Current Plan</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">You're currently on the Premium plan.</p>
              </div>
              <Badge variant="primary">Premium</Badge>
            </div>
            <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium">Premium Plan</p>
                <p className="font-medium">$29/month</p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Renews on November 15, 2023
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Change Plan</Button>
                <Button variant="outline" size="sm" className="text-error-600 border-error-300 hover:bg-error-50 dark:border-error-700 dark:text-error-400 dark:hover:bg-error-900/20">
                  Cancel
                </Button>
              </div>
            </div>
          </div>
          
          <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
            <p className="font-medium mb-2">Payment Method</p>
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="h-10 w-14 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div>
                  <p className="font-medium">Visa ending in 4242</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Expires 12/2024
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm">Edit</Button>
            </div>
            <div className="mt-2">
              <Button variant="outline" size="sm">Add Payment Method</Button>
            </div>
          </div>
          
          <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
            <p className="font-medium mb-2">Billing History</p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                    <th className="px-3 py-2 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Receipt</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-3 py-2 whitespace-nowrap text-sm">Oct 15, 2023</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm">$29.00</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm">
                      <Badge variant="success">Paid</Badge>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-right">
                      <a href="#" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                        Download
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-nowrap text-sm">Sep 15, 2023</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm">$29.00</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm">
                      <Badge variant="success">Paid</Badge>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-right">
                      <a href="#" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                        Download
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 whitespace-nowrap text-sm">Aug 15, 2023</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm">$29.00</td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm">
                      <Badge variant="success">Paid</Badge>
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap text-sm text-right">
                      <a href="#" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                        Download
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Help & Support',
      icon: <HelpCircle />,
      description: 'Get help with your account',
      settings: (
        <div className="mt-4 space-y-6">
          <div>
            <p className="font-medium mb-2">Documentation</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Explore our comprehensive documentation to get the most out of the dashboard.
            </p>
            <Button variant="outline">View Documentation</Button>
          </div>
          
          <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
            <p className="font-medium mb-2">Contact Support</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Having issues? Our support team is here to help.
            </p>
            <Button variant="primary">Contact Support</Button>
          </div>
          
          <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
            <p className="font-medium mb-2">FAQ</p>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700">
                <p className="font-medium">How do I change my password?</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  You can change your password in the Security section of your profile settings.
                </p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700">
                <p className="font-medium">How do I upgrade my plan?</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  You can upgrade your plan in the Billing section of your settings.
                </p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700">
                <p className="font-medium">How do I cancel my subscription?</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  You can cancel your subscription in the Billing section of your settings.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-semibold">Settings</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Manage your account settings and preferences.
        </p>
      </div>

      <div className="space-y-6">
        {settingsSections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-primary-600 dark:text-primary-400">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium">{section.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {section.description}
                  </p>
                  {section.settings}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SettingsPage;