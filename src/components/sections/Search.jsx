import React from 'react'
import SearchElement from './SearchElement'
import search from '../../assets/images/search.svg'

const Search = () => {
  const arr = [
    {
      heading: 'الضيوف',
      placeholder: '2 كبار، 2 أطفال',
      details: '2 غرفة'
    },
    {
      heading: 'ابحث عن وجهة',
      placeholder: 'هايسيندا باي',
      details: 'سيدي عبدالرحمن، مرسى مطروح، مصر'
    }
  ]
  return (
    <section className='searchSection'>
      <SearchElement heading={arr[0].heading} placeholder={arr[0].placeholder} details={arr[0].details}/>
      <section className="searchElement dateInputs">
        <section>
          <h6 className='heading'>تاريخ الخروج</h6>
          <input type='date'/>
          <h6 className='dateDetails'>
            <a>السابق</a>
            التالي
          </h6>
        </section>
        <section>
          <h6 className='heading'>تاريخ الدخول</h6>
          <input type='date'/>
          <h6 className='dateDetails'>
            <a>السابق</a>
            التالي
          </h6>
        </section>
      </section>
      <SearchElement heading={arr[1].heading} placeholder={arr[1].placeholder} details={arr[1].details}/>
      <button id="search">
        <img src={search} alt='search'/>
      </button>
    </section>
  )
}

export default Search