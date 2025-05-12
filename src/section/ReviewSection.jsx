// import React from 'react'
// import ReviewCard from '../components/ReviewCard'
// const ReviewSection = () => {
//   return (
//     <div className='flex justify-center'> 
//     <div className='flex flex-col p-4 w-[90%] gap-4  shadow rounded-2xl mb-10'>
//       <div className='flex flex-col gap-4 w-[320px]'>
//         <h1 className='text-4xl font-bold  text-primary'>Review </h1>
//         <div className='flex gap-4 justify-between'>
//         <p>Cleniness</p><input type="range" name="" id="" className='w-[300px]'/>
//         </div>
//         <div className='flex gap-4 justify-between'>
//         <p>Amenties</p><input type="range" name="" id="" className='w-[300px]'/>
//         </div>
//         <div className='flex gap-4 justify-between'>
//         <p>Location</p><input type="range" name="" id="" className='w-[300px]'/>
//         </div>
//         <div className='flex gap-4 justify-between'>
//         <p>Service</p><input type="range" name="" id="" className='w-[300px]'/>
//         </div>
       
//       </div>
//     <div className='flex gap-8 justify-center flex-wrap'>
//       <ReviewCard/>
//       <ReviewCard/>
//       <ReviewCard/>
//       <ReviewCard/>
//       <ReviewCard/>
//     </div>
//     </div>
//     </div>
//   )
// }

// export default ReviewSection
import React, { useState } from 'react';
import ReviewCard from '../components/ReviewCard';

const categories = ['Cleanliness', 'Amenities', 'Location', 'Service'];
const ratingTabs = ['All', '5★', '4★', '3★', '2★', '1★'];

// Dummy reviews
const allReviews = [
  { id: 1, category: 'Cleanliness', rating: 5, text: 'Very clean and tidy.' },
  { id: 2, category: 'Amenities', rating: 4, text: 'Good facilities.' },
  { id: 3, category: 'Location', rating: 3, text: 'Okay location.' },
  { id: 4, category: 'Service', rating: 5, text: 'Excellent support staff.' },
  { id: 5, category: 'Cleanliness', rating: 4, text: 'Room was clean.' },
  { id: 6, category: 'Service', rating: 2, text: 'Slow room service.' },
];

const ReviewSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('Cleanliness');
  const [selectedRating, setSelectedRating] = useState('All');

  const filteredReviews = allReviews.filter((review) => {
    return (
      review.category === selectedCategory &&
      (selectedRating === 'All' || review.rating === parseInt(selectedRating))
    );
  });

  return (
    <div className='w-[95%] mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10'>
      {/* LEFT SIDE - Filters and Reviews */}
      <div className='lg:col-span-2'>
        <h1 className='text-3xl font-bold text-primary mb-6'>Customer Reviews</h1>

        {/* Category Tabs */}
        <div className='flex gap-4 flex-wrap mb-6'>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setSelectedRating('All');
              }}
              className={`px-4 py-2 rounded-2xl border-blue-300 border ${
                selectedCategory === cat
                  ? 'search text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Rating Filter Tabs */}
        <div className='flex gap-4 flex-wrap mb-4'>
          {ratingTabs.map((rate) => (
            <button
              key={rate}
              onClick={() => setSelectedRating(rate === 'All' ? 'All' : rate[0])}
              className={`px-3 py-1 rounded-2xl border-blue-300 border ${
                selectedRating === (rate === 'All' ? 'All' : rate[0])
                  ? 'search text-white'
                  : 'bg-gray-200'
              }`}
            >
              {rate}
            </button>
          ))}
        </div>

        {/* Review Cards */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-2 gap-6'>
          {filteredReviews.length > 0 ? (
            filteredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))
          ) : (
            <p className='text-gray-500 col-span-full'>No reviews found.</p>
          )}
        </div>
      </div>

      {/* RIGHT SIDE - Review Form */}
      <div className='bg-blue-50 shadow p-6 rounded-2xl h-full '>
        <h2 className='text-xl font-bold mb-4'>Leave a Review</h2>
        <form className='flex flex-col gap-4 justify-around'>
          <input
            type='text'
            placeholder='Your Name'
            className='border px-4 py-2 rounded-2xl outline-0 border-blue-300'
          />
          <select className='border px-4 py-2 rounded-2xl outline-0 p-2  border-blue-300'>
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
          <select className='border px-4 py-2 rounded-2xl outline-0 p-2  border-blue-300'>
            <option value='5'>5 ★</option>
            <option value='4'>4 ★</option>
            <option value='3'>3 ★</option>
            <option value='2'>2 ★</option>
            <option value='1'>1 ★</option>
          </select>
          <textarea
            placeholder='Your Review'
            rows='4'
            className='border px-4 py-2 rounded-2xl  border-blue-300 '
          ></textarea>
          <button
            type='submit'
            className='search text-white p-2 rounded-2xl '
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewSection;
