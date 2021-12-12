import styles from '../../styles/container.module.css';
import {motion,Variants} from 'framer-motion'
import {useRouter} from 'next/router'
import { useEffect ,useState,useContext} from 'react';
import {animateContext} from '../_app'
import { Typography } from '@mui/material';
import PreImage from '../../public/static/ui/ui.png'
import Image from 'next/image'
let imagesVariant:Variants ={
    hiddenCenter:{
        x:"0rem"
    },
    center:{
        
        y:"-5rem",
        transition:{
            duration:2
        }
    },
    hiddenRight:{
        x:"0rem"
    },
    right:{
        x:"3rem",
        y:"-4rem",
        rotate:30,
        transition:{
            duration:2
        }
    },
    hiddenLeft:{
        x:"0rem"
    },
    left:{
        x:"-3rem",
        y:"-4rem",
        rotate:-30,
        transition:{
            duration:2
        }
    }

}
const descriptionVariant:Variants={
    hidden:{
        opacity:0,
        marginTop:"1rem",
        fontSize:"small",
        fontWeight:"lighter"
    },
    visible:{
        opacity:1,
        y:"4rem",
        fontSize:"larger",
        fontWeight:"bolder",
        transition:{
            duration:3,
            ease:"easeOut",

        }
    }
}

const Container =({image1,image2,image3,id,projectAbout,title})=>{
    const [animating,setAnimating] =useState(true)
    const router = useRouter()
    useEffect(()=>{
      if (animating){
          setAnimating(false)
      }
    },[animating])
    return (
        <div className={styles.container}
            >
                <motion.div 
                variants={imagesVariant}
                initial="hiddenLeft" 
                whileInView="left"
                viewport={{once:true}}
                className={styles.image}
                 >
                  <Image width={"100%"} height={"100%"}
                     src={PreImage}/>
                </motion.div>
                <motion.div 
                variants={imagesVariant}
                whileInView="right"
                viewport={{once:true}}
                initial="hiddenRight" 
                className={styles.image}
              >
                     <Image width={"100%"} height={"100%"}
                         src={PreImage}/>
                </motion.div>
                <motion.div 
                variants={imagesVariant}
                viewport={{once:true}}
                initial="hiddenCenter" whileInView="center"
                className={styles.image}
                >
                     <Image width={"100%"} height={"100%"}
                        src={PreImage}/>
                </motion.div>
            <motion.div onClick={()=>router.push('/portfolio/details',{query:{id}})}
            className={styles.box}>

            </motion.div> 
            <motion.div className={styles.description}
                variants={descriptionVariant}
                initial="hidden" whileInView="visible"
                viewport={{once:true}}>
                    <span className={styles.title} >
                        {title}
                    </span> 
                    <Typography 
                    sx={{
                        fontSize:"large",
                        marginTop:"1rem",
                      
                    }}
                     variant="body1">
                       {projectAbout}<br/>
                     </Typography>
                    
                   
            </motion.div>
       </div>
    )
}
export default Container;