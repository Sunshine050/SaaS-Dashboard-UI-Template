import React from 'react';
import { 
  Area, 
  AreaChart as RechartsAreaChart, 
  CartesianGrid, 
  ResponsiveContainer, 
  Tooltip, 
  TooltipProps,
  XAxis, 
  YAxis 
} from 'recharts';
import Card from '../ui/Card';

interface AreaChartProps {
  data: Array<Record<string, any>>;
  title?: string;
  subtitle?: string;
  dataKeys: string[];
  colors?: string[];
  xAxisKey?: string;
  className?: string;
}

const AreaChart: React.FC<AreaChartProps> = ({
  data,
  title,
  subtitle,
  dataKeys,
  colors = ['#4f46e5', '#10b981', '#f59e0b'],
  xAxisKey = 'name',
  className = '',
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
        <RechartsAreaChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <defs>
            {dataKeys.map((key, i) => (
              <linearGradient key={key} id={`color${key}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors[i % colors.length]} stopOpacity={0.8} />
                <stop offset="95%" stopColor={colors[i % colors.length]} stopOpacity={0.1} />
              </linearGradient>
            ))}
          </defs>
          
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
          
          <CartesianGrid 
            strokeDasharray="3 3" 
            vertical={false} 
            stroke="#e5e7eb" 
          />
          
          <Tooltip content={<CustomTooltip />} />
          
          {dataKeys.map((key, i) => (
            <Area
              key={key}
              type="monotone"
              dataKey={key}
              stroke={colors[i % colors.length]}
              fillOpacity={1}
              fill={`url(#color${key})`}
            />
          ))}
        </RechartsAreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default AreaChart;