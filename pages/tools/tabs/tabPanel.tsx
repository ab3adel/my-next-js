import { ReactElement } from "react"
import {Grid} from '@mui/material'
import styles from './tabpanel.module.scss'

interface iProps {value:number,index:number,children:ReactElement}
 const TabPanel =({value,index,children}:iProps)=>{



    return (
        <Grid item container xs={12} 
        className={styles.tabPanel}
        style={{height:value === index ? "100%":'0%'}}
       >
            {
                value=== index && (
                    children
                )
            }

        </Grid>
    )
}
export default TabPanel;