import React from 'react'
import './count.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../../store/slices/counterSlice'
import reset_btn from '../../assests/restart-square.png'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='counter'>
      <div className='count-main-div'>
      <div className='reset-btn-div'>
          <img src={reset_btn} onClick={() => dispatch(reset())}></img>
        </div>
       <div className='heading'><h2>Pulse Counter</h2></div>
        <div className='result-div' ><span>{count}</span></div>
        <div className='IandD-btns-div'>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
  
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        </div>
      </div>
    </div>
  )
}