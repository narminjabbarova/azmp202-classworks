import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./index.module.css"
import { useSelector } from 'react-redux'

const Header = () => {
    const wishlist = useSelector((state)=>state.wishlist)
  return (
    <div>
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to = {"/"}>Categories</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/add'}>Add Category</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/wishlist'}>Wishlist <sup>{wishlist?.items.length}</sup></NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header