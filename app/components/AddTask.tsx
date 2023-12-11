'use client'
import { FaPlus } from "react-icons/fa";
import Model from "./Model";
import { FormEventHandler, useState } from "react";
import { addTodo } from "@/api";
import { nanoid } from "nanoid";


const AddTask = () => {
const [modalOpen,setModelOpen]=useState<boolean>(false)
const [taskValue,setTaskValue]=useState<string>("");

const handleSubmit:FormEventHandler<HTMLFormElement> =async (e) => {
 e.preventDefault();
 await addTodo({
  id:nanoid(),
  text: taskValue,
 })
 setTaskValue("");
 
}
  return (
    <div>
    <button onClick={()=>setModelOpen(true)} className='btn btn-primary btn-outline w-full' >add Task<FaPlus /> </button>
    <Model modalOpen={modalOpen} setModelOpen={setModelOpen}>

      <form onSubmit={handleSubmit}>
         <h1 className="font-bold text-2xl mb-4">Add new task </h1>
         <div className="flex">
           <input value={taskValue} onChange={e =>setTaskValue(e.target.value)} type="text" placeholder="add task ..." className="input input-bordered input-primary w-full max-w-xs mr-8" />
           <button type="submit" className="btn btn-primary">Add<FaPlus /></button>
         </div>
      </form>
     
   
    </Model>
    </div>
  )
}

export default AddTask