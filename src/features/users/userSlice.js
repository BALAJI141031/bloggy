import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Einstien' },
    { id: '1', name: 'young hub' },
    { id: '2', name: 'brow clarke' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer