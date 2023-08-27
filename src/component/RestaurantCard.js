import { CDN_URL } from '../utils/constant'

const RestaurantCard = prop => {
  const { resData } = prop
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData
  return (
    <div className='p-1 m-4 w-72 rounded-lg bg-gray-50 hover:shadow-xl'>
      <img
        alt='ref-logo'
        className='rounded-2xl w-[275px] h-52 ml-1'
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className='py-4 text-lg font-bold'>{name}</h3>
      <h4 className='text-gray-700 text-lg'>
        {avgRating < 4 ? (
          <span className='bg-red-400 rounded-full text-lg px-1 mr-1 text-white'>
            ★
          </span>
        ) : (
          <span className='bg-green-600 rounded-full text-lg px-1 mr-1 text-white'>
            ★
          </span>
        )}
        {avgRating}
      </h4>
      <h4 className='text-gray-700 text-lg'>{cuisines.join(', ')}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  )
}

// Restaurant Promoted ==>> Using Higher Order function
export const withPromotedLabel = (RestaurantCard) => {
  return (prop) => {
    const {resData} = prop
    return (
      <div>
         <label className='absolute bg-black text-white mx-2 my-1 p-2 rounded-lg font-semibold'>Promoted</label>
      <RestaurantCard resData = {resData}/>
      </div>
    )
  }
}
export default RestaurantCard
