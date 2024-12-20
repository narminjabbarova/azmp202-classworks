import { useState } from 'react'
import style from "./style.module.scss";

const Nav=() => {
  

  return (
    
      <nav>
        <h2>Quickly</h2>
        <ul>
          <li>About us</li>
          <li>Products</li>
          <li>Features</li>
          <li>Our Blog</li>
          <li>Downloads</li>
        </ul>
        <div className={style.btns}>
          <button className={style.signup}>Sign in</button>
          <button className={style.login}>Log in</button>
        </div>
      </nav>
   
  )
}

export default Nav
