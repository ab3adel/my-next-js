import {motion
    ,useAnimation,Variants} 
    from  'framer-motion'
import { useEffect } from 'react'
import style from '../styles/intro.module.css'

    let childrenVariants:Variants = {
        hiddenRight:{
          x:"-100vw",
          opacity:0
        },
        right:(custom)=>({
          
          x:['-100vw','0vw'],
          opacity:[0,1],
          y:['-50vh','0vh'],
         transition:{
           duration:3,
          y: {
            delay:custom.i ,
            duration:3
          }
         }
         
        }),
        hiddenLeft:{
          x:"100vw",
          opacity:0,
          y:0
        },
        left:(custom)=>
       { 
      
        return({
          
          x:['100vw','0vw'],
          opacity:[0,1],
          y:['-30vh','0vh'],
         transition:{
           duration:3,
           y:{
            
            delay: custom.i,
            duration:3
         
          }
         }
         
        })
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
      

export const MyName =({start,setAnimate}:{start:boolean,setAnimate:Function}) =>{
    const controlChildrenRight =useAnimation()
    const controlChildrenLeft =useAnimation()
    const controlChildrenSteep =useAnimation()
    const controlPara =useAnimation()

    useEffect(()=>{

        if (start ){
        
          controlChildrenRight.start('right')
          controlChildrenLeft.start('left')
          controlChildrenSteep.start('steep')
          controlPara.start('visible')
          setAnimate(pre=>({...pre,index:pre.index+1}))
        }
      
      
  },[start])
    return (
        <motion.div  className={style.myNameParent}
                                
        >
            <motion.span variants={childrenVariants} initial="hiddenRight"  animate ={controlChildrenRight}
            custom={{i:0.1}} >M</motion.span> 
            <motion.span variants={childrenVariants} 
            initial="hiddenRight"  animate ={controlChildrenRight}  custom={{i:0.2}}  >O</motion.span>
            <motion.span variants={childrenVariants} 
            initial="hiddenRight"  animate ={controlChildrenRight}  custom={{i:0.3}} >H</motion.span> 
            <motion.span variants={childrenVariants} initial="hiddenRight" 
             animate ={controlChildrenRight}  custom={{i:0.4}}  >A</motion.span>
            <motion.span variants={childrenVariants} initial="hiddenLeft" 
             animate ={controlChildrenLeft}  custom={{i:0.5}} >M</motion.span>
            <motion.span variants={childrenVariants} initial="hiddenLeft" 
             animate ={controlChildrenLeft}  custom={{i:0.6}} >M</motion.span>
            <motion.span variants={childrenVariants} initial="hiddenLeft"  
            animate ={controlChildrenLeft}  custom={{i:0.7}}  >A</motion.span> 
            <motion.span variants={childrenVariants} initial="hiddenLeft"  
            animate ={controlChildrenLeft}  custom={{i:0.8}} >D</motion.span>
            <span style={{width:"10px"}} />
            <motion.span variants={childrenVariants} initial="hiddenSteep"  animate ={controlChildrenSteep}  >I</motion.span>
            <motion.span variants={childrenVariants} initial="hiddenSteep"  animate ={controlChildrenSteep} >S</motion.span>
            <motion.span variants={childrenVariants} initial="hiddenSteep"  animate ={controlChildrenSteep}  >M</motion.span> 
            <motion.span variants={childrenVariants} initial="hiddenSteep"  animate ={controlChildrenSteep} >A</motion.span>
            <motion.span variants={childrenVariants} initial="hiddenSteep"  animate ={controlChildrenSteep} >E</motion.span> 
            <motion.span variants={childrenVariants} initial="hiddenSteep"  animate ={controlChildrenSteep} >E</motion.span> 
            <motion.span variants={childrenVariants} initial="hiddenSteep"  animate ={controlChildrenSteep} >L</motion.span>
        </motion.div>
    )
}