import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../api/index';

export const postTask = createAsyncThunk('questions/postTask', async (data) => {
    const response = await api.postTask(data);
    return response.data;
})

export const fetchAllTask = createAsyncThunk('questions/fetchAllTask', async () => {
    const response = await api.getAllTask();
    return response.data;
})

export const updateTask = createAsyncThunk('questions/updateTask', async (data) => {
    const response = await api.updateTask(data);
    return response.data;
})

export const deleteTask = createAsyncThunk('questions/deleteTask', async (id) => {
    const response = await api.deleteTask(id);
    return response.message;
})

export const deleteAll = createAsyncThunk('questions/deleteAll', async () => {
    const response = await api.deleteAll();
    return response.message;
})

const initialState = {
    data: null,
    loading: false,
    error: null
}

const taskSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            //fetch all tasks...
            .addCase(fetchAllTask.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllTask.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchAllTask.rejected, (state) => {
                state.loading = false;
                state.error = true;
                state.data = null;
            })

            //post task...
            .addCase(postTask.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(postTask.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(postTask.rejected, (state) => {
                state.loading = false;
                state.error = true;
                state.data = null;
            })

            //update task...
            .addCase(updateTask.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateTask.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(updateTask.rejected, (state) => {
                state.loading = false;
                state.error = true;
                state.data = null;
            })

            //delete task...
            .addCase(deleteTask.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(deleteTask.rejected, (state) => {
                state.loading = false;
                state.error = true;
                state.data = null;
            })

            //delete all task...
            .addCase(deleteAll.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteAll.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(deleteAll.rejected, (state) => {
                state.loading = false;
                state.error = true;
                state.data = null;
            })

    }
})


export default taskSlice.reducer;