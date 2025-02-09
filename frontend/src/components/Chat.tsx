import React, { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, Filter } from 'lucide-react';
import { useStore } from '../store/useStore';
import type { Message } from '../types';
import clsx from 'clsx';

export const Chat: React.FC = () => {
  const { messages, addMessage, currentUser } = useStore();
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState<'all' | 'text' | 'file'>('all');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (!input.trim() || !currentUser) return;

    addMessage({
      id: Date.now().toString(),
      userId: currentUser.id,
      userName: currentUser.name,
      content: input,
      timestamp: Date.now(),
      type: 'text',
    });

    setInput('');
  };

  const filteredMessages = messages.filter(msg => 
    filter === 'all' ? true : msg.type === filter
  );

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-lg">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <h3 className="text-lg font-semibold">Class Chat</h3>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
              className="text-sm border-none bg-transparent"
            >
              <option value="all">All</option>
              <option value="text">Messages</option>
              <option value="file">Files</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {filteredMessages.map((message) => (
          <div
            key={message.id}
            className={clsx(
              'max-w-[80%] rounded-lg p-3',
              message.userId === currentUser?.id
                ? 'ml-auto bg-blue-500 text-white'
                : 'bg-gray-100'
            )}
          >
            <div className="flex items-center gap-2 text-sm opacity-75">
              <span>{message.userName}</span>
              <span>•</span>
              <span>{new Date(message.timestamp).toLocaleTimeString()}</span>
            </div>
            <p className="mt-1">{message.content}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            title="Attach file"
          >
            <Paperclip className="w-5 h-5 text-gray-500" />
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type a message..."
            className="flex-1 p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors disabled:opacity-50"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};