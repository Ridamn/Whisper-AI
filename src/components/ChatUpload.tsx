import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Upload, MessageCircle, Loader2 } from 'lucide-react';

interface ChatUploadProps {
  onAnalyze: (chatText: string) => void;
  isLoading: boolean;
}

export const ChatUpload: React.FC<ChatUploadProps> = ({ onAnalyze, isLoading }) => {
  const [chatText, setChatText] = useState('');

  const handleSubmit = () => {
    if (chatText.trim()) {
      onAnalyze(chatText);
    }
  };

  const handleDemoData = () => {
    const demoChat = `[8/1/24, 10:30:15 AM] You: Hey Amy! How was your day?
[8/1/24, 11:45:23 PM] Amy: good
[8/1/24, 11:45:30 PM] Amy: was with Blake
[8/2/24, 8:15:45 AM] You: Oh okay, how's Blake doing?
[8/2/24, 8:16:12 AM] You: I thought you guys weren't talking anymore?
[8/2/24, 8:16:45 AM] You: Amy?
[8/2/24, 8:17:23 AM] You: Please respond
[8/3/24, 2:30:15 PM] Amy: Blake is fine
[8/3/24, 2:30:22 PM] Amy: blocked
[8/3/24, 2:45:30 PM] You: Wait what? Why did you block me?
[8/3/24, 2:45:45 PM] You: Amy please talk to me
[8/3/24, 2:46:12 PM] You: I'm sorry if I said something wrong
[8/4/24, 9:15:30 AM] Amy: unblocked you
[8/4/24, 9:16:45 AM] You: Thank you! I was really worried
[8/4/24, 9:17:23 AM] You: Can we talk about what happened?
[8/4/24, 11:30:45 PM] Amy: no`;
    
    setChatText(demoChat);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="p-8 bg-white/80 backdrop-blur-sm shadow-lg border-0">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-medium rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-foreground">Upload Your WhatsApp Chat</h3>
          <p className="text-muted-foreground">
            Export your WhatsApp chat and paste the content below for detailed analysis
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">
              Chat Export Content
            </label>
            <Textarea
              value={chatText}
              onChange={(e) => setChatText(e.target.value)}
              placeholder="Paste your WhatsApp chat export here..."
              className="min-h-[200px] resize-none bg-white border-gray-200 focus:border-primary"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={handleSubmit}
              disabled={!chatText.trim() || isLoading}
              className="flex-1 bg-gradient-to-r from-primary to-purple-medium hover:from-primary/90 hover:to-purple-medium/90 text-white border-0 h-12"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Analyzing Chat...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 mr-2" />
                  Analyze Chat
                </>
              )}
            </Button>
            
            <Button 
              onClick={handleDemoData}
              variant="outline"
              className="bg-white/80 hover:bg-white/90 border-gray-200 h-12"
            >
              Try Demo Data
            </Button>
          </div>
        </div>

        <div className="mt-8 p-4 bg-blue-soft rounded-lg">
          <h4 className="font-semibold text-blue-dark mb-2">How to export WhatsApp chat:</h4>
          <ol className="text-sm text-blue-dark space-y-1">
            <li>1. Open the chat you want to analyze</li>
            <li>2. Tap the contact/group name at the top</li>
            <li>3. Scroll down and tap "Export Chat"</li>
            <li>4. Choose "Without Media"</li>
            <li>5. Copy the content and paste it above</li>
          </ol>
        </div>
      </Card>
    </div>
  );
};