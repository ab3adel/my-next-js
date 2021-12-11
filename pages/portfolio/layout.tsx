import  {NextPage} from 'next/types'
import React, { useEffect } from 'react'
import styles from '../../styles/layout.module.css'
import 
 {
     Box
 } from '@mui/material'
 import Container from './container'
 import {sources} from '../../public/sources'
 interface idata{id:number,title:string,projectAbout:string
   ,images:string[],video:string}
export default function Layout (){
 

return (
   <Box className={styles.mainContainer}>
      {sources.map((ele:idata)=>{
       
        return(<Container key={ele.id}
         id={ele.id}
         title={ele.title}
         projectAbout={ele.projectAbout}
        image1={ele.images[0]}
        image2={ele.images[1]}
        image3={ele.images[2]}/>)
     
      })}
      
   </Box>
)
}
