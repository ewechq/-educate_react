import React, { useState } from 'react'
import classes from './Counter.module.scss'

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
  return (
    <div className={classes.btn}>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <p>{count}</p>
    </div>
  )
}

export default Counter