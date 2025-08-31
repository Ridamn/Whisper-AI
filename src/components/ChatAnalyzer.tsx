import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, MessageCircle, TrendingUp, Heart, AlertTriangle } from 'lucide-react';
import { ChatUpload } from './ChatUpload';
import { AnalyticsCards } from './AnalyticsCards';
import { ChatInsights } from './ChatInsights';

interface ChatData {
  participants: { [key: string]: number };
  sentiment: string;
  main_topics: string[];
  patterns: string[];
  summary: string;
  love_interest_score: number;
  love_interest_explanation: string;
  responseTime: { you: string; her: string };
  interestLevel: { you: number; her: number };
  compliments: { you: number; her: number };
  redFlags: Array<{ icon: string; text: string; type: string }>;
  topWords: {
    you: Array<{ word: string; count: number }>;
    her: Array<{ word: string; count: number }>;
  };
  attachmentStyle: { you: string; her: string; youPercent: number; herPercent: number };
  messagesPerMonth: number[];
}

export const ChatAnalyzer: React.FC = () => {
  const [chatData, setChatData] = useState<ChatData | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const mockAnalysis = (): ChatData => ({
    participants: { you: 5789, her: 872 },
    sentiment: "Mixed with concerning patterns",
    main_topics: ["daily life", "work", "relationships", "plans"],
    patterns: ["High message imbalance", "Delayed responses from her", "Frequent blocking incidents"],
    summary: "Analysis reveals significant communication imbalances with concerning red flags including blocking behavior and excessive calling when unreachable.",
    love_interest_score: 23,
    love_interest_explanation: "Low score due to extreme response time differences, blocking incidents, and communication imbalances.",
    responseTime: { you: "34s", her: "13 hours" },
    interestLevel: { you: 87, her: 2 },
    compliments: { you: 1789, her: 0 },
    redFlags: [
      { icon: "🍆", text: "Still hangs out with her ex Blake", type: "relationship" },
      { icon: "💸", text: "Called you broke 23 times", type: "financial" },
      { icon: "❌", text: "Blocked you a total of 122 times", type: "communication" }
    ],
    topWords: {
      you: [
        { word: "Amy", count: 599 },
        { word: "😊", count: 428 },
        { word: "please", count: 401 },
        { word: "sorry", count: 350 },
        { word: "no", count: 274 }
      ],
      her: [
        { word: "Blake", count: 98 },
        { word: "block", count: 87 },
        { word: "🍆", count: 60 },
        { word: "syd", count: 49 },
        { word: "no", count: 30 }
      ]
    },
    attachmentStyle: { you: "anxious", her: "avoidant", youPercent: 68, herPercent: 100 },
    messagesPerMonth: [800, 1200, 1800, 1600, 1400, 1200, 1000, 900, 1100, 1300, 1500, 2200]
  });

  const handleAnalyze = async (chatText: string) => {
    setIsAnalyzing(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // For demo purposes, use mock data
    setChatData(mockAnalysis());
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-soft via-purple-soft to-blue-soft p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-primary to-purple-dark bg-clip-text text-transparent mb-4">
            Chat Recap
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload your WhatsApp chat export and get detailed insights about your conversation patterns, sentiment analysis, and relationship dynamics.
          </p>
        </div>

        {!chatData ? (
          <ChatUpload onAnalyze={handleAnalyze} isLoading={isAnalyzing} />
        ) : (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-foreground">Analysis Results</h2>
              <Button 
                onClick={() => setChatData(null)}
                variant="outline"
                className="bg-white/80 hover:bg-white/90"
              >
                New Analysis
              </Button>
            </div>
            
            <AnalyticsCards data={chatData} />
            <ChatInsights data={chatData} />
          </div>
        )}
      </div>
    </div>
  );
};