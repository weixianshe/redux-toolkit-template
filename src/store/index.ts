import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './reducers/counter'
export const store = configureStore({
    reducer:{
        counter:counterReducer
    }
})

// 获取RootState类型
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch