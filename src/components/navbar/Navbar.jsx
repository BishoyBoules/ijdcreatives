import React from 'react'
import logo from '../../assets/images/logo.svg'
import dropdown from '../../assets/images/dropdown.svg'
import add from '../../assets/images/Group 664.svg'

const Navbar = () => {
  return (
    <nav>
        <section className='btnSection'>
            <section className='languageSection'>
                EN
                <img src={dropdown} alt='dropdown'/>
            </section>
            <section className='userSection'>
                يزيد العمري
                <span><img id='name' /></span>
            </section>
            <button id='addBtn'>
                اضف عقارك
                <img id='addImg' src={add}/>
            </button>
        </section>
        <section className='logoSection'>
            <img id='logo' src={logo} alt='logo'/>
        </section>
    </nav>
  )
}

export default Navbar