"use client"
import React, { useState } from 'react';
import { TodoItem } from './TodoItem';
import { AddIcon } from '../src/app/icons/AddIcon';
import { TrashIcon } from '../src/app/icons/TrashIcon';

interface Todo {
  _id: string;
  name: string;
  completed: boolean;
}

interface TodoListProps {
  id: string;
  name: string;
  todos: Todo[];
  addTask: (id: string, taskName: string) => void;
  toggleTaskCompletion: (listId: string, taskId: string) => void;
  deleteList: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ id, name, todos, addTask, toggleTaskCompletion, deleteList }) => {
  const [taskName, setTaskName] = useState('');

  const remainingTasks = todos.filter(todo => !todo.completed).length;

  const handleAddTask = () => {
    if (taskName.trim()) {
      addTask(id, taskName);
      setTaskName('');
    } else {
      console.log('Task name cannot be empty');
    }
  };

  return (
    <div className="py-4 px-10% bg-stone-200 rounded-2xl">
      <section className="items-center grid grid-cols-6 sm:grid-cols-1">
        <h2 className="text-2xl sm:text-3xl font-bold col-span-2 sm:col-span-1 sm:mx-auto">{name}</h2>
        <div className="mt-2 flex items-center col-span-4 sm:col-span-1">
          <input
            type="text"
            value={taskName}
            onChange={e => setTaskName(e.target.value)}
            placeholder="Add a new task"
            className="p-2 border rounded-lg w-full"
          />
          <button onClick={handleAddTask} className='ml-2'><AddIcon /></button>
        </div>
      </section>
      
      <ul className='rounded-2xl bg-white mt-4'>
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} toggleCompletion={() => toggleTaskCompletion(id, todo._id)} />
        ))}
      </ul>

      <p className='mt-4 block sm:hidden'>{remainingTasks} remaining</p>
      <p className='mt-4 hidden sm:block'>There are {remainingTasks} tasks remaining...</p>
      <button onClick={() => deleteList(id)} className="grid ms-auto"><TrashIcon /></button>
    </div>
  );
};