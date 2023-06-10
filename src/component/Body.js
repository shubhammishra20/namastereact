import RestaurantCard from './RestaurantCard'
// import resList from '../utils/mockData'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer'

const filterList = (seatchInput, dataList) => {
  const filtData = dataList.filter(listData => {
    return listData.data.name.toLowerCase().includes(seatchInput.toLowerCase())
  })
  return filtData
}

const Body = () => {
  const [seatchText, setSearchText] = useState('')
  const [list, setList] = useState([])
  const [fltrList, setFltrList] = useState([])
  const upadteList = e => {
    setSearchText(e.target.value)
  }
  async function getApiData() {
    const data  = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9180865&lng=77.6051008&page_type=DESKTOP_WEB_LISTING")
    json = await data.json()
    const cardList = json?.data?.cards[2]?.data?.data?.cards
    setList(cardList)
    setFltrList(cardList)
    console.log(cardList)
  }
useEffect(() => {
  getApiData()
},[])

  return (list.length==0) ? <Shimmer/>: (
    <div className='body'>
      <div>
        <input
          type='text'
          className='search-input'
          placeholder='Search'
          value={seatchText}
          onChange={upadteList}
        />
        <button
          onClick={() => {
            const data = filterList(seatchText, fltrList)
            setList(data)
          }}
        >
          Search
        </button>
      </div>
      <div className='res-container'>
        {list.map(val => (
          <RestaurantCard key={val.data.id} resData={val} />
        ))}
      </div>
    </div>
  )
}

export default Body
