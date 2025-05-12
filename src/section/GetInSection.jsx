import React from 'react'
import GetInCard from '../components/GetInCard'

const GetInSection = () => {
  return (
    <div className='m-4 bg-red-50 p-10 rounded-2xl shadow-sm mb-10'>
  <h1 className='text-4xl font-bold  text-[#042589]'>Let's Get In </h1>
    <div className='flex gap-6 flex-wrap m-5 justify-between'>
      <GetInCard/>
      <GetInCard/>
      <GetInCard/>
      <GetInCard/>
      <GetInCard/>
      <GetInCard/>
      <GetInCard/>
      <GetInCard/>
      <GetInCard/>
    </div>
    </div>
  )
}

export default GetInSection
