
import {Toolbar, Icon
} from "@mui/material"
import  
{LinkedIn
   ,GitHub
,Telegram
} 
from
'@material-ui/icons'
import Link from 'next/link'
import Image from 'next/image'
const Header =()=>{
    return (

          <Toolbar sx={
          {
             width:"100%",
             display:"flex",
             justifyContent:"space-between"
          }
        } >
                  <Link href="/">
                     <a style={{boxShadow:"0px 0px 0px transparent"}}>
                        <Image src="/static/logo.png"
                           className="logo"
                           alt="B3D"
                           width={30} height={30}/> 
                        </a>
                  </Link>
               
                  <a href ="https://www.linkedin.com/in/mohammad-ismael-755ba4199/" >
                        LinkedIn
                        <Icon color="inherit" >
                           <LinkedIn/>
                        </Icon>
                  </a>
                  <a href="https://github.com/ab3adel">
                        GitHub
                        <Icon >
                           <GitHub/>
                        </Icon>
                  </a>
                  <a href="https://t.me/Mohammadismaeeltelegram">
                        Telegram
                        <Icon >
                           <Telegram/>
                        </Icon>
                  </a>
          </Toolbar>
    )
}
export default Header;
