//Инициализация стате в сторе и все функции которые с этим связанные

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: '',
    lastName: ''
}

//Передается и экспортируется 
// 1) Имя 2) Начальное состояние 3) reducers который будет управлять нашим состоянием
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        //Только изменение нашего состония
        setFirstName: (state, action) => {
            state.firstName = action.payload
        },
        setLastName: (state, action) => {
            state.lastName = action.payload
        },
    }
})

//Для доступа по всему проекту, необходимо экспортировать актион и редюсер
export const { setFirstName, setLastName } = userSlice.actions;
export default userSlice.reducer
