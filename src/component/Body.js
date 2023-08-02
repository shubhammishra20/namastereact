import RestaurantCard from './RestaurantCard'
// import resList from '../utils/mockData'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Shimmer from './Shimmer'
import useOnlineStaus from '../utils/useOnlineStatus'

const filterList = (seatchInput, dataList) => {
  const filtData = dataList.filter(listData => {
    return listData.info.name.toLowerCase().includes(seatchInput.toLowerCase())
  })
  return filtData
}

const Body = () => {
  const [seatchText, setSearchText] = useState('')
  const [list, setList] = useState(null)
  const [fltrList, setFltrList] = useState([])
  const upadteList = e => {
    setSearchText(e.target.value)
  }
  async function getApiData () {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9180865&lng=77.6051008&page_type=DESKTOP_WEB_LISTING'
    )
    json = await data.json()
    const cardList = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setList(cardList)
    setFltrList(cardList)
    console.log(cardList)
  }
  const onlineStatus = useOnlineStaus()

  if(onlineStatus === false) {
    return (
    <h1>you are Offline, Please check your internet!!</h1>
    )
  }
  useEffect(() => {
    getApiData()
  }, [])

  return list === null ? (
    <Shimmer />
  ) : (
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
        {list && list.map(val => (
          <Link key={val?.info.id} to={`/restaurant/${val?.info.id}`}>
            <RestaurantCard resData={val?.info} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Body
