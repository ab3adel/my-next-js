import 
{Dialog
    ,DialogContent
 }
from '@mui/material'
import styles from '../../styles/details.module.css'
 const MyDialog=(props:any)=>{
    return (
        <Dialog open={props.open} sx={{
            maxHeight:"100%",
            maxWidth:"100%",
            "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper":{
                maxWidth:"90%",
              
            }
            
        }} 
                  onClose={()=>props.setOpen(false)}>
                <DialogContent>
                <img id="bigImage" alt="image" 
                          className={styles.bigImage}
                                src={props.src? props.src :"/static/python.png"}
                               />
                </DialogContent>
        </Dialog>
    )
}
export default  MyDialog;
