import React, { useState } from 'react';
import { Mic, MicOff, Video, VideoOff, Share, Hand } from 'lucide-react';

export function VideoControls() {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isHandRaised, setIsHandRaised] = useState(false);

  return (
    <div className="flex flex-col space-y-2">
      <button
        onClick={() => setIsMuted(!isMuted)}
        className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
          isMuted ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'
        }`}
      >
        {isMuted ? <MicOff size={20} /> : <Mic size={20} />}
        <span>{isMuted ? 'Unmute' : 'Mute'}</span>
      </button>
      
      <button
        onClick={() => setIsVideoOff(!isVideoOff)}
        className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
          isVideoOff ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'
        }`}
      >
        {isVideoOff ? <VideoOff size={20} /> : <Video size={20} />}
        <span>{isVideoOff ? 'Start Video' : 'Stop Video'}</span>
      </button>

      <button
        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <Share size={20} />
        <span>Share Screen</span>
      </button>

      <button
        onClick={() => setIsHandRaised(!isHandRaised)}
        className={`flex items-center space-x-2 p-2 rounded-lg transition-colors ${
          isHandRaised ? 'bg-yellow-100 text-yellow-600' : 'hover:bg-gray-100'
        }`}
      >
        <Hand size={20} />
        <span>{isHandRaised ? 'Lower Hand' : 'Raise Hand'}</span>
      </button>
    </div>
  );
}