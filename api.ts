import { ITask } from "./types/tasks";

const url = 'http://localhost:3001';

export const fetchTodo = async (): Promise<ITask[]> => {
  const res = await fetch(`${url}/tasks`, { cache: 'no-store' });
  const todos = await res.json();
  return todos;
}

export const addTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${url}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
  const newTodo = await res.json();
  return newTodo;
}