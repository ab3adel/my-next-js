import style from '../styles/index.module.css'

import 
{
  Grid,
  Box
} 
from '@mui/material'
import { useState } from 'react'
import Container from './portfolio2/container'
import TabPanel from './tools/tabs/tabPanel'
import 
{
  ShowChart,
  Person
} 
from '@material-ui/icons'
import {motion,useAnimation} from 'framer-motion'
import AboutMe from './aboutMe/aboutMe'
import WaitPage from './tools/waitPage/waitPage'

import me from '../public/static/me1.png'
import image1 from '../public/static/tree.png'
import image2 from '../public/static/root.png'
import image3 from '../public/static/sun.png'
import image4 from '../public/static/moon.png'
import image5 from '../public/static/soil.png'
import image6 from '../public/static/net.svg'
import { ClassNames } from '@emotion/react'
let arr =[me,image1,image2,image3,image4,image5,image6]
 const  HomePage =()=> {
 const [open,setOpen]=useState(true)
 const [value,setValue]=useState(0)  
 const [loaded,setLoaded]=useState(true)
 const controlTab =useAnimation()
 const handleChange = ( newValue:number) => {
  // let tabs= document.querySelectorAll('#tab')  as NodeListOf<HTMLDivElement>
  //  tabs.forEach(ele=>ele.classList.remove('selectedTab'))
  //  tabs[newValue].classList.add('selectedTab')
 
  setValue(newValue);

};
console.log(loaded)
if (loaded) {
  return (
    <WaitPage imgs={arr} 
            len={7}
            open={loaded}
            setOpen={setLoaded}/>      
  )
}
    return (
  
      <Grid container
      padding={1} 
      rowGap={4}>
          <Grid item container xs= {12}>
            <Box 
         
             sx={{
              width:'100%',
              color:'white',
              justifyContent:'space-evenly',
              display:'flex'
               
              }}>
              
                
              <Grid item container xs={10}
               sx={{color:'white'}}
               justifyContent="center">
                <Grid item xs={6}     onClick={()=>handleChange(0)}
                display="flex"
                justifyContent={"center"}>
                  <motion.div 
                   id='tab'
                    className={value ===0 ? `${style.tab} ${style.selectedTab}`:style.tab}
                  >
                    <ShowChart
                    style={{color:value ===0?'rgb(63, 226, 63)':'inherit'}}
                     />
                    Portfolio
                  </motion.div>
                </Grid>
                <Grid item xs={6}  
                onClick={()=>handleChange(1)}
                display="flex"
                justifyContent={"center"}
                >
                  <motion.div
                        id='tab'
                      className={ value ===1 ? `${style.tab} ${style.selectedTab}`:style.tab}>
                    <Person className={'icon'}
                     style={{color:value ===1?'rgb(63, 226, 63)':'inherit'}}/>
                    About Me
                  </motion.div>
                </Grid>

              </Grid>
            </Box>
          </Grid>
          <Grid item container xs={12}
         >
            <TabPanel index={0} value={value}>

              <Container />
            </TabPanel>
            <TabPanel index={1} value={value}>
              <AboutMe />
            </TabPanel>
          </Grid>
      </Grid>
 
    )
}

export default HomePage;