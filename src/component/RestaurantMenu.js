import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import Category from './Category'
const RestaurantMenu = () => {
  const { resId } = useParams()

  const resInfo = useRestaurantMenu(resId)

  const [showIndex, setShowIndex1] = useState(null)

  if (resInfo === null) return <Shimmer />

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      cat =>
        cat.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    )
  //console.log(categories)

  //console.log("itemCards",itemCards)

  return (
    <div className='text-center'>
      <h1 className='font-bold my-6 text-2xl'>{name}</h1>
      <p className='font-bold text-lg'>
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>
      {/* categories accordions */}
      {categories.map((cat, index) => (
        <Category
          key={cat?.card?.card?.title}
          data={cat?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex1(index)}
         // setFlag = {() => setFlag(!flag)}
        />
      ))}
    </div>
  )
}

export default RestaurantMenu
