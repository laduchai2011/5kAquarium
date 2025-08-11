import { configureStore } from '@reduxjs/toolkit';
import { accountRTK } from './query/accountRTK';

export const store = configureStore({
    reducer: {
        [accountRTK.reducerPath]: accountRTK.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(accountRTK.middleware),
});

// Type hỗ trợ
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
