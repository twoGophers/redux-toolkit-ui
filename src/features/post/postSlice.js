
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    posts: [],
}

//Отображение постов
//createAsyncThunk необходим для асинхронных запросов
export const getPosts = createAsyncThunk(
    //Имя слайса которое дали ниже
    'posts/postSlice',
    async (_, { rejectWithValue, dispatch }) => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch(setPosts(res.data));
    }
);

//Удаление постов
export const deletePostById = createAsyncThunk(
    'posts/deletePostById',
    async (id, { rejectWithValue, dispatch }) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        dispatch(deletePost(id));
    }
)

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },

        deletePost: (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload)
        }
    },
    extraReducers: {
        [getPosts.fulfilled]: () => console.log('fulfilled'), //ответ от сервера
        [getPosts.pending]: () => console.log('pending'),//ответ отправлен
        [getPosts.rejected]: () => console.log('rejected'),//ошибка
        [deletePostById.fulfilled]: () => console.log('fulfilled'), //ответ от сервера
        [deletePostById.pending]: () => console.log('pending'),//ответ отправлен
        [deletePostById.rejected]: () => console.log('rejected'),//ошибка

    }
})

export const { setPosts, deletePost } = postSlice.actions;
export default postSlice.reducer;