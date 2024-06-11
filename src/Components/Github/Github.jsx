import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([])

    const data = useLoaderData()

    // useEffect(() => {
    //     fetch("https://api.github.com/users/SauravSatpute")
    //     .then((response)=> {
    //         return response.json()
    //     })
    //     .then((data)=> {
    //         setData(data)
    //         // console.log(data)
    //     })
    // },[])
  return (
    <div className='m-4 p-5 text-center text-3xl bg-gray-600 text-white'>
        Github followers : {data.followers}
        <img src={data.avatar_url} alt="git picture" width={300} />
    </div>
  )
}

export default Github

export const getGithubResponse = async () => {
    const data = await fetch("https://api.github.com/users/SauravSatpute")
    return  data.json()
}