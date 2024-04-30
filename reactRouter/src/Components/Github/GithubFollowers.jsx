// import React from 'react'
// import { useParams } from 'react-router-dom'
// // import { useState , useEffect } from 'react';
// import { useLoaderData } from 'react-router-dom'

// function GithubFollowers() {
//     const userData = useLoaderData() ;

//     // const {userId} = useParams() ; 
//     // const [followers, setFollowers] = useState([]);
//     // const [avatar, setAvatar] = useState('');

//     // useEffect(() =>{
        
//     //     const fetchFollowers = async() =>{
//     //         try{
//     //         const response = await fetch(`https://api.github.com/users/${userId}`)
//     //         if(!response.ok){
//     //             throw new Error('Failed to fetch followers');
//     //         }
//     //         const data = await response.json() ;
//     //         setFollowers(data.followers);
//     //         setAvatar(data.avatar_url);
//     //     } catch(error){
//     //         console.error("Error fetching followers" , error) ;
//     //     }
//     //     };
//     //     fetchFollowers();
//     // } ,[userId])

//   return (
//     <div>
//       <div  className='bg-gray-600 text-white text-3xl p-4 text-center'>
//       Github followers : {userData.followers} 
//       <img src= {userData.avatar_url} width={300}/>
//     </div>
//     </div>
//   )
// }

// export default GithubFollowers

// export const githubFollowerLoader = async({params}) =>{
//     const {userId} = params() ;
//     const response = await fetch(`https://api.github.com/users/${userId}`);
//     const userData = await response.json() ;
//     return {followers : userData.followers  , avatar_url: userData.avatar_url} ;

// }
