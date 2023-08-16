import { configureStore } from "@reduxjs/toolkit";
import { UsersReducer } from "./slices/UsersSlice";

const store = configureStore({
    reducer: {
        users: UsersReducer
    }
})

export { store };
export * from './thunks/fetchUsers';
export * from './thunks/addUser';