import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Info from './Info'

const Display = () => {

    const [posts, setPost] = useState([])
    const [limit, setLimit] = useState(20)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((data) => {
                setPost(data.data)
            })
            .catch(() => console.log('failed to connect'))
    }, [])


    return (
        <>
        {posts.map((item, i)=>{
           return <Info props = {item}/>
        }) }
        </>
    )
}

export default Display