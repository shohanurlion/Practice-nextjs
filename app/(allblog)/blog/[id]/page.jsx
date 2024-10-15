import getAllid from '@/lib/getAllid';
import React from 'react'

export const generateMetadata = async ({params}) =>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const postData = await res.json()

  return{
    title:`${postData.title}`,
    description:postData.body,
  }
}

const page =async ({params}) => {
    const {id} = params;
    const allpostid = await getAllid(id)
  return (
    <>
    <div className='w-[800px] mx-auto'>
    <h1>Title: {allpostid.title}</h1>
    <p>Description:{allpostid.body}</p>
    </div>
    
    </>
  )
}

export default page