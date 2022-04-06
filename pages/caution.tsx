import 
{
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button
}
from '@material-ui/core'
import {useContext} from 'react'
import {animateContext} from './_app'
interface iProps {open,setOpen}

export const Caution =({open,setOpen}:iProps) =>{
    const {setAnimate} =useContext(animateContext)
  const   handleAnimation =()=>{
      setAnimate((pre:any)=>({...pre,start:true}))
      setOpen(false)
    }
    const handleClose =(_,reason)=>{
        if (reason === 'escapeKeDown') return
        setOpen(false)
    }
    return (
        <Dialog open={open} 
      
        >
            <DialogTitle>
                Welcome ! 
            </DialogTitle>
            <DialogContent>
            I appreciate your interest on me, I just want to tell you that
                there is more splendid projects I have made since this website was online ,
                in addition to update it with more fun stuff , I have to add them into
                my portfolio, but My schedule is full ,
                thanks for your understanding 
                
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>handleAnimation()} >
                    I understand that
                </Button>
                <Button onClick={()=>handleAnimation()} >
                    Shame on you
                </Button>
            </DialogActions>
        </Dialog>
    )
}