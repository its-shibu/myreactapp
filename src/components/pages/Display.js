import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import Info from './Info'
import { GlobalContext } from '../../Hooks/GlobalContext'


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


    //gobal context variable
    const value = useContext(GlobalContext)



    return (
        <>

        <h1>{value}</h1>

        {posts.map((item, i)=>{
           return <Info props = {item}/>
        }) }
        </>
    )
}

export default Display