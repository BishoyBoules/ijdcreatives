import React, {useState, useEffect} from 'react'
import arrow from '../../assets/images/arrow-left.svg'
import Item from './Item'

const Main = () => {
  const [data, setData] = useState([])
  const api = 'https://wovenclouds.com/arrovia/api/search/random'

  useEffect(() => {
    fetch(api)
    .then(res => {
      return res.json()
    })
    .then(data => {
      setData(data.data)
    })
  }, [])

  return (
    <section className='mainSection'>
      <h1>
      عنوان التصنيف أو الفلتر
      <img src={arrow} alt='left arrow'/>
      </h1>
      <section className='items'>
        {
          data.slice(0,4).map(item => <Item 
            key={item.id} 
            image={item.mainImage} 
            title={item.nameAr}
            location={item.website}
            cost={item.priceAfterDiscount}/>)
        }
      </section>
    </section>
  )
}

export default Main