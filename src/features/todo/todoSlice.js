//Инициализация стате в сторе и все функции которые с этим связанные

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodos: (state, action) => {
            //Добавление в массив вводимой информации
            state.todos.push(action.payload)
        },
        toggleCompletedTodo: (state, action) => {
            //Изменение активнойго тодо
            const toggleTodo = state.todos.find((todo) => todo.id === action.payload);
            toggleTodo.completed = !toggleTodo.completed;
        },
        removeTodo: (state, action) => {
            //Удалить по клику
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        }
    }
})

export const { addTodos, toggleCompletedTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;