import { AppProps } from "next/app"
import '../styles/global.css'
import React, {useState,createContext} from 'react'

import 
{
Toolbar,
Box
}
from '@mui/material'
import Header from './header'
export const animateContext= createContext(null)
 const  App =  ({Component,pageProps}:AppProps) =>{
 
const [animate,setAnimate]=useState({index:0,container:0})
  return (
    <div id="root" >
     <Box  sx={{
        gridColumn:"1/4",
        gridRow:"1/1",
     }} >
       <Header />
        
      </Box>
      
       <div style={{gridRow:"2/2",gridColumn:"1/4"}}>
        <animateContext.Provider value={{animate,setAnimate}}>
          <Component {...pageProps}/>
          </animateContext.Provider>
      </div>
               


    </div>
            
  )
    
}
export default App;
