import React, { useState } from 'react';
import { X, Send, Paperclip } from 'lucide-react';

interface ChatMessage {
  id: number;
  sender: string;
  message: string;
  timestamp: Date;
  type: 'text' | 'file';
  fileUrl?: string;
}

const MOCK_MESSAGES: ChatMessage[] = [
  {
    id: 1,
    sender: 'Teacher',
    message: 'Welcome to today\'s class!',
    timestamp: new Date(),
    type: 'text'
  },
  {
    id: 2,
    sender: 'Student 1',
    message: 'Shared: Homework.pdf',
    timestamp: new Date(),
    type: 'file',
    fileUrl: '#'
  }
];

interface ChatPanelProps {
  onClose: () => void;
}

export function ChatPanel({ onClose }: ChatPanelProps) {
  const [message, setMessage] = useState('');
  const [filter, setFilter] = useState<'all' | 'files'>('all');

  const filteredMessages = MOCK_MESSAGES.filter(msg => 
    filter === 'all' || (filter === 'files' && msg.type === 'file')
  );

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b flex items-center justify-between">
        <h2 className="font-semibold">Class Chat</h2>
        <div className="flex items-center space-x-4">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as 'all' | 'files')}
            className="text-sm border rounded p-1"
          >
            <option value="all">All Messages</option>
            <option value="files">Files Only</option>
          </select>
          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {filteredMessages.map((msg) => (
          <div key={msg.id} className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="font-medium">{msg.sender}</span>
              <span className="text-xs text-gray-500">
                {msg.timestamp.toLocaleTimeString()}
              </span>
            </div>
            <div className={`mt-1 p-3 rounded-lg ${
              msg.type === 'file' 
                ? 'bg-blue-50 text-blue-700' 
                : 'bg-gray-100'
            }`}>
              {msg.type === 'file' ? (
                <a href={msg.fileUrl} className="flex items-center space-x-2">
                  <Paperclip size={16} />
                  <span>{msg.message}</span>
                </a>
              ) : (
                msg.message
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <Paperclip size={20} />
          </button>
          <button 
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
            onClick={() => setMessage('')}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}