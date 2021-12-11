
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
{Box
} 
from '@mui/material'
import Me from './me'
import { animateContext } from '../pages/_app'
let childrenVariants:Variants = {
  hiddenRight:{
    x:"-100vw",
    opacity:0
  },
  right:{
    
    x:0,
    opacity:1,
   
    translateY:50,
   transition:{
     duration:3,
     translateY:{
      duration:1,
      delay:2,
      ease:"easeIn"
    }
   }
   
  },
  hiddenLeft:{
    x:"100vw",
    opacity:0
  },
  left:{
    
    x:0,
    opacity:1,
   
    translateY:50,
   transition:{
     duration:3,
     translateY:{
      duration:1,
      delay:2,
      ease:"easeIn"
    }
   }
   
  },
  hiddenSteep:{
    x:"-100vw",
    y:"50vh",
    opacity:0
  },
  steep:{
    y:0,
    x:0,
    opacity:1,
   
    translateY:50,
   transition:{
     duration:3,
     translateY:{
      duration:1,
      delay:2,
      ease:"easeIn"
    }
   }
   
  }
}

let paraVariants:Variants={
  hidden:{
    opacity:0,

  },
  visible: {
    opacity:1,
 
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
  const [animating,setAnimating]= useState(true)
  const {animate,setAnimate} =useContext(animateContext)

    useEffect(()=>{

          if (animate.index === 0){
            setAnimate(pre=>({...pre,index:pre.index+1}))
           
          }
          else {
            childrenVariants=null
            paraVariants=null
            
          }
    },[animate.index,setAnimate])
  
  
     return (
                <Box component="div" className={style.spotLight}>
                         <Me animate={animating}/>

                        <div 
                        className={style.subContainer}>
                                
                                <motion.div  className={style.myNameParent}
                                
                                >
                                    <motion.span variants={childrenVariants} initial="hiddenRight"  animate ={"right"} >M</motion.span> 
                                    <motion.span variants={childrenVariants} initial="hiddenRight"  animate ={"right"}   >O</motion.span>
                                    <motion.span variants={childrenVariants} initial="hiddenRight"  animate ={"right"}  >H</motion.span> 
                                    <motion.span variants={childrenVariants} initial="hiddenRight"  animate ={"right"}  >A</motion.span>
                                    <motion.span variants={childrenVariants} initial="hiddenLeft"  animate ={"left"}  >M</motion.span>
                                    <motion.span variants={childrenVariants} initial="hiddenLeft"  animate ={"left"} >M</motion.span>
                                    <motion.span variants={childrenVariants} initial="hiddenLeft"  animate ={"left"}   >A</motion.span> 
                                    <motion.span variants={childrenVariants} initial="hiddenLeft"  animate ={"left"}  >D</motion.span>
                                    <span style={{width:"10px"}} />
                                    <motion.span variants={childrenVariants} initial="hiddenSteep"  animate ={"steep"}  >I</motion.span>
                                    <motion.span variants={childrenVariants} initial="hiddenSteep"  animate ={"steep"} >S</motion.span>
                                    <motion.span variants={childrenVariants} initial="hiddenSteep"  animate ={"steep"}  >M</motion.span> 
                                    <motion.span variants={childrenVariants} initial="hiddenSteep"  animate ={"steep"} >A</motion.span>
                                    <motion.span variants={childrenVariants} initial="hiddenSteep"  animate ={"steep"} >E</motion.span> 
                                    <motion.span variants={childrenVariants} initial="hiddenSteep"  animate ={"steep"} >E</motion.span> 
                                    <motion.span variants={childrenVariants} initial="hiddenSteep"  animate ={"steep"} >L</motion.span>
                                </motion.div>
                                
                        </div>
                        <motion.div className={style.paper}
                            variants={paraVariants} initial="hidden" animate="visible"
                            >
                                Engineer and <code>web developer</code> <Computer fontSize="small" /> <br/> 
                                enthausiated to learn up-to-date techniques <Update fontSize="small"/> <br/>
                                thrilled to dive into new challengs <Star fontSize="small" /> <br/>
                                
                                
                        </motion.div>
                </Box>
)
}
export default Intro;