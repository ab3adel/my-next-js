

import {  useEffect, useState } from 'react';




interface iProps {
     imgSrc:string
    ,imgClass:string
    ,setLoaded:Function
    ,style:any
 }
const LoadingImage= (props:iProps)=>{
const [isLoaded,setLoaded]=useState(false)
   const handleLoading=()=>{

      props.setLoaded(true)
   }
useEffect(()=>{
let img =new Image ()
img.src=props.imgSrc
img.addEventListener('load',handleLoading)
},[])
    return (
      <div
      className={ props.imgClass}
      style={{...props.style}}
      >

          <img 
          src="/static/It.jpg"
          style={{width:'100%',height:'100%',filter:'blur(0.5)'}}

          />
     <img 
       style={{visibility:'hidden',width:'1px',display:'block'}}
       src={props.imgSrc} 
       alt={'alt'}
       onLoadCapture={handleLoading}
       id={"image"}/>
      </div>

    )
}
export default LoadingImage;