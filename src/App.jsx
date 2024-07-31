import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { add } from './redux/todo-list'
import { Form } from './components/form'

function App() {
  const {todoItem} = useSelector((state) =>state.todoList)
  const dispatch = useDispatch()
  const value = React.useRef(null)

  const submit = (e) =>{
    e.preventDefault();
    dispatch(add({id:Date.now(), name: value.current.value}))
    value.current.value = ""
   
  }
 
  return (
    <div className='flex items-center justify-center h-auto flex-col w-[100%] py-5 bg-[url("https://celes.club/uploads/posts/2023-12/1703019524_celes-club-p-oboi-na-telefon-mersedes-banan-vkontakte-12.jpg")]  bg-no-repeat '>
    <form className='w-[400px] h-[220px] rounded-xl flex items-center justify-center flex-col bg-white shadow-lg shadow-gray-300 border-2 border-gray-200' onSubmit={submit}>
      <h1 className='py-3 text-xl font-bold'>Todo</h1>
      
      <input className='w-[250px] h-[50px] px-3 outline-2 outline-gray-400 shadow-lg shadow-gray-300 border-2 border-gray-200 rounded-xl text-black  ' ref={value} type="text" placeholder='malumot kiritung' required />
      <div className='relative w-[150px] h-[50px] animate-bounce  mt-5 '>
      <button className='w-[150px] h-[50px]  text-white  font-bold rounded-xl shadow-lg shadow-green-300 hover:bg-green-300 bg-green-500 mt-5' type='submit'>Send</button>
      <span class="absolute flex h-4 w-4 right-0 top-[15px] ">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-4 w-4 bg-green-400"></span>
</span>
      </div>
    </form>
    {todoItem.map((item) => <Form key={item.id} {...item}/>)}
    </div>
  )
}

export default App
