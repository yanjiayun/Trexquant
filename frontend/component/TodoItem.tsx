import React from 'react';

interface TodoItemProps {
  todo: {
    _id: string;
    name: string;
    completed: boolean;
  };
  toggleCompletion: () => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleCompletion }) => {
  return (
    <li className="flex items-center p-2">
      <input type="checkbox" checked={todo.completed} onChange={toggleCompletion} className='mr-4' />
      <span className={todo.completed ? 'line-through' : ''}>{todo.name}</span>
    </li>
  );
};