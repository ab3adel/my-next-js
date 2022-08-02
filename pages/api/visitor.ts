import {NextApiRequest,NextApiResponse} from 'next'

import connectToDB from '../../utils/connect'
import RateObj from '../../models/rates'

export  default async function handler (req:NextApiRequest,res:NextApiResponse) {
  
   
    if (req.body==='"visitor"') {
           try {
          await connectToDB()
            let date= new Date()
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
           

            let resu= await RateObj.updateOne({},{$inc:{"visitors":1},"lastVisit":`${day}-${month}-${year}`})
            
            
              
            res.send({ok:'ok'})
       }
       catch (err){
        res.status(400).send({error:err})
       }
      
    }
 
}
