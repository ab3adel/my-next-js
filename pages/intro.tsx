
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
    
    x:['-100vw','0vw'],
    opacity:[0,1],
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
    
    x:['100vw','0vw'],
    opacity:[0,1],

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
    y:['50vh','0vh'],
    x:['-100vw','0vw'],
    opacity:[0,1],

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
  const controlChildrenRight =useAnimation()
  const controlChildrenLeft =useAnimation()
  const controlChildrenSteep =useAnimation()
  const controlPara =useAnimation()


    useEffect(()=>{

          if (animate.start ){
          
            controlChildrenRight.start('right')
            controlChildrenLeft.start('left')
            controlChildrenSteep.start('steep')
            controlPara.start('visible')
            setAnimate(pre=>({...pre,index:pre.index+1}))
          }
        
    },[animate.start])
  
  
     return (
                <Box component="div" className={style.spotLight}>
                         <Me animate={animate} />

                        <div 
                        className={style.subContainer}>
                                
                                <motion.div  className={style.myNameParent}
                                
                                >
                                    <motion.span variants={childrenVariants} initial="hiddenRight"  animate ={controlChildrenRight} >M</motion.span> 
                                    <motion.span variants={childrenVariants} initial="hiddenRight"  animate ={controlChildrenRight}   >O</motion.span>
                                    <motion.span variants={childrenVariants} initial="hiddenRight"  animate ={controlChildrenRight}  >H</motion.span> 
                                    <motion.span variants={childrenVariants} initial="hiddenRight"  animate ={controlChildrenRight}  >A</motion.span>
                                    <motion.span variants={childrenVariants} initial="hiddenLeft"  animate ={controlChildrenLeft}  >M</motion.span>
                                    <motion.span variants={childrenVariants} initial="hiddenLeft"  animate ={controlChildrenLeft} >M</motion.span>
                                    <motion.span variants={childrenVariants} initial="hiddenLeft"  animate ={controlChildrenLeft}   >A</motion.span> 
                                    <motion.span variants={childrenVariants} initial="hiddenLeft"  animate ={controlChildrenLeft}  >D</motion.span>
                                    <span style={{width:"10px"}} />
                                    <motion.span variants={childrenVariants} initial="hiddenSteep"  animate ={controlChildrenSteep}  >I</motion.span>
                                    <motion.span variants={childrenVariants} initial="hiddenSteep"  animate ={controlChildrenSteep} >S</motion.span>
                                    <motion.span variants={childrenVariants} initial="hiddenSteep"  animate ={controlChildrenSteep}  >M</motion.span> 
                                    <motion.span variants={childrenVariants} initial="hiddenSteep"  animate ={controlChildrenSteep} >A</motion.span>
                                    <motion.span variants={childrenVariants} initial="hiddenSteep"  animate ={controlChildrenSteep} >E</motion.span> 
                                    <motion.span variants={childrenVariants} initial="hiddenSteep"  animate ={controlChildrenSteep} >E</motion.span> 
                                    <motion.span variants={childrenVariants} initial="hiddenSteep"  animate ={controlChildrenSteep} >L</motion.span>
                                </motion.div>
                                
                        </div>
                        <motion.div className={style.paper}
                            variants={paraVariants} initial="hidden" animate={controlPara}
                            >
                                Engineer and <code>web developer</code> <Computer fontSize="small" /> <br/> 
                                Impassioned to learn up-to-date techniques <Update fontSize="small"/> <br/>
                                Thrilled to dive into new challengs <Star fontSize="small" /> <br/>
                                
                                
                        </motion.div>
                </Box>
)
}
export default Intro;