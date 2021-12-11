import 
{
    Grid  ,
    IconButton,
    Button,
    Typography
 }
from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/details.module.css'
import React, { useEffect,useState } from 'react'
import {useRouter } from 'next/router'
import {sources} from '../sources'
import {ArrowRight,ArrowLeft,GitHub} from '@material-ui/icons'
import MyDialog from './dialog'

const Details = ()=>{
const router = useRouter()
const [aim,setAim] =useState(null)
const [open,setOpen] =useState(false)
const [noArrow,setNoArrow] =useState(true)
const [src,setSrc]= useState(null)
const [minMax,setMinMax]= useState({min:0,max:3})
useEffect(()=>{

  let strId =  router.asPath.split('=')[1]
  let theAim = sources.find(ele=>ele.id=== parseInt(strId))

  setAim(theAim)
  if (window.innerWidth >899) {
      setMinMax(pre=>({...pre,max:4}))
  }
 if (aim && aim.video === "undefined"){
     setMinMax ({min:0,max:7})
     setNoArrow(false)
 }

},[aim,router.asPath])
const handelImage=(e:React.MouseEvent)=>{
       let image = e.currentTarget as HTMLImageElement
    setSrc(image.src)
    setOpen(true)
    

}
const handleShowMore=()=>{
   if (minMax.max <6) {
       setMinMax(pre=> ({min:pre.min +3,max:pre.max +3}))
   }
   else if (minMax.max=== 6) {
       setMinMax(pre=>({min:6,max:7}))
   }
   else  {
       setMinMax(pre=>({min:0,max:3}))
   }
}
if (!aim) return (<h1>please wait</h1>)
    return (
        <div id="father"> 
        <Grid  
            
              sx={ 
              {
            width:"100vw",
            height:"fit-content",
            position:"relative",
            margin:"1rem" ,
            flexWrap:"nowrap",
      
        }


    }
         container  direction="column">
              <Grid item sx={
                  aim.video !== "undefined"?
                 {
                  display:"flex",
                  flexDirection:"row",
                  margin:"1rem",
                  justifyContent:'center',
                  flexWrap:"wrap",
              
                
              }:{
                display:"flex",
                flexDirection:"row",
                margin:"1rem",
                justifyContent:'center',
                alignItems:"center",
                flexWrap:"wrap",
                width:"96%",
                overflow:"hidden",
                height:"100vh",
                padding:"1rem"
                
               
              }
            }>
               { aim.images.map((ele:string,index:number)=>{
                   if (index <minMax.max && index>=minMax.min){
                   return(<img src={ele} key={index}
                                alt="image"
                          className={styles.normImage}
                           style={aim.video === "undefined"?
                            {width:"30%"}:null}
                         onClick={(e)=>  handelImage(e)} 
                        />)
                   }
               })}
               <div style={{fontSize:"medium",overflow:'hidden'}}>
               { noArrow &&<Button 
                   
                     onClick={()=>handleShowMore()}>
                        {minMax.max >6 ? "goBack":'ShowMore'}
                     <IconButton sx={{fontSize:"3rem"}}>
                          { minMax.max >6? <ArrowLeft color="primary" fontSize='inherit'/>
                             :<ArrowRight color="primary" fontSize="inherit"/>}
                        </IconButton>
                   </Button>}
                   
               </div>
              </Grid>
             {aim.video !== "undefined" ? <Grid item sx={{
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center",
                  margin:"1rem",
                 

              }} >
                <iframe className={styles.iframe}
                    src={aim.video} 
                    title="YouTube video player" 
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
              </Grid>:""}
              {aim.gitHub !== "undefined" ?<Grid item  sx={{
                  margin:"1rem",
                  flexWrap:"nowrap",
                  flexDirection:"column",
                  display:"flex",
                  height:"fit-content"
                  
              }}>
                  <Typography sx={{
                      fontSize:2,
                      color:"whitesmoke",
                      display:'flex',
                      flexDirection:"column",
                      alignItems:"center"
                  }}>
                      check project's code in Github  :
                      <Link href={aim.gitHub}>
                         <a className={styles.link}>
                           <Image src="/static/github.png"
                                  width={50}
                                  alt="image"
                                  height={50}/>
                        </a> 
                      </Link>
                  </Typography>
              </Grid>:""}
            </Grid>
            <MyDialog open={open}  
                         setOpen={setOpen}
                          src={src}/>
                                
                  
        </div>
    )
}
export default Details;
