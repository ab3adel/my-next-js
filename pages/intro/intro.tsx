import 
{
    Dialog,
    DialogContent,
    DialogActions,
    Button,
    Grid,
    DialogTitle
} 
from '@mui/material'
import styles from '../../styles/intro.module.scss'
import Image from 'next/image'
import intro1 from '../../public/static/intro1.png'
import intro2 from '../../public/static/intro2.png'
import { useEffect, useState } from 'react'
interface iProps {open:boolean,setOpen:Function}
const Intro =({open,setOpen}:iProps) =>{
const [introNumber,setIntro]=useState(1)


const handleNextIntro=()=>{
    if (introNumber===3) return
    setIntro(pre=>pre+1)
}

   let introElement= ( <Image 
    src={intro1} 
    alt={'intro1'}
    priority={true}
    quality={50}
    />)
    if (introNumber===2) {
        introElement=    <Image 
        src={intro2} 
        alt={'intro2'}
       priority={true}
       quality={50}
        />
    }
    if (introNumber===3) {
        introElement = (
            <Grid container rowGap={2} >
                <Grid item xs ={12}
                 sx={{
                    textAlign:'center',
                    fontSize:'1em',
                    fontWeight:'bold'
                 }}>
                    Thank you for your time 
                </Grid>
                <Grid item xs ={12}
                 display={'flex'}
                 justifyContent="center"
                 padding={1}>
                        <Button onClick={()=>setOpen(false)}
                         sx={{
                            background:'green',
                            color:'white'
                            ,':hover':{
                                color:'black'
                            }}}>
                           Got it !
                        </Button>
                </Grid>
            </Grid>
            
        )
             
    
    }
    return (
        <Dialog className={styles.introContainer}
        open={open}>
            <DialogTitle>
                Welcome !!
            </DialogTitle>
            <DialogContent
            sx={{overflow:'hidden'}}>
              {
                introElement
              }
            </DialogContent>
            <DialogActions
            onClick={()=>handleNextIntro()}
            sx={{
                justifyContent:'space-around'
            }}>
                <div 
                className={`${styles.introDots} 
                ${introNumber ===1? styles.introDotsSelected:''}`}
                />
                <div 
                    className={`${styles.introDots} 
                    ${introNumber ===2? styles.introDotsSelected:''}`}/>
                <div 
                    className={`${styles.introDots} 
                    ${introNumber ===3? styles.introDotsSelected:''}`}/>
            </DialogActions>
        </Dialog>
    )
}
export default Intro;