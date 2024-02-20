import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import { increment,decrement } from "../Redux/Slices/CounterSlice";



export default function Component() {


     const YourNumber = useSelector((state)=>state.counter.counters);
     const dispatch = useDispatch();   


  return (
    <div>
     <h1>NUMBER-COUNTER</h1>
     <button onClick={()=>dispatch(increment)}>Increment</button>
     <h3>{YourNumber}</h3>
     <button onClick={()=>dispatch(decrement)}>Decrement</button>
    </div>
  )
  
}
