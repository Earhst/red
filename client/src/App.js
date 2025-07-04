import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const columns = [
  'TO_DO',
  'PLANNING',
  'IN_PROGRESS',
  'AT_RISK',
  'UPDATE_REQUIRED',
  'ON_HOLD'
];

export default function App() {
  const [tasks, setTasks] = useState({});
  const [input, setInput] = useState('');
  const [targetColumn, setTargetColumn] = useState('TO_DO');

  useEffect(() => {
    fetch('http://localhost:3000/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error(err));
  }, []);

  const handleAddTask = () => {
    if (!input) return;

    fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: input, status: targetColumn })
    })
      .then(res => res.json())
      .then(newTask => {
        setTasks(prev => ({
          ...prev,
          [newTask.status]: [...(prev[newTask.status] || []), newTask]
        }));
        setInput('');
      });
  };

  const handleDeleteTask = (id, column) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE'
    }).then(() => {
      setTasks(prev => ({
        ...prev,
        [column]: prev[column].filter(t => t._id !== id)
      }));
    });
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = source.droppableId;
    const destCol = destination.droppableId;
    const sourceTasks = Array.from(tasks[sourceCol]);
    const [movedTask] = sourceTasks.splice(source.index, 1);

    const destTasks = Array.from(tasks[destCol] || []);
    destTasks.splice(destination.index, 0, movedTask);

    setTasks(prev => ({
      ...prev,
      [sourceCol]: sourceTasks,
      [destCol]: destTasks
    }));

  
  };

  return (
    <div>
      <h2>Task Manager</h2>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task"
        />
        <select value={targetColumn} onChange={(e) => setTargetColumn(e.target.value)}>
          {columns.map(col => <option key={col} value={col}>{col}</option>)}
        </select>
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div style={{ display: 'flex', gap: '10px' }}>
          {columns.map(col => (
            <Droppable key={col} droppableId={col}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{ padding: '10px', border: '1px solid black', width: '200px' }}
                >
                  <h4>{col}</h4>
                  {(tasks[col] || []).map((task, index) => (
                    <Draggable key={task._id} draggableId={task._id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{ border: '1px solid gray', marginBottom: '8px', padding: '4px', ...provided.draggableProps.style }}
                        >
                          <span>{task.text}</span>
                          <button onClick={() => handleDeleteTask(task._id, col)}>❌</button>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
