import style from '../styles/index.module.css'
import Intro from './intro'
import {Looks} from '@material-ui/icons'
import Link from 'next/link'
import {Caution} from './caution'
import { useState } from 'react'
 const  HomePage =()=> {
 const [open,setOpen]=useState(true)
    return (
  
      <div className={style.animationContainer}>
       
          <Intro />
          <div className={style.portfolioBtnContainer}
           >
              <Link 
                  href="/portfolio/layout/">
                <a className ={style.portfolioBtn} >
                
                  portfolio
                  <Looks fontSize="small"/>
                </a>
              </Link>
          </div>
             <Caution open={open} setOpen={setOpen}/>
      </div>

 
    )
}

export default HomePage;