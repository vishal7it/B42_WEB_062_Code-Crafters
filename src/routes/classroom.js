import express from 'express';
import Classroom from '../models/Classroom.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Create classroom
router.post('/', authenticateToken, async (req, res) => {
  try {
    if (req.user.role !== 'teacher') {
      return res.status(403).json({ message: 'Only teachers can create classrooms' });
    }

    const classroom = new Classroom({
      name: req.body.name,
      teacher: req.user.userId
    });

    await classroom.save();
    res.status(201).json(classroom);
  } catch (error) {
    res.status(500).json({ message: 'Error creating classroom' });
  }
});

// Get all classrooms (for a teacher)
router.get('/teacher', authenticateToken, async (req, res) => {
  try {
    if (req.user.role !== 'teacher') {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    const classrooms = await Classroom.find({ teacher: req.user.userId })
      .populate('teacher', 'username')
      .populate('students', 'username');
    
    res.json(classrooms);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching classrooms' });
  }
});

// Get all classrooms (for a student)
router.get('/student', authenticateToken, async (req, res) => {
  try {
    const classrooms = await Classroom.find({ students: req.user.userId })
      .populate('teacher', 'username')
      .populate('students', 'username');
    
    res.json(classrooms);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching classrooms' });
  }
});

// Join classroom
router.post('/:id/join', authenticateToken, async (req, res) => {
  try {
    const classroom = await Classroom.findById(req.params.id);
    if (!classroom) {
      return res.status(404).json({ message: 'Classroom not found' });
    }

    if (classroom.students.includes(req.user.userId)) {
      return res.status(400).json({ message: 'Already joined this classroom' });
    }

    classroom.students.push(req.user.userId);
    await classroom.save();

    res.json(classroom);
  } catch (error) {
    res.status(500).json({ message: 'Error joining classroom' });
  }
});

// Update participation metrics
router.put('/:id/metrics', authenticateToken, async (req, res) => {
  try {
    const { studentId, metrics } = req.body;
    
    const classroom = await Classroom.findById(req.params.id);
    if (!classroom) {
      return res.status(404).json({ message: 'Classroom not found' });
    }

    const studentMetrics = classroom.participationMetrics.find(
      m => m.student.toString() === studentId
    );

    if (studentMetrics) {
      Object.assign(studentMetrics, metrics);
    } else {
      classroom.participationMetrics.push({ student: studentId, ...metrics });
    }

    await classroom.save();
    res.json(classroom);
  } catch (error) {
    res.status(500).json({ message: 'Error updating metrics' });
  }
});

export default router;