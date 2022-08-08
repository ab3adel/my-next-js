import { AppProps } from "next/app"
import '../styles/global.css'
import React, {useState,createContext} from 'react'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Header from './header'
import {CookiesProvider} from 'react-cookie'

export const animateContext= createContext(null)
 const  App =  ({Component,pageProps}:AppProps) =>{

const [openRate,setOpenRate]=useState(false)
const [canVote,setCanVote]=useState(true)
const [openLogIn,setOpenLogIn]=useState(false)
const [visitor,setVisitor]=useState({admin:false,user:false})
  return (
    <div id="root">

            <Grid container 
            rowGap={1}>
                  <Grid item xs={12}>

                    <Header 
                    setOpenRate={setOpenRate}
                    canVote={canVote}
                    setOpenLogIn={setOpenLogIn}
                    visitor={visitor}/>
                  </Grid>
                  <Grid item xs={12}>
                     <Divider variant="middle" 
                     className="divider"/>
                  </Grid>
                  <Grid item xs={12}>

                    <animateContext.Provider value={{openRate,setOpenRate
                                                    ,setCanVote,openLogIn
                                                    ,setOpenLogIn,visitor
                                                    ,setVisitor,canVote}}>
                      <CookiesProvider>

                        <Component {...pageProps}/>
                      </CookiesProvider>
                    </animateContext.Provider>
                  </Grid>
              
                
            </Grid>
    </div>


  
            
  )
    
}
export default App;
