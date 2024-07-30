import React from 'react'
import { useState,useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Navbar from './Navbar';



const Home = () => {
  const [todo, settodo] = useState(" ")

  const [todoarray, settodoarray] = useState([])

  const [showfinished, setshowfinished] = useState(false)


  const saveToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todoarray))
  }

  useEffect(() => {
      let todoString = localStorage.getItem("todos")
      if(todoString){
        let todos = JSON.parse(localStorage.getItem("todos")) 
        settodoarray(todos)
    }
  }, [])

  
  const handleSave = () => {
    
    settodoarray([...todoarray, { id: uuidv4(), todo, iscompleted: false }])
    let newtodoarray = [...todoarray, { id: uuidv4(), todo, iscompleted: false }]
    //saveToLocal()
    settodo("")
    localStorage.setItem("todos", JSON.stringify(newtodoarray))
    
  }

  const handleChange = (e) => {
    settodo(e.target.value)
  }

  const handleCheck = (e) => {
    let Id = e.target.id
    let ind = todoarray.findIndex(item => {
      return item.id == Id
    })
    let newtodoarray = [...todoarray]
    newtodoarray[ind].iscompleted = !newtodoarray[ind].iscompleted
    settodoarray(newtodoarray)
    saveToLocal()
  }

  const handleDelete = (e,id) => {
    let newtodoarray = todoarray.filter(item=>{
      return item.id!==id
    }); 
    settodoarray(newtodoarray) 
    saveToLocal()
  }

  const handleEdit = (e,id) => {
    let t = todoarray.filter(i => i.id === id) 
    settodo(t[0].todo)
    let newtodoarray = todoarray.filter(item=>{
      return item.id!==id
    }); 
    settodoarray(newtodoarray)
    saveToLocal()
  }

  const toggleShow = (e) => {
    setshowfinished(!showfinished)
  }

  return (
    <>
      <Navbar />
      <div className=" container min-h-screen md:max-w-[70vw]  max-w-[95vw] bg-[#141414] mx-auto my-8 p-2 md:p-6 rounded-lg text-yellow-400">
        <div className=''><h1 className='md:text-[22px] text-center text-[19px] font-bold md:w-1/2 md:mx-auto my-2 '>TODO - Mange your tasks with ease</h1></div>
        <div className='font-semibold md:text-[19px] text-[18px] my-5'><span>Add a task</span></div>
        <div className='flex gap-3 my-4'>
          <input type='text' onChange={handleChange} value={todo} className=' bg-black text-white rounded-2xl md:px-6 px-1.5 py-1 outline-none border-none w-[60vw]'></input>
          <button onClick={handleSave} disabled={todo.length <= 3} className=' outline-none border-none  disabled:bg-purple-500 bg-purple-900 py-1 px-3 rounded-2xl text-white font-bold'>Save</button>
        </div>
        <div>
          <div className='flex items-center gap-5'>  <input name='show' checked={showfinished} onChange={toggleShow} type='checkbox' ></input> < span className='  text-gray-500'>Show Finished</span> </div>
          <div className='font-semibold text-[20px] mt-7 py-1.5'><span>Your tasks</span></div>
          {
            todoarray.map(item => {
              return (showfinished || item.iscompleted == false) && <> <div key={item.id} className='flex justify-between items-center'>
                <div className='flex items-center gap-8'>
                  <input checked={item.iscompleted} onChange={handleCheck} id={item.id} type='checkbox' className='bg-black'></input>
                  <div className={` ${item.iscompleted ? "line-through" : "no-underline"} line-through decoration-white text  md:max-w-2xl  text-[16px] my-3.5`}> <p className=' md:max-w-2xl max-w-[56vw]  break-normal '>{item.todo}</p>  </div>
                </div>
                <div className='flex'>
                  <div onClick={(e)=>handleEdit(e, item.id)}  className='outline-none border-none bg-purple-900 py-1.5 px-2.5 rounded-xl text-white font-bold mx-1 cursor-pointer'> <img className=' w-4 h-4' src='./edit.svg' /> </div>
                  <div onClick={(e)=>{handleDelete(e, item.id)}} className='outline-none border-none bg-purple-900 py-1.5 px-2.5 rounded-xl text-white font-bold mx-1 cursor-pointer'> <img className=' w-4 h-4 ' src='./delete.svg' /> </div>
                </div>
              </div>
              <div className=' h-[1px] bg-gray-800'></div>
              </> 
            })
          }
        </div>

      </div>
    </>
  )
}

export default Home