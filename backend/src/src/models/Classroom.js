import mongoose from 'mongoose';

const classroomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  messages: [{
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    content: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ['text', 'file'],
      default: 'text'
    },
    fileUrl: String,
    timestamp: {
      type: Date,
      default: Date.now
    }
  }],
  whiteboardData: {
    type: String,
    default: ''
  },
  participationMetrics: [{
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    messageCount: {
      type: Number,
      default: 0
    },
    handRaises: {
      type: Number,
      default: 0
    },
    timeSpoken: {
      type: Number,
      default: 0
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Classroom', classroomSchema);