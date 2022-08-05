
import Toolbar from '@mui/material/Toolbar'
import Icon from '@mui/material/Icon'
import LinkedIn from '@material-ui/icons/LinkedIn'
import GitHub from '@material-ui/icons/GitHub'
import Star from '@material-ui/icons/Star'
import Person from '@material-ui/icons/Person'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/header.module.scss'
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

          <Toolbar sx={
          {
             width:"100%",
             display:"flex",
             justifyContent:"space-between"
          }
        } >
                  <Link href="/">
                     <a style={{boxShadow:"0px 0px 0px transparent"}}
                      className={styles.link}>
                        <Image src="/static/logo.png"
                           className="logo"
                           alt="B3D"
                           width={30} height={30}/> 
                        </a>
                  </Link>
               
                  <a href ="https://www.linkedin.com/in/mohammad-ismael-755ba4199/"
                   className={styles.link} >
                        LinkedIn
                        <Icon color="inherit" >
                           <LinkedIn/>
                        </Icon>
                  </a>
                  <a href="https://github.com/ab3adel"
                  className={styles.link}>
                        GitHub
                        <Icon >
                           <GitHub/>
                        </Icon>
                  </a>
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
          </Toolbar>
    )
}
export default Header;
