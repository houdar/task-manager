import { fetchTodo } from '@/api';
import AddTask from './components/AddTask'
import TodoList from './components/TodoList'


export default async function Home() {
  const tasks= await fetchTodo();
   console.log(tasks);
   
  return (
 <main className='max-w-4xl mt-4 mx-auto'>
  <div className='text-center mu-5 flex flex-col gap-4'>
    <h1 className='text-2xl font-bold'>Todo List App</h1>
    <AddTask/> 
  </div>
  <TodoList tasks ={tasks}/>
 </main>
  )
}
