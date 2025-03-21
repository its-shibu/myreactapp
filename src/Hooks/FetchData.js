import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { data } from 'react-router-dom'



const FetchData = () => {

    const [posts, setPost] = useState([])

    const[limit, setLimit] = useState(20)



    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((data) => {
                setPost(data.data)
            })
            .catch(() => console.log('failed to connect'))
    }, [])


    return (
        <>


        {posts.slice(0, limit).map((data)=>(

            <div key = {data.id}>{data.title}</div>

        ))}
        <button onClick={()=>setLimit(limit+20)} className='btn btn-primary'>Sow More</button>
        <button onClick={()=>setLimit(limit-40)} className='btn btn-info'>Show Less </button>

{/* 

             {posts.map((post) => ( // Directly map posts to elements
                <div key={post.id}>{post.title}</div> // Use divs for simplicity
            ))} */}


        </>

    )
}

export default FetchData