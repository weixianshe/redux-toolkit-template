import { useDispatch, useSelector } from 'react-redux'


import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch  } from './index' 

// 使用useAppDispatch 和 useAppSelector 代替 useSelector 和 useDispatch
export const useAppDispatch:()=> AppDispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector