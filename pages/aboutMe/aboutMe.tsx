import 
{
    Divider,
    Grid, Typography,

} 
from '@mui/material'
import { motion, Variants ,useAnimation} from 'framer-motion'
import styles from './aboutMe.module.scss'

const imageVariant:Variants = {
    animate : {
        opacity:[0,0.3,0.5,0.6,0.7,1],
        transition:{
            duraiton:3,
            ease:'backInOut'
        }
    },
    me:{
        opacity:[0,1],
        transition:{
            duraiton:3,
            ease:'backInOut',
            delay:1.5
        }
    },
    intro: (custom)=>{
    let theX :any=0
    let theY: any=0
   if( custom.i % 2 === 0){
    theX=0
    theY=[100 * (-1)^custom.i,0]
   } 
  else {
    theX=[100 * (-1)^custom.i,0] 
    theY=0
  }
  
      return ( {
                y:theY,
                x:theX,
                opacity:[0,0.7,0.7,0.7,0],
                transition:{
                    ease:'anticipate',
                    duration:2,
                    delay:0.1 * custom.i,
                    opacity:{
                        duration:2.6 - (0.1 * custom.i)
                    }
    
                }
            })
    }
    
}
let positions = [
    {position:'10%'},
    {position:'30%'},
    {position:'50%'},
    {position:'70%'},
    {position:'90%'},
]
export const AboutMe =() =>{


    return (
        <div className={styles.aboutMe}>
            <Grid container>
                <Grid item container
                padding={2}
                
                >
                    <Grid item container xs= {12}
                    justifyContent="center">
                        <Grid item xs ={6}>
                        <motion.img 
                                src='/static/B3d.png' 
                                variants={imageVariant}
                                whileInView="animate"
                                />
                        </Grid>
                    </Grid>
                    <Grid item  container xs ={12}
                    minHeight="100vh"
                    className={styles.cardBorder}
                    >
                         <Grid item container xs ={12}
                          sm={4} md={4}
                           className={styles.myImage} >
                            <Grid item xs={12}
                             sm={6} md={6}
                              >
                                <motion.img 
                                src='/static/me1.png' 
                                variants={imageVariant}
                                whileInView="me"
                              
                                />
                                <motion.div 
                                  className={styles.meAnimation}>
                                   
                                     {
                                        positions.map((ele,index)=>{
                                            return (
                                            <motion.div
                                            key={index} 
                                            className={styles.part}
                                            style={{backgroundPositionX:ele.position}}
                                            custom={{i:index}}
                                            variants={imageVariant}
                                            
                                            whileInView={'intro'}>
                                               
                                            </motion.div>
                                            )
                                        })
                                     }
                                  
                                  </motion.div>
                            </Grid>

                        </Grid>
                        <Grid item container xs={12}
                            sm={8} md={8}
                          className={styles.info}>

                            <Grid item 
                            container 
                            xs={12}
                            justifyContent="center"
                            padding={2}
                            className={styles.cover}
                            >
                                <Grid item xs={10}
                                    className={styles.partContainer}
                                    >
                                    <motion.div
                                    className={styles.part}>
                                        <Grid item container xs={12}>
                                           <p className={styles.title}>
                                              I am :
                                           </p>
                                           <Grid item xs ={12}
                                             padding={1}
                                             sx={{fontSize:{xs:'0.7em',sm:'1.4em',md:'1.4em'}}}>
                                             Mohammad Ismaeel
                                             <br/>
                                              Communications Engineer
                                             <br />
                                               developer with 7 years experience 
                                           </Grid>

                                        </Grid>
                                   
                                    </motion.div>
                                </Grid>
                             
                                <Grid item container xs={10}
                                    className={styles.partContainer}>
                                    <motion.div
                                    className={styles.part}>
                                        
                                       <p className={styles.title}>
                                          My experience : 
                                       </p>
                                        <Grid item container xs ={12}
                                        padding={1}
                                        sx={{fontSize:{xs:'0.7em',sm:'1.4em',md:'1.4em'}}}>
                                            <span>Python:</span> Django/web development - Qt/GUI 
                                            <br/>
                                            <span>C#:</span>  WPF /desktop development + ASP.Net /web development
                                            <br/>
                                            <span>JavaScript/TypeScript:</span>React + Node + Angular /web development 

                                        </Grid>

                                           
                                           
                                    </motion.div>
                                </Grid>
                             
                            </Grid>
                            <Grid item container xs ={0} sm={12} md={12} >
                                <Divider orientation="vertical" />
                            </Grid>
                           
                        </Grid>
                       
                    </Grid>
                </Grid>

            </Grid>
        </div>
    )
}