import 
{Dialog
    ,DialogContent
 }
from '@mui/material'
import styles from '../../styles/details.module.css'
 const MyDialog=(props:{open:boolean,setOpen:Function,src:string|null})=>{
    return (
        <Dialog open={props.open} sx={{
            maxHeight:"100%",
            maxWidth:"100%",
            "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper":{
                maxWidth:"90%",
              
            }
            
        }} 
                  onClose={()=>props.setOpen(false)}>
                <DialogContent sx={{
                    maxWidht:"100%",
                    maxHeight:"100%"
                }}>
                <img id="bigImage" className={styles.bigImage}
                                src={props.src? props.src :"/static/python.png"}
                               />
                </DialogContent>
        </Dialog>
    )
}
export default  MyDialog;