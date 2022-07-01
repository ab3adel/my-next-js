import { Grid } from "@mui/material"
import Tree from './tree'
import Root from './root'
import styles from '../../styles/portfolio.module.scss'
import React, { useState } from "react"
import {useInView} from 'react-intersection-observer'
interface iTech {name:string,imgSrc:string}
interface iProps {images:string []
                    ,id:number
                    ,setInspectorOptions:Function
                ,techs:iTech []
            ,about:string
            ,gitHub:string
            ,video:string,
            Role:string
        }


 const Project =(props:iProps) =>{
    const {inView,ref} =useInView({threshold:1.0})
    
   
    return (
      
                <Grid item container 
                    xs={12} sm={4} md={3} lg={3}
                    className={styles.project}
                    padding={1}>
                    
             
                <Grid item  xs={12}
                >
              

                    <Tree {...props} inView={inView}
                     />
                    <div className={styles.inViewDiv} ref={ref} />
                </Grid>
                <Grid item xs={12}
                >
                    <Root techs={props.techs} 
                            about={props.about}
                            gitHub={props.gitHub}
                            inView={inView}
                            video={props.video}
                            Role ={props.Role}
                            />
                </Grid>
            </Grid>
     
   
    )
}
export default Project;