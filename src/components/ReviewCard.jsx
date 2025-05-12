import React from 'react'
import men from "../assets/men.jpeg"
import { FaStar } from "react-icons/fa";
const ReviewCard = () => {
  return (
    <div className='shadow-sm w-[280px] p-4 rounded-2xl'>
      <div className='flex flex-col justify-center items-center'>
        <img src={men} alt="" height={80} width={50} className='rounded-t-full'/>
        <h3 className='text-xl font-bold review-name '>Ronak Singh</h3>
      </div>
      <div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio possimus omnis corporis necessitatibus nam sunt eos,
             laborum illum sapiente in odio excepturi nobis, odit ex modi explicabo eum mollitia eius.
        </p>
        <p className='flex gap-1 text-yellow-400'>
    <FaStar/>
    <FaStar/>
    <FaStar/>
    <FaStar/>
    <FaStar/>
        </p>
      </div>
    </div>
  )
}

export default ReviewCard
