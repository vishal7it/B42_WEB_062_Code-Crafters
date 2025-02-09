import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import { Pencil, Eraser, Square, Circle, Type, Undo, Redo, Trash } from 'lucide-react';

export const Whiteboard: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      fabricRef.current = new fabric.Canvas(canvasRef.current, {
        isDrawingMode: true,
        width: window.innerWidth * 0.8,
        height: window.innerHeight * 0.6,
      });
    }

    return () => {
      fabricRef.current?.dispose();
    };
  }, []);

  const tools = [
    { icon: Pencil, name: 'Draw' },
    { icon: Eraser, name: 'Erase' },
    { icon: Square, name: 'Rectangle' },
    { icon: Circle, name: 'Circle' },
    { icon: Type, name: 'Text' },
  ];

  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4">
      <div className="flex gap-4 mb-4">
        {tools.map(({ icon: Icon, name }) => (
          <button
            key={name}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title={name}
          >
            <Icon className="w-6 h-6" />
          </button>
        ))}
        <div className="h-8 w-px bg-gray-200 mx-2" />
        <button className="p-2 hover:bg-gray-100 rounded-lg" title="Undo">
          <Undo className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg" title="Redo">
          <Redo className="w-6 h-6" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg text-red-500" title="Clear">
          <Trash className="w-6 h-6" />
        </button>
      </div>
      <canvas ref={canvasRef} className="border border-gray-200 rounded-lg" />
    </div>
  );
};