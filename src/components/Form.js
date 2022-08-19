import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodos } from '../features/todo/todoSlice';
import uuid from 'react-uuid';

const Form = () => {

    const dispatch = useDispatch();
    const [todoValue, setTodoValue] = useState('')

    //Записываем первоночальное состояние 
    const addTodoHandler = () => {
        const todo = {
            id: uuid(),
            text: todoValue,
            completed: false,
        }

        dispatch(addTodos(todo));
        setTodoValue('');
    }

    return (
        <form className='w-full flex' onSubmit={(e) => e.preventDefault()}>
            <input
                type='text'
                placeholder='Type something...'
                value={ todoValue }
                onChange={(e) => setTodoValue(e.target.value)}
                className='w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm'
            />
            <button
                type='submit'
                className='shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm'
                onClick={() => addTodoHandler()}
            >
                Submit
            </button>
        </form>
    )
}

export default Form
