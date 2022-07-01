import {Grid ,Tabs,Tab,Divider, Typography} from '@mui/material'

import styles from '../../styles/portfolio.module.scss'

import { useState } from 'react'
import {GitHub, Headset,Subject} from '@material-ui/icons'
interface iTech {name:string,imgSrc:string}
interface iProps {
    about:string,techs:iTech []
    ,gitHub:string,video:string,
    Role:string
}
export const Info =({about,techs,gitHub,Role}:iProps) =>{
    const [value, setValue] = useState(0);

    return (
        <Grid item container xs={12} 
                  className={styles.projectInfo}
                  padding={2}
                  rowGap={1}>
                    
                    <Grid item container   xs={12} 
                                    className={styles.rolePosition}>
                                        
                                            <Grid item xs={12} className={styles.title}>
                                                <Typography>
                                                   Role Position
                                                </Typography>
                                           
                                            </Grid>
                                            <Grid item xs={12} className={styles.body}>
                                                <Typography>
                                                 {Role}
                                                </Typography>
                                       
                                            </Grid>
                                        
                                            <Divider variant='middle'
                                            sx={{
                                                backgroundColor:'white',
                                                justifySelf:'center'}}/>
                        
                        
                    </Grid>
                    <Grid item container   xs={12} 
                                    className={styles.rolePosition}>
                                        
                                            <Grid item xs={12} className={styles.title}>
                                            Used Techs
                                            </Grid>
                                            <Grid item xs={12} className={styles.body}>
                                              {
                                                techs.map((ele:iTech,index:number)=>{
                                                    return (
                                                        <Typography
                                                        key={index}
                                                         sx={{
                                                            display:'flex',
                                                           
                                                         }}>
                                                            <img src={ele.imgSrc} />
                                                            <span>{ele.name}</span>
                                                        </Typography>
                                                    )
                                                })
                                              }
                                      
                                            </Grid>
                                            <Grid item xs={12}>

                                                <Divider variant='middle'
                                                sx={{
                                                    backgroundColor:'white',
                                                    justifySelf:'center'}}/>
                                            </Grid>
                        
                        
                    </Grid>
                    <Grid item xs={12} className={`${styles.rolePosition} ${styles.buttonSurface}`}>
                        <Grid item xs={12} className={styles.title}>
                          Source Code
                        </Grid>
                        <Grid item xs={12} className={styles.body}
                         style={{cursor:'pointer'}}
                         onClick={()=>window.open(gitHub)}
                         display={'flex'}>
                            <img src={'/static/github.png'} 
                           />
                             GitHub Link
                        </Grid>
                        <Grid item xs={12}>

                            <Divider variant='middle'
                            sx={{
                                backgroundColor:'white',
                                justifySelf:'center'}}/>
                        </Grid>
                    </Grid>
                    <Grid item xs ={12}
                                    className={styles.about}
                                >
                                    <Grid item xs={12} className={styles.title}>
                                       Description
                                    </Grid>
                                    <Grid item xs={12} className={styles.body}>
                                        {about}
                                    </Grid>
                                </Grid>
                    
                 
                  
                    
                  </Grid>
    )
}