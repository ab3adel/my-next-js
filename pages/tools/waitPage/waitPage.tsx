import styles from './waitPage.module.scss'


import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'

import Grid from '@mui/material/Grid'

import { motion,Variants } from 'framer-motion'
import { useEffect, useState } from 'react'


interface iProps {
    imgs:string [],len:number,
    open:boolean,setOpen:Function
}
const waitVariant:Variants = {
    animate :{
        opacity:[0,1],
        transition:{
            duration:2,
            ease:'backInOut'
        }
    },
    moreTime :{
        letterSpacing:['1px','10px'],
        opacity:[0,1],
        transition:{
            ease:'linear',
            duration:6,
            repeat:Infinity,
            repeatType:'loop',
            opacity:{
                duration:6,
                delay:1.5
            }
        }
    },
    hide :(custom)=>
     ({
        opacity:[0,1],
        transition:{
            duration:10,
            delay:0.5 * custom.i,
            repeat:Infinity,
            repeatType:'mirror'
        }
    })

}

const WaitPage= ({imgs,len,open,setOpen}:iProps) =>{
  
  

    const handleImageLoading=(index:number)=>{
    
        if (len >0) {
            if (index === len-1){
                setTimeout(()=>setOpen(false),2000)
                
            }
        }
    }
useEffect(()=>{

    if (imgs && imgs.length >0) {
        imgs.forEach((ele,index)=>{
            let img = new Image()
            img.src= ele
            img.addEventListener('load',()=>handleImageLoading(index))
        })
    }
},[])



    return (
        <Dialog open={open} className={styles.waitPageContainer}
         sx={{
            '.MuiDialog-container' : {
                alignItems:'stretch',
                background:'white',
                width:'100vw',
                height:'100vh',
                '.MuiPaper-root':{
                    scrollbarWidth:'none',
                    height:'100vh',
                    '& ::-webkit-scrollbar':{
                        display:'none',
                    }
                }
            }
         }}>
            <DialogContent className={styles.waitPage}
            sx={{background:'transparent'}}>
                <Grid container >
                    <Grid item container xs={12}
                     justifyContent="center"
                     padding={4}>
                        <Grid item container xs={5}>
                            
                            <img 
                              style={{
                                     objectFit:'cover'
                                     ,maxHeight:'100%'
                                    ,maxWidth:'100%'}}
                            src={'/static/B3d.png'}
                            />      
                        </Grid>
                        <Grid item container xs={12}
                           className={styles.waitPageText}
                           justifyContent="center"
                           padding={3}>
                        <Grid item xs={12}
                        display="flex"
                        justifyContent={'center'}
                        flexDirection="column"
                        alignItems={"center"}
                        >

                            <motion.div
                            variants={waitVariant}
                            animate={'hide'}
                            custom={{i:1}}>
                             Beautiful things
                            </motion.div>
                            <motion.div 
                              variants={waitVariant}
                              animate={'hide'}
                              custom={{i:2}}>
                                take
                            </motion.div>
                              
                           <motion.div 
                             className={styles.moreTime}
                             variants={waitVariant}
                             animate="hide"
                             custom={{i:10}}>
                               more time 
                            </motion.div>  
                           
                            
                        </Grid>
                        <Grid item xs={12}
                           display="flex"
                           justifyContent={'center'}>
                            <motion.div
                                variants={waitVariant}
                                animate={'hide'}
                                custom={{i:4}}
                                >
                               
                                 just we have to be 
                                 <div className={styles.patient}>
                                 patient
                                </div> 
                                 
                            </motion.div>
                        </Grid>
                    </Grid>
                    </Grid>
                    
                </Grid>
            </DialogContent>
        </Dialog>
    )
}

export default WaitPage;