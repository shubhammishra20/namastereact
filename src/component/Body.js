import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"
import { useState } from "react"

const Body = () => {
  const datal =  useState(resList)
  console.log(datal)
  const list = datal[0]
  const setList = datal[1]
  console.log(setList)

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