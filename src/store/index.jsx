import { configureStore } from '@reduxjs/toolkit'

import { usersSlice } from './data.jsx'

export default configureStore({
  reducer: {
    users: usersSlice
  }
})