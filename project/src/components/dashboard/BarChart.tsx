import React from 'react';
import { 
  BarChart as RechartsBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  TooltipProps
} from 'recharts';
import Card from '../ui/Card';

interface BarChartProps {
  data: Array<Record<string, any>>;
  title?: string;
  subtitle?: string;
  dataKeys: string[];
  colors?: string[];
  xAxisKey?: string;
  className?: string;
  stacked?: boolean;
}

const BarChart: React.FC<BarChartProps> = ({
  data,
  title,
  subtitle,
  dataKeys,
  colors = ['#4f46e5', '#10b981', '#f59e0b'],
  xAxisKey = 'name',
  className = '',
  stacked = false,
}) => {
  const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-2 border border-gray-200 dark:border-gray-700 rounded shadow-lg">
          <p className="text-sm font-medium">{label}</p>
          {payload.map((entry, index) => (
            <p key={`item-${index}`} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
  
    return null;
  };

  return (
    <Card 
      title={title} 
      subtitle={subtitle}
      className={`h-80 ${className}`}
    >
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
          
          <XAxis 
            dataKey={xAxisKey} 
            tickLine={false}
            axisLine={false}
            tick={{ fill: '#9ca3af', fontSize: 12 }}
          />
          
          <YAxis 
            tickLine={false}
            axisLine={false}
            tick={{ fill: '#9ca3af', fontSize: 12 }}
          />
          
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          
          {dataKeys.map((key, i) => (
            <Bar
              key={key}
              dataKey={key}
              fill={colors[i % colors.length]}
              radius={[4, 4, 0, 0]}
              stackId={stacked ? "a" : undefined}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default BarChart;