import React, { useState } from 'react';
import { VideoGrid } from './components/VideoGrid';
import { Whiteboard } from './components/Whiteboard';
import { ChatPanel } from './components/ChatPanel';
import { Layout } from './components/Layout';
import { ParticipationInsights } from './components/ParticipationInsights';
import { VideoControls } from './components/VideoControls';
import { Users, MessageSquare, PenTool, BarChart } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState<'video' | 'whiteboard' | 'chat' | 'insights'>('video');
  const [isChatOpen, setIsChatOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <Layout
        sidebar={
          <div className="flex flex-col h-full">
            <div className="flex-1">
              <nav className="space-y-2 p-4">
                <button
                  onClick={() => setActiveTab('video')}
                  className={`w-full flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                    activeTab === 'video' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                  }`}
                >
                  <Users size={20} />
                  <span>Participants</span>
                </button>
                <button
                  onClick={() => setActiveTab('whiteboard')}
                  className={`w-full flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                    activeTab === 'whiteboard' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                  }`}
                >
                  <PenTool size={20} />
                  <span>Whiteboard</span>
                </button>
                <button
                  onClick={() => setActiveTab('insights')}
                  className={`w-full flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                    activeTab === 'insights' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                  }`}
                >
                  <BarChart size={20} />
                  <span>Insights</span>
                </button>
              </nav>
            </div>
            <div className="p-4 border-t">
              <VideoControls />
            </div>
          </div>
        }
        main={
          <main className="h-full">
            {activeTab === 'video' && <VideoGrid />}
            {activeTab === 'whiteboard' && <Whiteboard />}
            {activeTab === 'insights' && <ParticipationInsights />}
          </main>
        }
        chat={isChatOpen && <ChatPanel onClose={() => setIsChatOpen(false)} />}
      />
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
}

export default App;