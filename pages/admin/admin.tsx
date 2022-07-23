import 
{
    Dialog,
    DialogContent,
    DialogActions,
    Button,
    Grid,
    TextField,
    DialogTitle,
    CircularProgress
}
from '@mui/material'
import { ChangeEvent } from 'react'

interface iProps {
                 open:boolean
                ,setOpen:Function
                ,logIn:Function
            ,auth:any
            ,done:boolean
            ,loading:boolean
            ,handleInput:(e:ChangeEvent)=>void
        }
 const AdminForm = ({open,setOpen,logIn
                     ,auth,handleInput,loading
                    ,done}:iProps) =>{


    return (

        <Dialog open={open} onClose={()=>setOpen(false)}
        >
            <DialogTitle>
                Log In
            </DialogTitle>
            <DialogContent>
                <Grid container
                rowGap={2}>
                    <Grid item xs={12}
                    justifyContent="center"
                    display={'flex'}>
                        <TextField 
                        placeholder='User Name'
                          value={auth && auth.user} 
                          onChange={handleInput}
                          type="text"
                          name="user"
                          />
                    </Grid>
                    <Grid item xs={12}
                    justifyContent="center"
                    display={'flex'}
                    >
                        <TextField 
                        placeholder='Password '
                          value={auth && auth.password} 
                          onChange={handleInput}
                          type="password"
                          name="password"
                          />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions
             sx={{
                display:'flex',
                justifyContent:'space-evenly'
             }}>
                <Button onClick={()=>logIn()} 
                disabled={loading}
                >
                    {
                        loading?
                        <CircularProgress size={40}/>
                        :
                       <> log in</>
                    }
              
                </Button>
                <Button onClick={()=>setOpen(false)} >
                    cancel
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default AdminForm;