import React from 'react';
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

export interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    clear: (state) => {
      state.count = 0;
    },
  },
});

const { increment, clear } = counterSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  },
});

export function useStore(){
  const count = useSelector((state: CounterState) => state.counter.count);
  const dispatch = useDispatch();
  return {
    count,
    increment: () => dispatch(increment()),
    clear: () => dispatch(clear()),
  };
}

export function StoreProvider({children}){
  return <Provider store={store}>{children}</Provider>
}