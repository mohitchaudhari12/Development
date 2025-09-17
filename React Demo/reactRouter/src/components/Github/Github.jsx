import { useState, useEffect } from 'react'
import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('http://api.github.com/users/mohitchaudhari12')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

  return (
    <div className='text-center m-4  bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}</div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('http://api.github.com/users/mohitchaudhari12')
    return response.json()
}