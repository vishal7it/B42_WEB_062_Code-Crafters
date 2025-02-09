import React, { useEffect } from 'react';
import { VideoGrid } from './components/VideoGrid';
import { Whiteboard } from './components/Whiteboard';
import { Chat } from './components/Chat';
import { ParticipationInsights } from './components/ParticipationInsights';
import { useStore } from './store/useStore';

function App() {
  const { setCurrentUser, addUser } = useStore();

  useEffect(() => {
    // Clear any existing users first
    useStore.setState({ users: [] });

    // Simulated login - in a real app, this would be handled by proper authentication
    const user = {
      id: 'teacher-1',
      name: 'Teacher',
      isTeacher: true,
      isMuted: false,
      isVideoEnabled: true,
      isHandRaised: false,
      participationScore: 100,
    };
    setCurrentUser(user);
    addUser(user);

    // Add some mock students
    const students = [
      {
        id: 'student-1',
        name: 'Alice Smith',
        isTeacher: false,
        isMuted: false,
        isVideoEnabled: true,
        isHandRaised: false,
        participationScore: 85,
      },
      {
        id: 'student-2',
        name: 'Bob Johnson',
        isTeacher: false,
        isMuted: true,
        isVideoEnabled: true,
        isHandRaised: true,
        participationScore: 65,
      },
    ];
    students.forEach(addUser);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 space-y-4">
            <VideoGrid />
            <Whiteboard />
          </div>
          <div className="space-y-4">
            <ParticipationInsights />
            <div className="h-[600px]">
              <Chat />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;