import React, { useRef, useState, useEffect } from 'react';
import { Pencil, Eraser, Trash2, Undo, Redo } from 'lucide-react';

export function Whiteboard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [tool, setTool] = useState<'pen' | 'eraser'>('pen');
  const [color, setColor] = useState('#000000');
  const [lineWidth, setLineWidth] = useState(2);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Set initial styles
    context.strokeStyle = color;
    context.lineWidth = lineWidth;
    context.lineCap = 'round';
  }, []);

  const startDrawing = (e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    setIsDrawing(true);
    context.beginPath();
    context.moveTo(
      e.clientX - canvas.offsetLeft,
      e.clientY - canvas.offsetTop
    );
  };

  const draw = (e: React.MouseEvent) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    context.lineTo(
      e.clientX - canvas.offsetLeft,
      e.clientY - canvas.offsetTop
    );
    context.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="border-b p-4 flex items-center space-x-4">
        <button
          onClick={() => setTool('pen')}
          className={`p-2 rounded ${tool === 'pen' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        >
          <Pencil size={20} />
        </button>
        <button
          onClick={() => setTool('eraser')}
          className={`p-2 rounded ${tool === 'eraser' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
        >
          <Eraser size={20} />
        </button>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-8 h-8 rounded cursor-pointer"
        />
        <input
          type="range"
          min="1"
          max="10"
          value={lineWidth}
          onChange={(e) => setLineWidth(parseInt(e.target.value))}
          className="w-32"
        />
        <button
          onClick={clearCanvas}
          className="p-2 rounded hover:bg-gray-100"
        >
          <Trash2 size={20} />
        </button>
        <button className="p-2 rounded hover:bg-gray-100">
          <Undo size={20} />
        </button>
        <button className="p-2 rounded hover:bg-gray-100">
          <Redo size={20} />
        </button>
      </div>
      <div className="flex-1 relative">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full bg-white"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        />
      </div>
    </div>
  );
}