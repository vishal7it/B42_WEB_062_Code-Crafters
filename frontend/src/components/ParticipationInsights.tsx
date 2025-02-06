import React from 'react';
import { BarChart as BarChartIcon, MessageSquare, Hand, Clock } from 'lucide-react';

const MOCK_INSIGHTS = [
  { id: 1, name: 'Student 1', participation: 85, messages: 12, handRaises: 3, timeSpoken: '5:30' },
  { id: 2, name: 'Student 2', participation: 60, messages: 8, handRaises: 1, timeSpoken: '3:45' },
  { id: 3, name: 'Student 3', participation: 75, messages: 10, handRaises: 2, timeSpoken: '4:15' },
];

export function ParticipationInsights() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Class Participation Insights</h2>
      
      <div className="grid gap-6">
        {MOCK_INSIGHTS.map((student) => (
          <div key={student.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{student.name}</h3>
              <div className="flex items-center space-x-2">
                <div className={`h-3 w-24 rounded-full overflow-hidden bg-gray-200`}>
                  <div 
                    className={`h-full ${
                      student.participation >= 75 ? 'bg-green-500' :
                      student.participation >= 50 ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`}
                    style={{ width: `${student.participation}%` }}
                  />
                </div>
                <span className="text-sm font-medium">{student.participation}%</span>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <MessageSquare size={20} className="text-blue-500" />
                <div>
                  <div className="text-sm text-gray-500">Messages</div>
                  <div className="font-medium">{student.messages}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Hand size={20} className="text-yellow-500" />
                <div>
                  <div className="text-sm text-gray-500">Hand Raises</div>
                  <div className="font-medium">{student.handRaises}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Clock size={20} className="text-green-500" />
                <div>
                  <div className="text-sm text-gray-500">Time Spoken</div>
                  <div className="font-medium">{student.timeSpoken}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}