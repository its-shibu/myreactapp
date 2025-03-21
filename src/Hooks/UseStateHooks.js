import React, { useState, useEffect } from 'react'

const useStateHooks = () => {
    const [count, setCount] = useState(100)
    let [data, setData] = useState(10)

    const increment = () => {
        setCount(count + 1)
        return count
    }

    const reset = () => {
        setCount(0)
    }

    const decrement = () => {

        if (!count < 1) {
            setCount(count - 1)
        }
        else {
            setCount(0)
        }

    }

    useEffect(() => {
        window.alert('value updated')
    }, [count])



    return (
        <>  <div className='App'>
            <h2>{count}</h2>
            <button className='btn btn-primary' onClick={increment}>increment</button> &nbsp;
            <button className='btn btn-danger' onClick={() => setCount(count - 1)}>decrement</button> &nbsp;
            <button className='btn btn-warning' onClick={reset}>reset</button>

            <h1>{count}</h1>
            <button className='btn btn-outline-primary' onClick={count}> INCREASE </button> &nbsp;
            <button className='btn btn-outline-info' onClick={()=>(count + 10)}> INCREASE by TEN</button>
        </div>
        </>
    )
}

export default useStateHooks