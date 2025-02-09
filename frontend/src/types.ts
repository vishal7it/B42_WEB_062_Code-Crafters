export interface User {
  id: string;
  name: string;
  isTeacher: boolean;
  isMuted: boolean;
  isVideoEnabled: boolean;
  isHandRaised: boolean;
  participationScore: number;
}

export interface Message {
  id: string;
  userId: string;
  userName: string;
  content: string;
  timestamp: number;
  type: 'text' | 'file' | 'system';
  fileUrl?: string;
  fileName?: string;
}