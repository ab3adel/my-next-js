
import {Toolbar, Icon
} from "@mui/material"
import  
{LinkedIn
   ,GitHub
,Star
} 
from
'@material-ui/icons'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/header.module.scss'
interface iProps {setOpenRate:Function}
const Header =({setOpenRate}:iProps)=>{
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
                  <a onClick={()=>setOpenRate(true)}
                    className={styles.rateMe}
                    >
                        Rate Me
                        <Icon >
                           <Star/>
                        </Icon>
                  </a>
          </Toolbar>
    )
}
export default Header;
