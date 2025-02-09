# B42_WEB_062_Code-Crafters
# Virtual Classroom

Deploy link:- https://learningsphere.netlify.app/

Group presentation drive video link:-https://drive.google.com/file/d/1-WA3v3AdRozDgTHDm0MJ1tR1PzBbZxFq/view?usp=drive_link

Group Questionary Presentation drive video link :- https://drive.google.com/file/d/1sMFrnJQ7D3C8zV5CStV3N1RY26nV4oIN/view?usp=drive_link

Group presentation youtube video link :- https://youtu.be/cPL8P7x7jt8

Group Questionary Presentation youtube video link :- https://youtu.be/kVwO6bTNFBs

## Overview
With the rise of remote learning, virtual classrooms have become essential tools in modern education. This project aims to replicate the traditional classroom experience by enabling real-time collaboration between students and teachers. Key features like video conferencing, interactive whiteboards, and document sharing create an immersive and interactive learning environment, making remote education both effective and engaging.

## Project Goal
The goal of this project is to develop a web-based virtual classroom that supports seamless video conferencing, document sharing, and real-time collaboration through features like interactive whiteboards and chat. The aim is to provide an intuitive and engaging interface that mimics the physical classroom experience in a digital setting.

## Features

### 1. Video Conferencing Integration
**Objective:**  
Enable students and teachers to interact through real-time video calls, ensuring smooth communication during virtual classes.

**Frontend Focus:**
- **Sleek Video Interface**: A responsive video interface integrated with WebRTC or third-party APIs (like Zoom or Jitsi), providing intuitive controls for audio, video, and screen sharing.
- **Live Status Indicators**: Real-time indicators such as "speaking," "muted," and "raised hand" to keep participants informed.
- **Participant Grid**: A dynamic grid layout that adjusts based on the number of participants, ensuring visibility for all attendees.
- **Responsive Controls**: User-friendly buttons for video, microphone, and screen sharing, with hover animations and tooltips for better usability.

### 2. Interactive Whiteboard
**Objective:**  
Facilitate real-time collaboration where teachers and students can draw, write, and visually share ideas.

**Frontend Focus:**
- **Canvas-based Drawing Tools**: HTML5 Canvas APIs allow users to draw, write, and sketch in real-time with instant updates for all participants.
- **Multi-user Collaboration**: Features include color selection, line thickness controls, and various drawing tools (e.g., pen, highlighter).
- **Undo/Redo Options**: Users can easily correct mistakes with undo/redo functionality.
- **Eraser & Clear Screen**: Specific deletion options for users and the ability for teachers to clear the entire whiteboard when necessary.

### 3. Document Sharing and Chat
**Objective:**  
Enable real-time document sharing and text-based communication during class sessions to enhance interaction and resource exchange.

**Frontend Focus:**
- **Drag-and-Drop File Sharing**: A drag-and-drop interface for uploading documents, PDFs, and images during a session. Shared documents are displayed in the chat with live previews.
- **Real-time Chat Interface**: A smooth chat interface supporting text messages, links, and notifications, with typing indicators and timestamps.
- **User Notifications**: Real-time notifications for new document uploads and chat messages, ensuring participants stay updated.
- **Chat Filters**: Filters for chat messages by categories (e.g., “Questions,” “Files Shared”) to easily find relevant information.

### 4. AI-Powered Participation Insights
**Objective:**  
Provide teachers with AI-driven insights into student participation, tracking engagement levels during classes.

**Frontend Focus:**
- **Participation Metrics Dashboard**: Visualizes engagement metrics with color-coded indicators, showing which students are active or passive during sessions.

## Technologies Used
- **Frontend**: HTML5, CSS3, JavaScript, WebRTC (or Zoom/Jitsi API), Canvas API
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (for storing participation data, chat history, and shared files)
- **AI Integration**: Machine learning algorithms for tracking and analyzing student participation
- **Other Tools**: WebSockets for real-time communication, OAuth for secure login

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- WebRTC API / Zoom API / Jitsi API


