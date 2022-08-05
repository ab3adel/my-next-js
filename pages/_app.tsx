import { AppProps } from "next/app"
import '../styles/global.css'
import React, {useState,createContext} from 'react'

 
import Box from '@mui/material/Box'
import Header from './header'

import {CookiesProvider} from 'react-cookie'
export const animateContext= createContext(null)


 const  App =  ({Component,pageProps}:AppProps) =>{

const [openRate,setOpenRate]=useState(false)
const [canVote,setCanVote]=useState(true)
const [openLogIn,setOpenLogIn]=useState(false)
const [visitor,setVisitor]=useState({admin:false,user:false})
  return (
    <div id="root" >
  
    <>
     <Box  sx={{
        gridColumn:"1/4",
        gridRow:"1/1",
     }} >
       <Header 
        setOpenRate={setOpenRate}
        canVote={canVote}
        setOpenLogIn={setOpenLogIn}
        visitor={visitor}/>
        
      </Box>
      
       <div style={{gridRow:"2/2",gridColumn:"1/4"}}>
       <animateContext.Provider value={{openRate,setOpenRate
                                       ,setCanVote,openLogIn
                                       ,setOpenLogIn,visitor
                                       ,setVisitor,canVote}}>
          <CookiesProvider>

            <Component {...pageProps}/>
          </CookiesProvider>
        </animateContext.Provider>
          
      </div>
             </>  

    </div>
            
  )
    
}
export default App;
