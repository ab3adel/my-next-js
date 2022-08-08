
import Toolbar from '@mui/material/Toolbar'
import Icon from '@mui/material/Icon'

import {Person,Star,GitHub,LinkedIn} from '@mui/icons-material'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/header.module.scss'
import Grid from '@mui/material/Grid'
interface iProps {setOpenRate:Function,canVote:boolean
                  ,setOpenLogIn:Function,visitor:{user:boolean,admin:boolean}}
const Header =({setOpenRate,canVote,setOpenLogIn,visitor}:iProps)=>{
   const handleRate=()=>{
      if (!canVote) {
         return
      }
      else{
         setOpenRate(true)
      }
   }
 
    return (

          <Toolbar sx={{padding:'0px'}}>
         <Grid container>
            <Grid item container xs={12} sm={6}
            padding={1}
            paddingLeft={0}
            paddingRight={0}
            >

               <Grid item xs={4}>

                        <Link href="/">
                           <a style={{boxShadow:"0px 0px 0px transparent"}}
                           className={styles.link}>
                              <Image src="/static/logo.png"
                                 className="logo"
                                 alt="B3D"
                              
                                width={50}
                                height={50}
                                 /> 
                              </a>
                        </Link>
               </Grid>
               <Grid item xs={4}>

                        <a onClick={()=>handleRate()}
                        className={canVote?
                           styles.rateMe
                           :''
                        }
                        
                        >
                              Rate Me
                              <Icon >
                                 <Star/>
                              </Icon>
                        </a>
               </Grid>
               <Grid item xs={4} >

               {
                  visitor&&visitor.user?
                  <a>
                     Welcome
                     <Icon >
                        <Person/>
                  </Icon>
                  </a>:
                  <a onClick={()=>setOpenLogIn(true)}
               className={styles.link}>
                  Log In
                  <Icon >
                        <Person/>
                  </Icon>
               </a>
               }
               </Grid>
            </Grid>
            <Grid item container xs ={12} sm={6}
            justifyContent="center"
            padding={1}
            paddingLeft={0}
            paddingRight={0}>

               <Grid item xs={4}>

                        <a href ="https://www.linkedin.com/in/mohammad-ismaeel-755ba4199/"
                        className={styles.link} >
                              LinkedIn
                              <Icon color="inherit" >
                                 <LinkedIn/>
                              </Icon>
                        </a>
               </Grid>
               <Grid item xs={4}>
                        <a href="https://github.com/ab3adel"
                        className={styles.link}>
                              GitHub
                              <Icon >
                                 <GitHub/>
                              </Icon>
                        </a>
                  </Grid>      
                     
            </Grid>
            </Grid>

          </Toolbar>
    )
}
export default Header;
