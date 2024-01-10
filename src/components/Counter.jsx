import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset } from '../redux/counterSlice';
import { blue } from '@mui/material/colors';

function Counter() {
  const [range,setRange]=useState(1)
  const dispatch=useDispatch();
  const count=useSelector(state=>state.counter.value);
  console.log("rangee",range);

  return (
    <div className='d-flex align-items-center justify-content-center w-100 mt-2 flex-column'>
        <h5 style={{fontSize:"70px",color:"black "}}>{count}</h5>
        <div>
            <button className='btn btn-danger p-3 ms-2' onClick={()=>dispatch(decrement(Number(range)))}>Decrement</button>
            <button className='btn btn-success p-3 ms-2' onClick={()=>dispatch(increment(Number(range)))}>Increment</button>
            <button className='btn btn-primary p-3 ms-2' style={{width:'120px'}} onClick={()=>dispatch(reset())}>Reset</button>
        </div>
        <div>
          <input type="number" className='form-control w-100 mt-3' placeholder='Please enter the range' style={{border:'blue'}}
          onChange={(e)=>setRange(e.target.value)} />
        </div>
    </div>
  )
}

export default Counter