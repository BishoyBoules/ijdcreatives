import React from 'react'
import heart from '../../assets/images/Icon ionic-ios-heart.svg'

const Item = ({image, title, location, cost}) => {
  return (
    <section className='item'>
        <section className='itemImg'>
            <img src={image} className='itemImg'/>
            <span className='likeImg'><img src={heart} alt='liked'/></span>
        </section>
        <section className='itemDetails'>
            <section className='rating'>8.5</section>
            <section className='itemInfo'>
                <h2>{title}</h2>
                <h6>{location}</h6>
                <h3>{cost} ريال <span>في الليلة</span></h3>
            </section>
        </section>
    </section>
  )
}

export default Item