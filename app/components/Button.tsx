'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

const Button = ({label,route}:any) => {
  const router=useRouter();  

  return (
    <div>
    <button onClick={()=>{
        router.push(`/${route}`)
    }} className="rounded-2xl bg-opacity-80 hover:bg-black p-4 m-3 border-2 border-black bg-black text-white" >{label}</button> 
    </div>
  )
}

export default Button