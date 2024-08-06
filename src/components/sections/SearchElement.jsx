import React from 'react'

const SearchElement = (props) => {
  return (
    <section className='searchElement'>
        <h6 className='heading'>{props.heading}</h6>
        <input type='text' placeholder={props.placeholder}/>
        <h6 className='details'>{props.details}</h6>
    </section>
  )
}

export default SearchElement