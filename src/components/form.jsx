import React from 'react'
import {  useDispatch } from 'react-redux'
import { editItem } from '../redux/todo-list'
import { deleteItem } from '../redux/todo-list'

export const Form = ({name, id}) => {
    const dispatch = useDispatch()

    const editButton = () =>{
        const newName = prompt("Malumot kiriting")
        dispatch(editItem({id, name: newName}))
    }


    const deleteButton = (id)=>{
        dispatch(deleteItem(id))

    }
  return (
    <div className='w-[500px] h-[280px] bg-white flex-col flex items-center justify-center mt-20 rounded-xl shadow-lg shadow-gray-200'>
       
       <h1 className='font-bold text-2xl'>{name}</h1>
       <h1 className='font-bold text-2xl'>{name}</h1>

        <p className='py-2 font-medium'>id number: {id}</p>
        <button className='w-[150px] h-[50px] text-white font-bold rounded-xl hover:bg-red-300 bg-red-600 mt-5 hover:scale-110 ' onClick={() => deleteButton(id)}>delete</button>
        <button className='w-[150px] h-[50px] text-white font-bold rounded-xl hover:bg-green-300 bg-green-500 mt-5  hover:scale-110 ' onClick={editButton} >edit</button>
    </div>
  )
}
