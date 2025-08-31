import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { MessageCircle, Clock, TrendingUp, Award } from 'lucide-react';

interface AnalyticsData {
  participants: { [key: string]: number };
  responseTime: { you: string; her: string };
  interestLevel: { you: number; her: number };
  compliments: { you: number; her: number };
}

interface AnalyticsCardsProps {
  data: AnalyticsData;
}

export const AnalyticsCards: React.FC<AnalyticsCardsProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Messages Count */}
      <Card className="p-6 bg-gradient-to-br from-lavender-soft to-lavender-medium/30 border-border shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-lavender-dark">Messages count</h3>
          <MessageCircle className="w-6 h-6 text-lavender-dark" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-lavender-dark/70">you</p>
            <p className="text-3xl font-bold text-lavender-dark">{data.participants.you.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-lavender-dark/70">her</p>
            <p className="text-3xl font-bold text-lavender-dark">{data.participants.her.toLocaleString()}</p>
          </div>
        </div>
      </Card>

      {/* Average Response Time */}
      <Card className="p-6 bg-gradient-to-br from-violet-soft to-violet-medium/30 border-border shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-violet-dark">Average response time</h3>
          <Clock className="w-6 h-6 text-violet-dark" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-violet-dark/70">you</p>
            <p className="text-3xl font-bold text-violet-dark">{data.responseTime.you}</p>
          </div>
          <div>
            <p className="text-sm text-violet-dark/70">her</p>
            <p className="text-3xl font-bold text-violet-dark">{data.responseTime.her}</p>
          </div>
        </div>
      </Card>

      {/* Interest Level */}
      <Card className="p-6 bg-gradient-to-br from-purple-soft to-purple-medium/30 border-border shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-purple-dark">Interest level</h3>
          <TrendingUp className="w-6 h-6 text-purple-dark" />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="text-center">
            <p className="text-sm text-purple-dark/70 mb-2">you</p>
            <div className="relative w-20 h-20 mx-auto mb-2">
              <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-purple-soft"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="transparent"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-purple-medium"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeDasharray={`${data.interestLevel.you}, 100`}
                  strokeLinecap="round"
                  fill="transparent"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-dark">{data.interestLevel.you}%</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-purple-dark/70 mb-2">her</p>
            <div className="relative w-20 h-20 mx-auto mb-2">
              <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-purple-soft"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="transparent"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-purple-medium"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeDasharray={`${data.interestLevel.her}, 100`}
                  strokeLinecap="round"
                  fill="transparent"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-dark">{data.interestLevel.her}%</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Compliment Count */}
      <Card className="p-6 bg-gradient-to-br from-blue-soft to-blue-medium/30 border-border shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-blue-dark">Compliment count</h3>
          <Award className="w-6 h-6 text-blue-dark" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-blue-dark/70">you</p>
            <p className="text-3xl font-bold text-blue-dark">{data.compliments.you.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-blue-dark/70">her</p>
            <p className="text-3xl font-bold text-blue-dark">{data.compliments.her}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};