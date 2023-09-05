import { CDN_URL } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addItems, removeItem, clearCart } from '../utils/cartSlice'

const ItemList = ({ items }) => {
  // console.log(items)
  const dispatch = useDispatch()
  const handleAddItems = (item) => {
    dispatch(addItems(item))
  }
  return (
    <div>
      {items.map(item => (
        <div
          key={item.card.info.id}
          className='p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between bg-slate-50'
        >
          <div className='w-9/12'>
            <div className='py-2'>
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className='text-xs'>{item.card.info.description}</p>
          </div>
          <div className='w-3/12 p-4'>
            <div className='absolute'>
              <button
                className='py-2 px-7 ml-10 my-[150px] bg-white shadow-md text-green-600 font-semibold rounded-md hover:shadow-lg hover:bg-gray-100'
                onClick={ () => handleAddItems(item)}
              >
                ADD +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className='rounded-xl'
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ItemList
