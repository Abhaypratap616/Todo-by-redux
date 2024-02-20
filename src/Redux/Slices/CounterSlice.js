import {createSlice} from '@reduxjs/toolkit'

const initialState={
    counters:0
}
const counterSlice = createSlice({
name:'counter',
initialState,
reducers:{
increment:(state)=>{
    state.counters++
},
decrement:(state)=>{
    state.counters--
}
}
})
export const {increment,decrement}=counterSlice.actions;    
export default counterSlice.reducer;