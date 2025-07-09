import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data=useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

    


  return (
    <div className='text-center m-4 bg-gray-600  text-white p-4 text-3xl'>Github followers :{data.followers}
    <img src={data.avatar_url} width={300} alt="" />
    <div>Location:{data.location}</div>
    </div>
  )
}

export default Github

export const getGithubData=async()=>{
    const res=await fetch('https://api.github.com/users/hiteshchoudhary')
    return res.json()
}