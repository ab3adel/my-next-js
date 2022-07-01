import { Variants ,motion,useAnimation} from "framer-motion"
import { useEffect } from "react"
import styles from '../../styles/portfolio.module.scss'


interface iProps {name:string,show:boolean}

const rootGrow:Variants= {
    
    languageNameInitial:{
        opacity:0
    },
    languageName:{
        opacity:[0,1],
        transition:{
            ease:'backInOut',
            duration:2
        }
    }
}
export const LanguageName=({name,show}:iProps)=>{
    
        
    
    return (
                                <motion.p className={styles.languageName}
                                            variants={rootGrow}
                                            animate={show? 'languageName':''}
                                            initial="languageNameInitial">
                                                {name}
                                </motion.p>       
    )
}