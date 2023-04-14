import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"
import { useState } from "react"

const Body = () => {
  const [list, setList] =  useState(resList)
  
  const filterData = () => {
        const updateList =  resList.filter((rate => {
            return rate.data.avgRating >= 4.1
        }))
    setList(updateList)
    }

    return (
      <div className='body'>
        <div className='filter'>
            <button className="filter-btn" onClick={() => filterData()}>
                Top Rated Restaurants
            </button>
        </div>
        <div className='res-container'>
          {list.map((val) => (
            <RestaurantCard key ={val.data.id} resData={val} />
          ))}
        </div>
      </div>
    )
  }

  export default Body