import { configureStore } from '@reduxjs/toolkit';
import headerReducer from '@src/redux/slice/HeaderSlice';

export const store = configureStore({
    reducer: {
        header: headerReducer,
    },
});

// Type hỗ trợ
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
