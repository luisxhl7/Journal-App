import { configureStore } from '@reduxjs/toolkit'
import { authReducer, journalReducer } from './slices'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    journal: journalReducer,
  },
})