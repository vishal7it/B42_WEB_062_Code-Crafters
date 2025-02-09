export const handleSocketConnection = (socket) => {
  console.log('New client connected:', socket.id);

  // Join classroom
  socket.on('join-classroom', (classroomId) => {
    socket.join(classroomId);
    socket.to(classroomId).emit('user-joined', socket.id);
  });

  // Handle chat messages
  socket.on('send-message', (message, classroomId) => {
    socket.to(classroomId).emit('receive-message', message);
  });

  // Handle whiteboard updates
  socket.on('whiteboard-update', (data, classroomId) => {
    socket.to(classroomId).emit('whiteboard-update', data);
  });

  // Handle hand raises
  socket.on('hand-raise', (userId, classroomId) => {
    socket.to(classroomId).emit('hand-raised', userId);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
};