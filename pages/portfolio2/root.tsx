import {motion,Variants,useAnimation, MotionConfig} from 'framer-motion'
import {Grid} from '@mui/material'
import styles from '../../styles/portfolio.module.scss'
import { useEffect, useState } from 'react'
import {Info }from './info'
interface iTech {name:string,imgSrc:string}
interface iProps {techs:iTech [],about:string
                 ,gitHub:string,inView:boolean,video:string
                ,Role:string}
const rootGrow:Variants= {
    rootGrow :{
      height:['0px','300px'],
        transition:{
            delay:1.3,
            ease:'linear',
            duration:1.3
        }
    },
    nodeGrow :{
        scaleX:[0,1],
        transition:{
            delay:1.5,
            ease:'linear',
            duration:1.5
        }
    },
    nodeHovered:{
        rotate:['0deg','360deg'],
        transition:{
            ease:'anticipate',
            duration:2
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
    }
}

 export const Root =({techs,about,gitHub,inView,video,Role}:iProps) =>{
    const [hoveredName,setHoveredName]=useState('')
    const controlRoot=useAnimation()

   useEffect(()=>{
    if(inView) {
        controlRoot.start('day')
    }
    else {
        controlRoot.start('night')
    }
   },[inView])
    const hovered= (str:string)=>{
        setHoveredName(str)
    }

    return (

        <motion.div className={styles.root}
            variants={rootGrow}
            animate={controlRoot}
            >
              <motion.img className={styles.rootImage}
                        variants={rootGrow}
                        whileInView={'rootGrow'}
                        viewport={{once:true}}
                        src={'/static/root.png'}
                      
                        />
            <Grid container height={'100%'}
              >
                
                <Info about={about} 
                     techs={techs}  
                     gitHub={gitHub}
                     video={video}
                     Role={Role}/>
            </Grid>
        </motion.div>
    )
}
