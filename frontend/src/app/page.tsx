"use client"
import { useState, useEffect } from 'react';
import { TodoList } from '../../component/TodoList';
import axios from 'axios';

interface Todo {
  _id: string;
  name: string;
  completed: boolean;
}

interface List {
  _id: string;
  name: string;
  todos: Todo[];
}

const Home: React.FC = () => {
  const [lists, setLists] = useState<List[]>([]);
  const [newListName, setNewListName] = useState('');

  useEffect(() => {
    fetchLists();
  }, []);

  const fetchLists = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/todos');
      setLists(response.data);
      console.log('Fetched lists:', response.data);
    } catch (error) {
      console.error('Error fetching lists:', error);
    }
  };

  const addTask = async (listId: string, taskName: string) => {
    try {
      const response = await axios.post(`http://localhost:8000/api/todos/${listId}/tasks`, { taskName });
      setLists(lists.map(list => list._id === listId ? response.data : list));
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const toggleTaskCompletion = async (listId: string, taskId: string) => {
    try {
      const response = await axios.patch(`http://localhost:8000/api/todos/${listId}/tasks/${taskId}`);
      setLists(lists.map(list => list._id === listId ? response.data : list));
    } catch (error) {
      console.error('Error toggling task completion:', error);
    }
  };

  const deleteList = async (listId: string) => {
    try {
      await axios.delete(`http://localhost:8000/api/todos/${listId}`);
      setLists(lists.filter(list => list._id !== listId));
    } catch (error) {
      console.error('Error deleting list:', error);
    }
  };

  const addNewList = async () => {
    if (newListName.trim()) {
      try {
        const response = await axios.post('http://localhost:8000/api/todos', { name: newListName });
        setLists([...lists, response.data]);
        setNewListName('');
        console.log('Added new list:', response.data);
      } catch (error) {
        console.error('Error adding new list:', error);
      }
    } else {
      console.log('List name cannot be empty');
    }
  };

  return (
    <div className="mx-auto mb-52 mt-2">
      <h1 className="text-3xl font-bold text-trxqblue-500 block lg:hidden text-center">Mei&apos;s To-dos</h1>
      <div className="my-4 grid grid-cols-3 gap-x-8 h-fit w-full lg:w-2/3 lg:mx-auto">
        <input
          type="text"
          value={newListName}
          onChange={e => setNewListName(e.target.value)}
          placeholder="Add a new list"
          className="p-2 border rounded w-full bg-white text-stone-500 col-span-2"
        />
        <button onClick={addNewList} className="p-2 bg-trxqblue-500 text-white font-semibold rounded w-full col-span-1">
          Add A New List
        </button>
      </div>
      <div className="mt-12 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {lists.map(list => (
          <TodoList
            key={list._id}
            id={list._id}
            name={list.name}
            todos={list.todos}
            addTask={addTask}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteList={deleteList}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;