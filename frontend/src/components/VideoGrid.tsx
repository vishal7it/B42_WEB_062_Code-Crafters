import React from 'react';

const MOCK_PARTICIPANTS = [
  { id: 1, name: 'Teacher', isTeacher: true, isSpeaking: true },
  { id: 2, name: 'Student 1', isTeacher: false, isSpeaking: false },
  { id: 3, name: 'Student 2', isTeacher: false, isSpeaking: false },
  { id: 4, name: 'Student 3', isTeacher: false, isSpeaking: true },
];

export function VideoGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 h-full">
      {MOCK_PARTICIPANTS.map((participant) => (
        <div
          key={participant.id}
          className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden"
        >
          <img
            src={`https://source.unsplash.com/random/400x300?face&sig=${participant.id}`}
            alt={participant.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
            <div className="flex items-center justify-between">
              <span className="text-white font-medium">{participant.name}</span>
              {participant.isSpeaking && (
                <span className="flex items-center space-x-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}