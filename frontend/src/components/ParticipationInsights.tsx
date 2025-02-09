import React from 'react';
import { useStore } from '../store/useStore';
import { BarChart, Activity } from 'lucide-react';

export const ParticipationInsights: React.FC = () => {
  const { users } = useStore();

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex items-center gap-2 mb-4">
        <Activity className="w-5 h-5 text-blue-500" />
        <h3 className="text-lg font-semibold">Participation Insights</h3>
      </div>
      <div className="space-y-4">
        {users.map((user) => (
          <div key={user.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-medium">{user.name}</span>
              <span className="text-sm text-gray-500">
                {user.participationScore}% active
              </span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all duration-500"
                style={{ width: `${user.participationScore}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};