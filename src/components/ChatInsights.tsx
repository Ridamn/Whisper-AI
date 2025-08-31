import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { AlertTriangle, TrendingUp, MessageCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChatInsightsData {
  redFlags: Array<{ icon: string; text: string; type: string }>;
  topWords: {
    you: Array<{ word: string; count: number }>;
    her: Array<{ word: string; count: number }>;
  };
  attachmentStyle: { you: string; her: string; youPercent: number; herPercent: number };
  messagesPerMonth: number[];
}

interface ChatInsightsProps {
  data: ChatInsightsData;
}

export const ChatInsights: React.FC<ChatInsightsProps> = ({ data }) => {
  const chartData = data.messagesPerMonth.map((messages, index) => ({
    month: index + 1,
    messages
  }));

  const maxCount = Math.max(...data.topWords.you.map(w => w.count), ...data.topWords.her.map(w => w.count));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Red Flags */}
      <Card className="p-6 bg-gradient-to-br from-red-50 to-red-100 border-0 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-6 h-6 text-red-600" />
          <h3 className="text-lg font-semibold text-red-700">Red Flags ⚠️</h3>
        </div>
        <div className="mb-4 text-sm font-medium text-red-700">Amy</div>
        <div className="space-y-3">
          {data.redFlags.map((flag, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-white/50 rounded-lg">
              <span className="text-2xl">{flag.icon}</span>
              <span className="text-red-700 font-medium">{flag.text}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Top Used Words (Her) */}
      <Card className="p-6 bg-gradient-to-br from-blue-soft to-blue-medium/30 border-0 shadow-lg">
        <h3 className="text-lg font-semibold text-blue-dark mb-4">Top used words (her)</h3>
        <div className="space-y-3">
          {data.topWords.her.map((word, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-blue-dark font-medium">{word.word}</span>
              </div>
              <div className="flex items-center gap-2 w-32">
                <Progress 
                  value={(word.count / maxCount) * 100} 
                  className="flex-1 h-2"
                />
                <span className="text-sm text-blue-dark w-8 text-right">{word.count}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Top Used Words (You) */}
      <Card className="p-6 bg-gradient-to-br from-purple-soft to-purple-medium/30 border-0 shadow-lg">
        <h3 className="text-lg font-semibold text-purple-dark mb-4">Top used words (you)</h3>
        <div className="space-y-3">
          {data.topWords.you.map((word, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-purple-dark font-medium">{word.word}</span>
              </div>
              <div className="flex items-center gap-2 w-32">
                <Progress 
                  value={(word.count / maxCount) * 100} 
                  className="flex-1 h-2"
                />
                <span className="text-sm text-purple-dark w-8 text-right">{word.count}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Attachment Style */}
      <Card className="p-6 bg-gradient-to-br from-yellow-soft to-yellow-medium/30 border-0 shadow-lg">
        <h3 className="text-lg font-semibold text-yellow-dark mb-4">Attachment style</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="text-center">
            <p className="text-sm text-yellow-dark/70 mb-2">you</p>
            <p className="text-2xl font-bold text-yellow-dark mb-2">{data.attachmentStyle.you}</p>
            <p className="text-lg font-semibold text-yellow-dark">{data.attachmentStyle.youPercent}%</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-yellow-dark/70 mb-2">her</p>
            <p className="text-2xl font-bold text-yellow-dark mb-2">{data.attachmentStyle.her}</p>
            <p className="text-lg font-semibold text-yellow-dark">{data.attachmentStyle.herPercent}%</p>
          </div>
        </div>
      </Card>

      {/* Messages per Month Chart */}
      <Card className="lg:col-span-2 p-6 bg-gradient-to-br from-green-soft to-green-medium/30 border-0 shadow-lg">
        <h3 className="text-lg font-semibold text-green-dark mb-4">Messages per month</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis 
                dataKey="month" 
                stroke="#4a5568"
                fontSize={12}
              />
              <YAxis 
                stroke="#4a5568"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="messages" 
                stroke="hsl(var(--green-medium))"
                strokeWidth={3}
                dot={{ fill: 'hsl(var(--green-medium))', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};