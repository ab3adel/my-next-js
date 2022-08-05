import Grid from '@mui/material/Grid'
import styles from '../../styles/portfolio.module.scss'
import Project from './project'
import {sources} from '../../public/sources'
import { useEffect, useState } from 'react'
import Inspector from './inspector'

let arr=new Array(8).fill(null)

 const Container =() =>{
    const [inspectorOptions,setInspectorOptions]=useState({open:false
                                                           ,selectedImage:-1
                                                           ,id:-1
                                                        ,specImages:['']})
                                                       
    const setOpen=()=>{
        setInspectorOptions(pre=>({...pre,open:false}))
    }
    const changeSelectedImage=(num:number)=>{
        setInspectorOptions(pre=>({...pre,selectedImage:num}))
    }
    useEffect(()=>{
        if (inspectorOptions.id !== -1){

            let obj= sources.filter(ele=>ele.id === inspectorOptions.id )
            setInspectorOptions(pre=>({...pre,specImages:obj[0].images}))
        }
    },[inspectorOptions.id])   
                                          
    return (

        <Grid container className={styles.projectMainContainer}
        padding={3}
        >
            {
                sources && sources.length>0 ?
                sources.map((ele,index)=>{
                    return (
                    <Project 
                     key={index}
                     images={ele.images} 
                     id={ele.id}
                     setInspectorOptions={setInspectorOptions}
                     techs={ele.techs}
                     about={ele.projectAbout}
                     gitHub={ele.gitHub}
                     video={ele.video}
                     Role={ele.Role}
                     
                    />
                    )
                })
                : null
            }
            <Inspector open={inspectorOptions.open}
                        setOpen={setOpen}
                        selectedImage={inspectorOptions.selectedImage}
                        imgs={inspectorOptions.specImages} 
                        selectImage={changeSelectedImage}/>
           
        </Grid>
    )
}
export default Container;