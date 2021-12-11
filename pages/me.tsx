import {Star} from '@material-ui/icons'
import {motion,Variants,useAnimation} from 'framer-motion'
import styles from '../styles/me.module.css'
import {useContext, useEffect, useRef} from 'react'
import {animateContext} from './_app'
let spanVariants:Variants={
  beforeFirst:{
    height:0,
    width:"0rem",
   
  }
  ,
    first:{
       height:"12rem",
       width:"12rem",
       boxShadow:"0px 0px 0px transparent"
    },
    radius:{
       height:"0rem",
       boxShadow:["0px 0px 0px transparent","10px  4rem 4rem white","10px  10rem 4rem white","10px  10rem 10rem white"],
       transition:{
           duration:5,
           ease:"linear",
           repeatType:"reverse",
           delay:8,
           boxShadow:{
             duration:2,
             delay:8,
             repeatType:"mirror"
           }
       }

    }
}
let imagesVariants:Variants={
  parentInitial:{
    opacity:0.9
  },
  parentAnimate:{
    opacity:1,
    rotateZ:360,
    width:0,
    height:0,
    transition:{
     ease:"linear",
     duration:5,
     delay:4,
     repeat:Infinity,
     width:{
       delay:5,
       ease:"easeIn",
       duration:3
     },
     height:{
      delay:5,
      ease:"easeIn",
      duration:3
    }
    }
  },
pythonInitial:{
  x:"-100vw",
  opacity:0,

},
pythonAnimate:{
     x:0,
     opacity:1,
     transition:{
       duration:3,
       delay:4,
       rotate:{
         delay:4,
         ease:"easeInOut"
       }
     }
    },
jsInitial:{
      x:"100vw",
      opacity:0,
    
    },
jsAnimate:{
         x:0,
         opacity:1,
         transition:{
           duration:4,
           delay:4,
           rotate:{
             delay:4,
             ease:"easeInOut"
           }
         }
        },
csInitial:{
          y:"-100vh",
          opacity:0,
        
        },
csAnimate:{
             y:0,
             opacity:1,
             transition:{
               duration:3,
               delay:4,
               rotate:{
                 delay:4,
                 ease:"easeInOut"
               }
             }
            }
}
const Me =(props:{animate:boolean})=>{


  const {animate,setAnimate}=useContext(animateContext)
  useEffect (()=>{
console.log(animate)
console.log(props)
  if (animate.index !== 0) {
    imagesVariants=null
    spanVariants=null
  }
  },[])

   return (
       <div className={styles.containerMe}>
             <motion.div
               id="animatedImage"
              className={styles.animatedImage}
              >  <motion.div 
                  variants={imagesVariants} initial="parentInitial"
                  animate="parentAnimate"
                  className={styles.imagesParent}>
                      <motion.img src="/static/python.png" variants={imagesVariants}
                        className={styles.roundedImage}
                        initial="pythonInitial" animate="pythonAnimate"
                        id={styles.pythonImage}/>
                      <motion.img src="/static/js.png" 
                       variants={imagesVariants}
                       initial="jsInitial" animate="jsAnimate"
                      className={styles.roundedImage}
                      id={styles.jsImage}/>
                      <motion.img src="/static/cs.png" 
                         variants={imagesVariants}
                         initial="csInitial" animate="csAnimate"
                         className={styles.roundedImage}
                         id={styles.csImage}/>
                  </motion.div>  
              </motion.div>
             
              <motion.span 
                variants={spanVariants} animate="radius"
                initial={animate ?"first" :"beforeFirst"} style={{top:"3rem",width:"10rem"}}
              className={styles.divaiy}>

              </motion.span>
              <motion.span 
                variants={spanVariants} animate="radius"
                initial={animate ?"first" :"beforeFirst"} style={{top:"5rem",width:"10rem"}}
              className={styles.divaiy}>

              </motion.span>
              <motion.span 
                variants={spanVariants} animate="radius"
                initial={animate ?"first" :"beforeFirst"} style={{top:"7rem",width:"10rem"}}
              className={styles.divaiy}>

              </motion.span>
              
              
       
              
        </div>
   
   )
}
export default Me;