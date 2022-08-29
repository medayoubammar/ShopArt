import React from 'react'
import { myLogo } from '../ressources'

export default function SubNavbar() {
  return (
    <ul className='nav justify-content-center'>
        <li className='nav-item'>
            <a className='nav-link' href="#"> HOME</a>
        </li>

        <li className='nav-item'>
            <a className='nav-link' href="#shop">SHOP</a>
        </li>

        <li className='nav-item MyLogo'>
          <img
          src={myLogo}
          className='navbar-brand'
          width={"70px"}
          height={"70px"}
          alt="mylogo"
          />
        </li>

        <li className='nav-item'>
            <a className='nav-link' href="#privacy"> 
            PRIVACY POLICY</a>
        </li>

        <li className='nav-item'>
            <a className='nav-link' href="#contact">
                CONTACT
            </a>
        </li>
        </ul>
  )
}
