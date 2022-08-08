

import {ThumbUp,Update,AddCircle} from '@mui/icons-material'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import DialogTitle from '@mui/material/DialogTitle'
import CircularProgress from '@mui/material/CircularProgress'
import Typography  from '@mui/material/Typography'
import { useEffect } from 'react'
import styles from '../styles/caution.module.css'
interface iProps {
    open
    ,setOpen,data?:any
    ,addVote:Function
    ,isAdmin:boolean
    ,loading:boolean
    ,done:boolean
}

 const Caution =({open,setOpen
                  ,addVote,isAdmin
                  ,data,loading
                ,done}:iProps ) =>{

const handleClick=(str:string)=>{
    addVote(str)
    setOpen(false)
}
useEffect(()=>{
if (done) {
    setOpen(false)
}
},[done])

if (isAdmin) {
    
    return (
        <Dialog open={open} >
            <DialogContent>
                <Grid container
                >
                    <Grid item container 
                         
                         xs={12}>
                        <Grid item xs={6} >
                            <Typography>
                                Love It
                            </Typography>
                            <Typography>
                                {data['lovedIt']}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <Typography>
                                Not Bad
                            </Typography>
                            <Typography>
                                {data['notBad']}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>
                                Need improvements 
                            </Typography>
                            <Typography>
                                {data['improveIt']}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <Typography>
                                Last modifications
                            </Typography>
                            <Typography>
                                {data['lastRate']}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <Typography>
                                Visitors Number:
                            </Typography>
                            <Typography>
                                {data['visitors']}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <Typography>
                                Last Visit:
                            </Typography>
                            <Typography>
                                {data['lastVisit']}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>setOpen(false)} >
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
)
}
    return (
        <Dialog open={open} 
         sx={{
           '.MuiDialog-container' :{
            '.MuiPaper-root' :{
                minWidth:'200px',
                minHeight:'200px'
            }
           }
         }}
        >
            <DialogTitle>
                <Grid container>
                    <Grid item xs={6}>
                       Rate Me 
                    </Grid>
                    <Grid item xs={6}
                    onClick={()=>setOpen(false)}
                     className={styles.closeBtn}>
                        X
                    </Grid>
                </Grid>
              
            </DialogTitle>
            
        
                <DialogContent>
                    Please , give me your opinion , it will be a big help !
                </DialogContent>
                <DialogActions
                sx={{
                    justifyContent:'space-around'
                }}>
                   {loading?
            <CircularProgress 
             size={40}
             
             />
            :<>
                        <Button onClick={()=>handleClick('lovedIt')} 
                        className={styles.loveBtn}
                        sx={{
                            
                            display:'flex',
                            flexDirection:'column'
                    
                    }
                    }>
                            <Typography>

                            Like It
                            </Typography>
                        <ThumbUp />
                        
                        </Button>
                        <Button onClick={()=>handleClick('notBad')} 
                        className={styles.notBadBtn}
                        sx={{
                            
                                display:'flex',
                                flexDirection:'column'
                        
                        }
                        }>
                            <Typography>
                            Not Bad
                            </Typography>
                        <AddCircle />
                        
                        </Button>
                        <Button onClick={()=>handleClick('improveIt')} 
                        className={styles.improveBtn}
                        sx={{
                            
                            display:'flex',
                            flexDirection:'column'
                    
                    }
                    }>
                            <Typography>
                            Improve It
                            </Typography>
                        <Update />
                        
                        </Button>
            </>}
                </DialogActions>
            
        </Dialog>
    )
}


export default Caution;