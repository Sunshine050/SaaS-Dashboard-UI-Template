import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Lock, User, Mail, Edit2 } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Tabs from '../components/ui/Tabs';
import Select from '../components/ui/Select';

const ProfilePage: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const profileTabs = [
    {
      label: 'Profile',
      icon: <User size={16} />,
      content: (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1438086/pexels-photo-1438086.jpeg?auto=compress&cs=tinysrgb&w=150"
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-md"
              />
              <button className="absolute bottom-0 right-0 bg-primary-600 text-white p-1.5 rounded-full hover:bg-primary-700 transition-colors">
                <Edit2 size={14} />
              </button>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Sarah Johnson</h2>
              <p className="text-gray-500 dark:text-gray-400">Product Designer & Team Lead</p>
              <p className="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Mail size={14} className="mr-1" /> sarah.johnson@example.com
              </p>
            </div>
            <div className="ml-auto">
              <Button 
                variant={isEditing ? "outline" : "primary"} 
                onClick={handleEdit}
                icon={isEditing ? undefined : <Edit2 size={16} />}
              >
                {isEditing ? "Cancel" : "Edit Profile"}
              </Button>
            </div>
          </div>

          {isEditing ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <Input label="First Name" defaultValue="Sarah" />
              <Input label="Last Name" defaultValue="Johnson" />
              <Input label="Email" defaultValue="sarah.johnson@example.com" type="email" />
              <Input label="Phone" defaultValue="+1 (555) 123-4567" type="tel" />
              <Input label="Job Title" defaultValue="Product Designer & Team Lead" />
              <Select 
                label="Department" 
                options={[
                  { value: 'design', label: 'Design' },
                  { value: 'engineering', label: 'Engineering' },
                  { value: 'marketing', label: 'Marketing' },
                  { value: 'product', label: 'Product' },
                ]} 
                defaultValue="design"
              />
              <div className="md:col-span-2">
                <Input 
                  label="Bio" 
                  defaultValue="Product designer with 6+ years of experience in creating user-centered digital products."
                />
              </div>
              <div className="md:col-span-2 flex justify-end gap-2 mt-2">
                <Button variant="outline" onClick={handleEdit}>Cancel</Button>
                <Button variant="primary">Save Changes</Button>
              </div>
            </motion.div>
          ) : (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold mb-2">About</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Product designer with 6+ years of experience in creating user-centered digital products. 
                  Passionate about solving complex problems through design thinking and collaboration.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Department</p>
                  <p className="font-medium">Design</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="font-medium">San Francisco, CA</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Joined</p>
                  <p className="font-medium">March 2020</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Birthday</p>
                  <p className="font-medium">May 15, 1990</p>
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">UI Design</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">UX Research</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Prototyping</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Figma</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">Design Systems</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">User Testing</span>
                </div>
              </div>
            </div>
          )}
        </div>
      ),
    },
    {
      label: 'Security',
      icon: <Lock size={16} />,
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-base font-semibold mb-4">Change Password</h3>
            <div className="grid grid-cols-1 gap-4 max-w-md">
              <Input label="Current Password" type="password" />
              <Input label="New Password" type="password" />
              <Input label="Confirm New Password" type="password" />
              <div className="mt-2">
                <Button variant="primary">Update Password</Button>
              </div>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-base font-semibold mb-4">Two-Factor Authentication</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Add an extra layer of security to your account by enabling two-factor authentication.
            </p>
            <Button variant="outline">Enable 2FA</Button>
          </div>
          
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-base font-semibold mb-4">Connected Accounts</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#1DA1F2] rounded flex items-center justify-center text-white">T</div>
                  <span>Twitter</span>
                </div>
                <Button variant="outline" size="sm">Connect</Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#4267B2] rounded flex items-center justify-center text-white">F</div>
                  <span>Facebook</span>
                </div>
                <Button variant="outline" size="sm">Connect</Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#000000] rounded flex items-center justify-center text-white">G</div>
                  <span>GitHub</span>
                </div>
                <Button variant="outline" size="sm">Connect</Button>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: 'Notifications',
      icon: <Bell size={16} />,
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-base font-semibold mb-4">Email Notifications</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Comments and Mentions</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Get notified when someone mentions you or comments on your work.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Task Updates</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Get notified about changes to tasks you're assigned to.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Project Updates</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Get notified about important project updates and changes.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Marketing Emails</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Receive news, updates, and promotional emails from us.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                </label>
              </div>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-base font-semibold mb-4">Notification Preferences</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select 
                label="Email Frequency" 
                options={[
                  { value: 'immediate', label: 'Immediately' },
                  { value: 'daily', label: 'Daily Digest' },
                  { value: 'weekly', label: 'Weekly Digest' },
                ]} 
                defaultValue="immediate"
              />
              <Select 
                label="Push Notifications" 
                options={[
                  { value: 'all', label: 'All Notifications' },
                  { value: 'important', label: 'Important Only' },
                  { value: 'none', label: 'None' },
                ]} 
                defaultValue="important"
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-semibold">Profile</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Manage your account information and settings.
        </p>
      </div>

      <Card>
        <Tabs tabs={profileTabs} />
      </Card>
    </div>
  );
};

export default ProfilePage;