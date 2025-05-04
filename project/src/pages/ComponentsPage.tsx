import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, AlertCircle, CheckCircle, Info, X, Search, Plus, Mail } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Modal from '../components/ui/Modal';
import Select from '../components/ui/Select';
import Tabs from '../components/ui/Tabs';
import Badge from '../components/ui/Badge';
import { buttonExamples, selectOptions, tabsExample } from '../data/mockData';

const ComponentsPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const colors = ['primary', 'secondary', 'accent', 'success', 'warning', 'error'];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-semibold">UI Components</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          A showcase of all UI components available in the dashboard.
        </p>
      </div>

      {/* Buttons Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card title="Buttons" subtitle="Various button styles and variants">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium mb-2">Button Variants</h3>
              <div className="flex flex-wrap gap-3">
                {buttonExamples.map((button) => (
                  <Button 
                    key={button.variant} 
                    variant={button.variant as any}
                  >
                    {button.label}
                  </Button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">Button Sizes</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">Icon Buttons</h3>
              <div className="flex flex-wrap gap-3">
                <Button icon={<Plus size={16} />}>Create New</Button>
                <Button icon={<Mail size={16} />} iconPosition="right">Send Email</Button>
                <Button variant="outline" icon={<Search size={16} />}>Search</Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">Loading State</h3>
              <div className="flex flex-wrap gap-3">
                <Button isLoading>Loading</Button>
                <Button variant="outline" isLoading>Loading</Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">Disabled State</h3>
              <div className="flex flex-wrap gap-3">
                <Button disabled>Disabled</Button>
                <Button variant="outline" disabled>Disabled</Button>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Form Elements Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card title="Form Elements" subtitle="Input fields, select dropdowns, and more">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Text Inputs</h3>
                <div className="space-y-3">
                  <Input label="Default Input" placeholder="Enter text..." />
                  <Input 
                    label="With Left Icon" 
                    placeholder="Search..." 
                    leftIcon={<Search size={16} className="text-gray-500" />} 
                  />
                  <Input 
                    label="With Right Icon" 
                    placeholder="Email address" 
                    rightIcon={<Mail size={16} className="text-gray-500" />} 
                  />
                  <Input 
                    label="With Error" 
                    placeholder="Invalid input" 
                    error="This field is required" 
                  />
                  <Input 
                    label="With Hint" 
                    placeholder="Password" 
                    type="password" 
                    hint="Must be at least 8 characters" 
                  />
                  <Input label="Disabled" placeholder="Disabled input" disabled />
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Select Dropdowns</h3>
                <div className="space-y-3">
                  <Select 
                    label="Default Select" 
                    options={selectOptions} 
                  />
                  <Select 
                    label="With Placeholder" 
                    options={[
                      { value: '', label: 'Select an option' },
                      ...selectOptions
                    ]} 
                    defaultValue=""
                  />
                  <Select 
                    label="With Error" 
                    options={selectOptions} 
                    error="Please select an option" 
                  />
                  <Select 
                    label="With Hint" 
                    options={selectOptions} 
                    hint="Select the best option for you" 
                  />
                  <Select 
                    label="Disabled" 
                    options={selectOptions} 
                    disabled 
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">Checkboxes & Radio Buttons</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-primary-600" />
                    <span className="ml-2">Default Checkbox</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" defaultChecked className="form-checkbox h-4 w-4 text-primary-600" />
                    <span className="ml-2">Checked Checkbox</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" disabled className="form-checkbox h-4 w-4 text-primary-600" />
                    <span className="ml-2 text-gray-500">Disabled Checkbox</span>
                  </label>
                </div>
                
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="radio" name="radio-group" className="form-radio h-4 w-4 text-primary-600" />
                    <span className="ml-2">Default Radio</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="radio-group" defaultChecked className="form-radio h-4 w-4 text-primary-600" />
                    <span className="ml-2">Checked Radio</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="radio-group" disabled className="form-radio h-4 w-4 text-primary-600" />
                    <span className="ml-2 text-gray-500">Disabled Radio</span>
                  </label>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">Toggles</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between max-w-md">
                  <span>Default Toggle</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between max-w-md">
                  <span>Checked Toggle</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between max-w-md">
                  <span className="text-gray-500">Disabled Toggle</span>
                  <label className="relative inline-flex items-center cursor-not-allowed">
                    <input type="checkbox" disabled className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 opacity-50 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Cards & Tabs Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Card title="Cards & Tabs" subtitle="Display containers and tabbed interfaces">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card 
                title="Basic Card" 
                subtitle="With title and subtitle"
                hover
              >
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  This is a card with hover effect enabled.
                </p>
              </Card>
              
              <Card 
                title="Card with Footer" 
                footer={
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm" className="mr-2">Cancel</Button>
                    <Button variant="primary" size="sm">Save</Button>
                  </div>
                }
              >
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  This card has a footer with action buttons.
                </p>
              </Card>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">Tabs</h3>
              <div className="space-y-4">
                <Tabs 
                  tabs={tabsExample.map(tab => ({
                    ...tab,
                    content: <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-md">{tab.content}</div>
                  }))} 
                />
                
                <Tabs 
                  tabs={tabsExample.map(tab => ({
                    ...tab,
                    content: <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-md">{tab.content}</div>
                  }))} 
                  variant="pills"
                />
                
                <Tabs 
                  tabs={tabsExample.map(tab => ({
                    ...tab,
                    content: <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-md">{tab.content}</div>
                  }))} 
                  variant="underline"
                />
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Badges & Alerts Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card title="Badges & Alerts" subtitle="Status indicators and notification elements">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium mb-2">Badges</h3>
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <Badge key={color} variant={color as any}>
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">Alerts</h3>
              <div className="space-y-3">
                <div className="p-4 bg-primary-50 text-primary-800 rounded-md border border-primary-200 dark:bg-primary-900/30 dark:border-primary-800 dark:text-primary-300">
                  <div className="flex">
                    <Info size={16} className="mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Information</p>
                      <p className="text-sm mt-1">This is an informational message.</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-success-50 text-success-800 rounded-md border border-success-200 dark:bg-success-900/30 dark:border-success-800 dark:text-success-300">
                  <div className="flex">
                    <CheckCircle size={16} className="mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Success</p>
                      <p className="text-sm mt-1">Your changes have been saved successfully.</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-warning-50 text-warning-800 rounded-md border border-warning-200 dark:bg-warning-900/30 dark:border-warning-800 dark:text-warning-300">
                  <div className="flex">
                    <AlertCircle size={16} className="mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Warning</p>
                      <p className="text-sm mt-1">Please review your information before continuing.</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-error-50 text-error-800 rounded-md border border-error-200 dark:bg-error-900/30 dark:border-error-800 dark:text-error-300">
                  <div className="flex">
                    <X size={16} className="mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Error</p>
                      <p className="text-sm mt-1">There was a problem processing your request.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Modals & Dialogs Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Card title="Modals & Dialogs" subtitle="Overlay windows for focused interactions">
          <div className="space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Click the button below to open a modal dialog.
            </p>
            
            <div>
              <Button variant="primary" onClick={toggleModal}>
                Open Modal
              </Button>
              
              <Modal 
                isOpen={isModalOpen}
                onClose={toggleModal}
                title="Modal Example"
                footer={
                  <div className="flex justify-end">
                    <Button variant="outline" className="mr-2" onClick={toggleModal}>
                      Cancel
                    </Button>
                    <Button variant="primary" onClick={toggleModal}>
                      Confirm
                    </Button>
                  </div>
                }
              >
                <p className="text-gray-600 dark:text-gray-300">
                  This is an example modal dialog. You can use it to display important information or
                  collect user input without navigating away from the current page.
                </p>
                <div className="mt-4">
                  <Input label="Sample Input" placeholder="Enter some text..." />
                </div>
              </Modal>
            </div>
            
            <div className="mt-6">
              <h3 className="text-sm font-medium mb-2">Modal Sizes</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" onClick={() => {}}>
                  Small Modal
                </Button>
                <Button variant="outline" onClick={() => {}}>
                  Medium Modal
                </Button>
                <Button variant="outline" onClick={() => {}}>
                  Large Modal
                </Button>
                <Button variant="outline" onClick={() => {}}>
                  Extra Large Modal
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Tables & Lists Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Card title="Tables & Lists" subtitle="Data display patterns">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium mb-2">Basic Table</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Role
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          User {i + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          user{i + 1}@example.com
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <Badge variant={i === 0 ? 'success' : i === 1 ? 'warning' : 'error'}>
                            {i === 0 ? 'Active' : i === 1 ? 'Pending' : 'Inactive'}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {i === 0 ? 'Admin' : i === 1 ? 'Editor' : 'Viewer'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">List</h3>
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {Array.from({ length: 3 }).map((_, i) => (
                  <li key={i} className="py-3 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 px-4 rounded-md">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                      <div className="ml-4">
                        <p className="text-sm font-medium">List Item {i + 1}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Description here</p>
                      </div>
                    </div>
                    <ChevronRight size={16} className="text-gray-400" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default ComponentsPage;