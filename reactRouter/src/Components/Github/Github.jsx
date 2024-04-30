import React, { useEffect , useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData() ;
  return (
    <div  className='bg-gray-600 text-white text-3xl p-4 text-center'>
      Github followers : {data.followers} 
      <img src= {data.avatar_url} width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch(`https://api.github.com/users/KAMAL-02`)
    return response.json()
}
