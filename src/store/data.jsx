import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: []
  },
  reducers: {
    getData: state => {
        fetch('http://127.0.0.1:8000/api/getData', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            mode: 'cors',
            // body: JSON.stringify({"name": "PHP"}),
            referrerPolicy: 'no-referrer'
        }).then(res => res.json()).then(res => state.data(res));
    }    
  }
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const { getData } = usersSlice.actions

export default usersSlice.reducer