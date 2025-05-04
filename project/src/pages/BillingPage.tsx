import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, CheckCircle, AlertTriangle, Download, TrendingUp } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

const BillingPage: React.FC = () => {
  const plans = [
    {
      name: 'Basic',
      price: 9,
      period: 'month',
      features: [
        '5 team members',
        '50GB storage',
        'Basic analytics',
        'Email support',
      ],
      current: false,
    },
    {
      name: 'Premium',
      price: 29,
      period: 'month',
      features: [
        'Unlimited team members',
        '200GB storage',
        'Advanced analytics',
        'Priority support',
        'Custom reporting',
      ],
      current: true,
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 99,
      period: 'month',
      features: [
        'Unlimited team members',
        'Unlimited storage',
        'Advanced analytics',
        '24/7 dedicated support',
        'Custom reporting',
        'API access',
        'SSO integration',
      ],
      current: false,
    },
  ];

  const invoices = [
    {
      id: 'INV-001',
      date: 'Oct 15, 2023',
      amount: '$29.00',
      status: 'paid',
    },
    {
      id: 'INV-002',
      date: 'Sep 15, 2023',
      amount: '$29.00',
      status: 'paid',
    },
    {
      id: 'INV-003',
      date: 'Aug 15, 2023',
      amount: '$29.00',
      status: 'paid',
    },
    {
      id: 'INV-004',
      date: 'Jul 15, 2023',
      amount: '$29.00',
      status: 'paid',
    },
    {
      id: 'INV-005',
      date: 'Jun 15, 2023',
      amount: '$29.00',
      status: 'paid',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-semibold">Billing</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Manage your subscription and billing information.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium">Current Plan</h2>
              <Badge variant="primary">Premium</Badge>
            </div>
            
            <div className="flex items-baseline mb-4">
              <span className="text-3xl font-bold">$29</span>
              <span className="text-gray-500 dark:text-gray-400 ml-1">/month</span>
            </div>
            
            <div className="mb-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Your plan renews on <span className="font-medium text-gray-900 dark:text-white">November 15, 2023</span>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Includes:</h3>
                <ul className="space-y-1">
                  {plans[1].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={16} className="text-success-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Usage:</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">Team members</span>
                      <span className="text-sm">8/Unlimited</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-primary-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">Storage</span>
                      <span className="text-sm">120GB/200GB</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-primary-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button variant="outline">Change Plan</Button>
              <Button variant="outline" className="text-error-600 border-error-300 hover:bg-error-50 dark:border-error-700 dark:text-error-400 dark:hover:bg-error-900/20">
                Cancel Subscription
              </Button>
            </div>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Card title="Payment Method">
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-10 h-6 bg-gray-200 dark:bg-gray-700 rounded mr-3"></div>
                  <span className="font-medium">Visa ending in 4242</span>
                </div>
                <Badge variant="primary">Default</Badge>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Expires 12/2024</p>
              <div className="mt-3 flex gap-2">
                <Button variant="outline" size="sm">Edit</Button>
                <Button variant="outline" size="sm">Remove</Button>
              </div>
            </div>
            
            <Button variant="outline" fullWidth>
              <CreditCard size={16} className="mr-2" />
              Add Payment Method
            </Button>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Card title="Available Plans" subtitle="Compare and choose the best plan for your needs">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Plan
                      </th>
                      {plans.map((plan) => (
                        <th key={plan.name} scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          <div className="flex flex-col items-center">
                            <span>{plan.name}</span>
                            {plan.popular && (
                              <span className="mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
                                Popular
                              </span>
                            )}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        Price
                      </td>
                      {plans.map((plan) => (
                        <td key={plan.name} className="px-6 py-4 whitespace-nowrap text-sm text-center">
                          <div className="flex flex-col items-center">
                            <span className="font-bold text-lg">${plan.price}</span>
                            <span className="text-gray-500 dark:text-gray-400">per {plan.period}</span>
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        Team Members
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        5
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        Unlimited
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        Unlimited
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        Storage
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        50GB
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        200GB
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        Unlimited
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        Support
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        Email
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        Priority
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        24/7 Dedicated
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        Analytics
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        Basic
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        Advanced
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        Advanced
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        API Access
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        <AlertTriangle size={16} className="text-warning-500 mx-auto" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        <AlertTriangle size={16} className="text-warning-500 mx-auto" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        <CheckCircle size={16} className="text-success-500 mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        SSO Integration
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        <AlertTriangle size={16} className="text-warning-500 mx-auto" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        <AlertTriangle size={16} className="text-warning-500 mx-auto" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        <CheckCircle size={16} className="text-success-500 mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4"></td>
                      {plans.map((plan) => (
                        <td key={plan.name} className="px-6 py-4 whitespace-nowrap text-sm text-center">
                          <Button 
                            variant={plan.current ? 'outline' : 'primary'} 
                            disabled={plan.current}
                          >
                            {plan.current ? 'Current Plan' : 'Upgrade'}
                          </Button>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Card title="Billing History">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Invoice
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {invoice.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {invoice.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {invoice.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <Badge variant={invoice.status === 'paid' ? 'success' : invoice.status === 'pending' ? 'warning' : 'error'}>
                        {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                      <button className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 inline-flex items-center">
                        <Download size={16} className="mr-1" />
                        PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Card title="Usage Analytics">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium">Team Members</h3>
                <TrendingUp size={16} className="text-success-500" />
              </div>
              <p className="text-2xl font-bold">8</p>
              <div className="mt-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Current usage</span>
                  <span className="text-xs font-medium">Unlimited</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div className="bg-primary-500 h-1.5 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium">Storage</h3>
                <TrendingUp size={16} className="text-success-500" />
              </div>
              <p className="text-2xl font-bold">120GB</p>
              <div className="mt-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Current usage</span>
                  <span className="text-xs font-medium">200GB</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div className="bg-primary-500 h-1.5 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium">API Calls</h3>
                <TrendingUp size={16} className="text-success-500" />
              </div>
              <p className="text-2xl font-bold">8.2k</p>
              <div className="mt-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Current usage</span>
                  <span className="text-xs font-medium">10k</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div className="bg-primary-500 h-1.5 rounded-full" style={{ width: '82%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default BillingPage;