import { CDN_URL} from "../utils/constant"

const RestaurantCard = prop => {
    const { resData } = prop
    const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime } = resData?.data
    return (
      <div className='res-card' style={{ backgroundColor: '#f0f0f0' }}>
        <img
          alt='ref-logo'
          className='res-logo'
          src={CDN_URL+cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(' ,')}</h4>
        <h4>{avgRating} starts</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    )
  }

  export default RestaurantCard