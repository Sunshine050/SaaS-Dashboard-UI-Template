import React from 'react';
import { motion } from 'framer-motion';
import { MoreHorizontal } from 'lucide-react';
import Table from '../ui/Table';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

export interface Customer {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive' | 'pending';
  lastActive: string;
  spent: number;
}

interface CustomersTableProps {
  customers: Customer[];
  title?: string;
  className?: string;
  onRowClick?: (customer: Customer) => void;
}

const CustomersTable: React.FC<CustomersTableProps> = ({
  customers,
  title = 'Recent Customers',
  className = '',
  onRowClick,
}) => {
  const getStatusBadge = (status: Customer['status']) => {
    const variants = {
      active: <Badge variant="success">Active</Badge>,
      inactive: <Badge variant="error">Inactive</Badge>,
      pending: <Badge variant="warning">Pending</Badge>,
    };
    return variants[status];
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const columns = [
    {
      header: 'Name',
      accessor: (customer: Customer) => (
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm font-medium">
            {customer.name.charAt(0)}
          </div>
          <div>
            <p className="font-medium">{customer.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{customer.email}</p>
          </div>
        </div>
      ),
    },
    {
      header: 'Status',
      accessor: (customer: Customer) => getStatusBadge(customer.status),
    },
    {
      header: 'Last Active',
      accessor: 'lastActive',
    },
    {
      header: 'Total Spent',
      accessor: (customer: Customer) => formatCurrency(customer.spent),
      className: 'text-right',
    },
    {
      header: '',
      accessor: () => (
        <button className="text-gray-400 hover:text-gray-500 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
          <MoreHorizontal size={16} />
        </button>
      ),
      className: 'w-10 text-right',
    },
  ];

  return (
    <Card title={title} className={className}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Table
          data={customers}
          columns={columns}
          onRowClick={onRowClick}
        />
      </motion.div>
    </Card>
  );
};

export default CustomersTable;