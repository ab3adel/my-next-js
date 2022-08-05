
import {motion,Variants,useAnimation} from 'framer-motion'
import React, { useEffect, useState } from 'react'

import styles from '../../styles/portfolio.module.scss'
interface iProps {
            setInspectorOptions:Function,id:number,
            images:string[],inView:boolean,video:string
                 }
const treeVariants:Variants ={
    treeGrow:{
       scaleY:[0,1],
        transition:{
            duration:3,
            ease:'linear',
            delay:1.3
        }
    },
    shakeFruit : {
        rotateZ:['0deg','15deg','-10deg','5deg','-1deg','0deg'],
        transition:{
            duration:1.5,
            ease:'linear'
        }
    },
    sunRise:{
        opacity:[0,1],
        y:[30,0],
        transition:{
            duration:3,
            opacity:{
                delay:0.5
            },
            ease:'backInOut'
        }
    },
    sunDawn:{
        opacity:[1,0],
        y:[0,30],
        transition:{
            duration:3,
            opacity:{
                delay:0.5
            },
            ease:'backInOut'
        }
    },
    moonRise:{
        opacity:[0,1],
        y:[30,0],
        transition:{
            duration:3,
            opacity:{
                delay:0.5
            },
            ease:'backInOut'
        }
    },
    moonDown:{
        opacity:[1,0],
        y:[0,30],
        transition:{
            duration:3,
            opacity:{
                delay:1
            },
            ease:'backInOut'
        }
    },
    day:{
        filter:['brightness(0.5)','brightness(1)'],
        transition:{
            duration:2,
            ease:'backIn'
        }

    },
    night:{
        filter:['brightness(1)','brightness(0.5)'],
        transition:{
            duration:2,
            ease:'backIn'
        }
    },
    starGlowing :(custom)=>( {
        opacity:[0,0.4,0.5,1],
        filter:['brightness(1)','brightness(0.5)'],
        transition:{
            ease:'backInOut',
            duration:2 ,
            delay:custom.i *0.1,
            filter:{
                repeat:Infinity
            }
        }
    }),
    starOff : {
        opacity:[1,0],
        filter:'none',
        transition:{
            ease:'backInOut',
            duration:2 ,
        }
    }
  
    
}
let arr = new Array(10).fill({top:((Math.random())*50).toFixed(1)
                             ,left:((Math.random())*100).toFixed(1)})
for (let i =0;i<11;i++) {
    arr[i]= 
        {top:((Math.random())*50).toFixed(1)
        ,left:((Math.random())*100).toFixed(1)}
        
}

  const Tree = (props:iProps) =>{
    let {setInspectorOptions,id,images,inView,video}= props
    const [isLoaded,setLoaded]=useState(false)
    const [position,setPosition]=useState([
        { top:'',left:''}
    ]
    )
    const controlFruits=useAnimation()
    const controlSun=useAnimation()
    const controlMoon=useAnimation()
    const controlBrighness =useAnimation()
    const controlStar =useAnimation()
    useEffect(()=>{
        if (window.innerWidth > 500) {
            let newPositions= [
               
                        
        {left:'44%',top:'50%'},
        {left:'46%',top:'40%'},
        {left:'55%',top:'48%'},
        {left:'35%',top:'62%'},
        {left:'53%',top:'62%'},
        {left:'64%',top:'58%'}
            ]
            setPosition(newPositions)
        }
      else {
    let newPositions= [
        {left:'36%',top:'50%'},
        {left:'41%',top:'40%'},
        {left:'61%',top:'48%'},
        {left:'15%',top:'62%'},
        {left:'54%',top:'62%'},
        {left:'80%',top:'58%'}
      
    ]
    setPosition(newPositions)

      }  
    },[])
    const sunRise =()=>{
        controlSun.start('sunRise')
        controlMoon.start('moonDown')
        controlBrighness.start('day')
        controlStar.start('starOff')
  
      
    }
    const sunDawn = ()=>{
        controlSun.start('sunDawn')
        controlMoon.start('moonRise')
        controlBrighness.start('night')
        controlStar.start('starGlowing')
    }
    const shakeAll=()=>{
        controlFruits.start('shakeFruit')
        
    }
  
    const handleSelectedImage=(num:number)=>{
        setInspectorOptions(pre=>({...pre,selectedImage:num,open:true,id}))
    }
    useEffect(()=>{
        if (inView) {
            sunRise()
            shakeAll()
        }
        else {
            sunDawn()
            shakeAll()
        }
    },[inView])
 
    return (
        <motion.div className={styles.imgContainer}
          style={{
           }}
          id="tree"
          variants={treeVariants}
          whileInView={'treeGrow'}
          animate={controlBrighness}
          viewport={{once:true}}
          
          >
           
            <motion.img src={'static/tree.png'} className={styles.treeImage} />
           <motion.div 
            className={styles.sun}
            variants={treeVariants}
            animate={controlSun}>
            
           </motion.div>
           <motion.div 
            className={styles.moon}
            variants={treeVariants}
            animate={controlMoon}>
            
           </motion.div>
           {

            arr.map((ele,index)=>{
                return (
                    <motion.div
                    key={index}
                    className={styles.star}
                    variants={treeVariants}
                    animate={controlStar}
                    custom={{i:index}}
                    style={{top:`${ele.top}%`,left:`${ele.left}%`}}
                   
                    >
                    </motion.div>
                )
            })
           }
           
           {
            images && images.length >0 ? 
            images.map((ele,index)=>{
                if (index ===6 ) return
                return (
                   
                        <motion.div className={styles.projectImg} 
                                style={{...position[index]
                                    ,backgroundImage:inView?`url(${ele?ele:null})`:'none'
                                }}
                                variants={treeVariants}
                                whileHover={'shakeFruit'}
                                animate={controlFruits}
                                onClick={()=>handleSelectedImage(index)}
                                key={index}
                                id={`img${index}`}
                                >
                        </motion.div>
                        
          
                )
            }):
            null
           }
          
        
           <motion.div className={styles.projectImg} 
           style={{left:'65%',top:'50%'}}
           variants={treeVariants}
              whileHover={'shakeFruit'}>

           </motion.div>
        </motion.div>
    )
}
export default Tree;