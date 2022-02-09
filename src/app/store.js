/*
* @Author: Helitha Rupasinghe;
* @Version: Version 1.0 - 09/02/2022
* License : MIT
*/
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import appReducer from '../features/appSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        app: appReducer,
    },
});
