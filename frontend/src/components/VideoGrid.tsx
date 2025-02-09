import React, { useEffect, useRef } from 'react';
import { Mic, MicOff, Video, VideoOff, Hand } from 'lucide-react';
import { useStore } from '../store/useStore';

export const VideoGrid: React.FC = () => {
  const { users, currentUser } = useStore();
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  // In a real app, we would initialize PeerJS and handle video streams here
  
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {users.map((user) => (
        <div key={user.id} className="relative rounded-lg overflow-hidden bg-gray-800">
          <video
            ref={el => videoRefs.current[user.id] = el}
            className="w-full aspect-video object-cover"
            autoPlay
            muted={user.id === currentUser?.id}
          />
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent">
            <div className="flex items-center justify-between">
              <span className="text-white font-medium">{user.name}</span>
              <div className="flex gap-2">
                {user.isMuted ? <MicOff className="w-5 h-5 text-red-500" /> : <Mic className="w-5 h-5 text-green-500" />}
                {user.isVideoEnabled ? <Video className="w-5 h-5 text-green-500" /> : <VideoOff className="w-5 h-5 text-red-500" />}
                {user.isHandRaised && <Hand className="w-5 h-5 text-yellow-500" />}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};