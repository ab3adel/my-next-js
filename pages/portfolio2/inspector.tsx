import
 {
    Dialog
    ,DialogActions
    ,DialogContent
} 
from '@mui/material'
import 
{
    Close,
    ArrowLeft,
    ArrowRight
} 
from '@material-ui/icons'
import styles from '../../styles/inspector.module.scss'
import { useEffect, useState } from 'react'
import Image from 'next/image'
interface Iprops {open:boolean 
    ,setOpen:Function,selectedImage:number
    ,imgs:string[],selectImage:Function}

 export const Inspector =(props:Iprops)=>{
    let {open,setOpen
          ,imgs,selectedImage,
        selectImage}=props
    let [imgsArr,setImgsArr]=useState([''])
   const handleArrowClicked =(str:string)=>{
    if (str === 'left') {
        if (selectedImage === 0) return
        selectImage(selectedImage -1)
    }
    if (str === 'right') {
        if (selectedImage === 6) return
        selectImage(selectedImage +1)
    }
   }
    return (
        <Dialog open={open} 
                onClose={()=>setOpen()}
                className={styles.inspectorContainer}
                sx={{
                    '& .MuiDialog-container':{
                        width:'100vw',
                        '& .MuiPaper-root':{
                            height:'90vh',
                            width:'100vw',
                            maxWidth:'100vw',
                            overflow:'hidden',
                            background:'rgb(53, 50, 50,0.4)'
                        }
                    }
                }}>
            <DialogContent className={styles.imageContainer}>
                <div className={styles.image}
                    style={{backgroundImage:`url(${imgs[selectedImage]})`}}>
                        <Close className={styles.closeButton}
                          onClick={()=>setOpen(false)} />
                        <ArrowLeft className={styles.leftButton}
                          onClick={()=>handleArrowClicked('left')}/>
                        <ArrowRight className={styles.rightButton} 
                          onClick={()=>handleArrowClicked('right')}/>


                </div>
            </DialogContent>
            <DialogActions
            className={styles.subImagesContainer}
            sx={{maxWidth:'100vw'
                ,display:'flex'
            ,justifyContent:'space-evenly'
            ,alignItems:'center'
            ,width:'100vw',
            justifySelf:'center',
            height:'40px',
            alignSelf:'center',
            '&::-webkit-scrollbar':{
                display:'none'
            },
            '& ::-webkit-scrollbar-thumb':{
                background:'transparent'
            }
            }}>
                <div className={styles.subImages}>
                    {
                        imgs.map((ele,index)=>
                           <div className={selectedImage === index? styles.selected : styles.hide}
                           key={index}>
                              <img 
                                
                                 className={
                                    styles.subImage} 
                               
                                src={ele} alt="wait"
                                onClick={()=>selectImage(index)}
                            
                               
                            />
                            </div>
                        )
                    }
                </div>

            </DialogActions>
        </Dialog>
    )

}
