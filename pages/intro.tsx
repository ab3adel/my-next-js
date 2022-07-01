
import {useEffect,useContext,useState} from 'react'
import style from '../styles/intro.module.css'
import 
{
Computer,
Update,
Star
} 
from '@material-ui/icons'
import {motion
  ,useAnimation,Variants} 
  from  'framer-motion'
import 
{Box, Grid
} 
from '@mui/material'
import Me from './me'
import { animateContext } from '../pages/_app'
import {MyName} from './myname'

let paraVariants:Variants={
  hidden:{
    opacity:0,

  },
  visible: {
    opacity:[0,1],
 
    transition:{
      duration:4,
      delay:3,
      ease:"easeInOut",
      fontSize:{
        duration:3,
        delay:1,
        ease:"easeInOut"
      }
    }
  }
}

const Intro =()=>{
  const {animate,setAnimate} =useContext(animateContext)
  
     return (
      <Grid item container xs ={12}>
        
      </Grid>
)
}
export default Intro;