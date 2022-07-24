import style from '../styles/index.module.css'

import 
{
  Grid,
  Box
} 
from '@mui/material'
import { useEffect, useState ,useContext, ChangeEvent } from 'react'
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
import Caution from './caution'

import {useCookies} from 'react-cookie'
import { rate } from './api/rate'
import {animateContext} from './_app'
import Intro from './intro/intro'
import LogIn from './admin/admin'
interface iField {[key:string]:string}
let arr =['/static/me1.png','/static/tree.png'
         ,'/static/root.png','/static/sun.png',
          '/static/moon.png','/static/soil.png','/static/net.svg']
  
 const  HomePage =(props:any)=> {
 
 const [value,setValue]=useState(0)  
 const [loaded,setLoaded]=useState(true)
 const [open,setOpen]=useState(true)
 
 const [cookie,setCookie,removeCookie] = useCookies(['B3D-cookies','visitor'])

 const [sendStatus,setSendStatus] =useState({loading:false,done:false})
 const [logInStatus,setLogInStatus] =useState({loading:false,done:false})
 const [auth,setAuth]=useState<iField>({user:'',password:''})
 let {openRate,setOpenRate,setCanVote
       ,openLogIn,setOpenLogIn,visitor
      ,setVisitor,canVote} =useContext(animateContext)
 const handleChange = ( newValue:number) => {
  // let tabs= document.querySelectorAll('#tab')  as NodeListOf<HTMLDivElement>
  //  tabs.forEach(ele=>ele.classList.remove('selectedTab'))
  //  tabs[newValue].classList.add('selectedTab')
 
  setValue(newValue);

};
useEffect(()=>{

 
   //removeCookie('B3D-cookies')
    if (cookie['B3D-cookies']) {
      if ((cookie['B3D-cookies'] as string).includes('noVote') && (cookie['B3D-cookies'] as string).includes('user')) {
        setVisitor(pre=>({...pre,user:true}))
        setCanVote(false)
      }
      if (cookie['B3D-cookies']==='noVote') {
        setCanVote(false)
      }
      if (cookie['B3D-cookies']==='user') {
        setVisitor(pre=>({...pre,user:true}))
      }
    
      if (cookie['B3D-cookies'] !== 'user' && cookie['B3D-cookies'] !=='noVote'){
        
        fetch('/api/check',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(cookie['B3D-cookies'])
        })
        .then(res=>res.json())
        .then(res=> {
        
          if (res.admin === 1) {
           setVisitor(pre=>({...pre,admin:true}))
         
          }
          else {
           setVisitor(pre=>({...pre,user:true}))
           setCanVote(false)
         
          }
       
        })
        .catch(err=>{
          console.log(err)
        })
      }
     
      // if (!localStorage.getItem('B3D-Storage')) {
      //   localStorage.setItem('B3D-Storage',cookie['B3D-cookies'])
      //   console.log('set')
      // }
    }
   if (!cookie['visitor']) {
    let date = new Date()
    date.setMonth(date.getMonth()+2)
    fetch('/api/visitor',{
      method:'POST',
      body:JSON.stringify('visitor')
    })
    .then(res=>{
      res.json()
      setCookie('visitor','visitor',{path:'/',expires:date})
    })
    .catch(err=>{
      console.log(err)
    })
   }
     //else {
      //  let date = new Date()
      //  date.setMonth(date.getMonth()+2)
      //  let pass='B3D-Admin-0988289227@912'
      //  fetch('/api/check',{
      //    method:'POST',
      //    headers:{'Content-Type':'application/json'},
      //    body:JSON.stringify(pass)
      //  })
      //  .then(res=>res.json())
      //  .then(res=> {
      //    console.log(res)
      //    if (res && res.hash) {
      //      setCookie('B3D-cookies',res.hash,{path:'/',expires:date})
      //    }
      //  })
      //  .catch(err=>{
      //    console.log(err)
      //  })
      
    
    // }
},[])

if (loaded) {
  return (
    <WaitPage imgs={arr} 
            len={7}
            open={loaded}
            setOpen={setLoaded}/>      
  )
}
const sendVote=async (str:string)=>{
setSendStatus(pre=>({...pre,loading:true,done:false}))
   fetch('/api/rate',{
    method:'POST'
    ,
    headers:{'Content-Type':'application/json'}
    ,
    body:JSON.stringify(str)
    
  })
  .then(res=>{
  
   setSendStatus(pre=>({...pre,loading:false,done:true}))
   let date = new Date()
   date.setMonth(date.getMonth()+2)
   if (visitor.user){

     setCookie('B3D-cookies','user,noVote',{path:'/',expires:date})
   }
   else {
    setCookie('B3D-cookies','noVote',{path:'/',expires:date})
   }
   setCanVote(false)
  }
    )
  .catch(err=>{
    console.log(err)
  })
}
const handleInput =(e:ChangeEvent)=>{

  let input= e.target as HTMLInputElement

  setAuth(pre=>({...pre,[input.name]:input.value}))
}
const logIn= ()=>{
  if (auth['user'] && auth['password']){
    setLogInStatus(pre=>({...pre,loading:true}))
    let date = new Date()
    date.setMonth(date.getMonth()+2)
    fetch('/api/check',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(auth['password'])
        })
        .then(res=>res.json())
        .then(res=> {
          if (res.admin === 1) {
            setLogInStatus(pre=>({...pre,loading:false,done:true}))
            setVisitor(pre=>({...pre,admin:true}))
            setCookie('B3D-cookies',auth['password'],{path:'/',expires:date})
            setAuth(pre=>({...pre,user:'',password:''}))

            setOpenLogIn(false)

           }
           else {
            setVisitor(pre=>({...pre,admin:false,user:true}))
            setLogInStatus(pre=>({...pre,loading:false,done:true}))
            if (canVote){

              setCookie('B3D-cookies','user',{path:'/',expires:date})
            }
            else {
              setCookie('B3D-cookies','user,noVote',{path:'/',expires:date})
            }
            setAuth(pre=>({...pre,user:'',password:''}))
            setOpenLogIn(false)
           } 
        })
        .catch(err=>{
          console.log(err)
        })
  }
}

    return (
  
      <Grid 
      container
      padding={1} 
      rowGap={4}
      >
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
          <Caution open={openRate} setOpen={setOpenRate}
           data={props.data}
           addVote={sendVote}
           isAdmin={visitor.admin}
           loading={sendStatus.loading}
           done={sendStatus.done}
           />
           {
            !(visitor.admin || visitor.user || !canVote)
            &&(
            <Intro
            open={open}
            setOpen={setOpen}
            />)
            }
           <LogIn 
             open={openLogIn}
             setOpen={setOpenLogIn}
             handleInput={handleInput}
             logIn={logIn}
             auth={auth}
             done={logInStatus.done}
             loading={logInStatus.loading}/>
      </Grid>
 
    )
}

export default HomePage; 

export async function getServerSideProps  (context) {
  let data = await rate()

   return {
       props:{
           data,
           test:"test"
       }
   }
}
