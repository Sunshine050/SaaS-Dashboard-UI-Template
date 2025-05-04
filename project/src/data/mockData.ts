import { Customer } from '../components/dashboard/CustomersTable';
import { Activity } from '../components/dashboard/UserActivity';
import { Task } from '../pages/DashboardPage';

// Mock data for the dashboard
export const salesData = [
  { name: 'Jan', revenue: 4000, profit: 2400, expenses: 1600 },
  { name: 'Feb', revenue: 3000, profit: 1398, expenses: 1602 },
  { name: 'Mar', revenue: 2000, profit: 800, expenses: 1200 },
  { name: 'Apr', revenue: 2780, profit: 908, expenses: 1872 },
  { name: 'May', revenue: 1890, profit: 800, expenses: 1090 },
  { name: 'Jun', revenue: 2390, profit: 1200, expenses: 1190 },
  { name: 'Jul', revenue: 3490, profit: 2100, expenses: 1390 },
  { name: 'Aug', revenue: 4000, profit: 2400, expenses: 1600 },
  { name: 'Sep', revenue: 3200, profit: 1650, expenses: 1550 },
  { name: 'Oct', revenue: 2800, profit: 1450, expenses: 1350 },
  { name: 'Nov', revenue: 3500, profit: 2200, expenses: 1300 },
  { name: 'Dec', revenue: 4200, profit: 2800, expenses: 1400 },
];

export const trafficData = [
  { name: 'Mon', direct: 2400, social: 1400, organic: 800 },
  { name: 'Tue', direct: 1398, social: 1700, organic: 1200 },
  { name: 'Wed', direct: 9800, social: 1200, organic: 1100 },
  { name: 'Thu', direct: 3908, social: 1900, organic: 1280 },
  { name: 'Fri', direct: 4800, social: 1398, organic: 1400 },
  { name: 'Sat', direct: 3800, social: 1100, organic: 900 },
  { name: 'Sun', direct: 4300, social: 900, organic: 700 },
];

export const deviceData = [
  { name: 'Desktop', value: 65 },
  { name: 'Mobile', value: 25 },
  { name: 'Tablet', value: 10 },
];

export const mockCustomers: Customer[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    status: 'active',
    lastActive: 'Today',
    spent: 1240.50,
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    status: 'active',
    lastActive: 'Yesterday',
    spent: 890.25,
  },
  {
    id: '3',
    name: 'Michael Brown',
    email: 'mbrown@example.com',
    status: 'inactive',
    lastActive: '2 weeks ago',
    spent: 2450.80,
  },
  {
    id: '4',
    name: 'Emily Davis',
    email: 'emilyd@example.com',
    status: 'pending',
    lastActive: '3 days ago',
    spent: 0,
  },
  {
    id: '5',
    name: 'Robert Wilson',
    email: 'rwilson@example.com',
    status: 'active',
    lastActive: 'Today',
    spent: 3200.45,
  },
];

export const mockActivities: Activity[] = [
  {
    id: '1',
    user: {
      name: 'John Smith',
    },
    action: 'updated the project',
    target: 'Website Redesign',
    time: '2 hours ago',
  },
  {
    id: '2',
    user: {
      name: 'Sarah Johnson',
    },
    action: 'commented on',
    target: 'Mobile App Development',
    time: '5 hours ago',
  },
  {
    id: '3',
    user: {
      name: 'Michael Brown',
    },
    action: 'completed task',
    target: 'Database Migration',
    time: 'Yesterday',
  },
  {
    id: '4',
    user: {
      name: 'Emily Davis',
    },
    action: 'added a new client',
    target: 'Acme Corporation',
    time: '2 days ago',
  },
];

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Complete project proposal',
    completed: false,
    priority: 'high',
    dueDate: 'Tomorrow',
  },
  {
    id: '2',
    title: 'Review client feedback',
    completed: true,
    priority: 'medium',
    dueDate: 'Today',
  },
  {
    id: '3',
    title: 'Prepare presentation slides',
    completed: false,
    priority: 'high',
    dueDate: 'In 2 days',
  },
  {
    id: '4',
    title: 'Update documentation',
    completed: false,
    priority: 'low',
    dueDate: 'Next week',
  },
  {
    id: '5',
    title: 'Schedule team meeting',
    completed: true,
    priority: 'medium',
    dueDate: 'Yesterday',
  },
];

// Common UI component examples for the components showcase
export const buttonExamples = [
  { variant: 'primary', label: 'Primary Button' },
  { variant: 'secondary', label: 'Secondary Button' },
  { variant: 'accent', label: 'Accent Button' },
  { variant: 'outline', label: 'Outline Button' },
  { variant: 'ghost', label: 'Ghost Button' },
];

export const selectOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
];

export const tabsExample = [
  { label: 'Tab 1', content: 'Content for Tab 1' },
  { label: 'Tab 2', content: 'Content for Tab 2' },
  { label: 'Tab 3', content: 'Content for Tab 3' },
];