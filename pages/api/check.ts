import RateObj from '../../models/rates'
import connectToDB from '../../utils/connect'
import {NextApiRequest,NextApiResponse} from 'next'
const bycrpt = require('bcryptjs')
const path= require('path')
const filePath = path.join(process.cwd(), 'public/data/rate.json');




export default async function handler (req:NextApiRequest,res:NextApiResponse) {

    let pass='B3D-Admin-0988289227@912'
   
    if (req.body) {
  
        //  bycrpt.hash(req.body,10,function(err,hash) {
        //      if (err) {
        //          console.log(err)
        //          res.statuus(400).send(err)
        //      }
        //      else {
        //           res.status(200).json({hash})
        //      }
        //  })
        try {
            let hash = req.body
            if ((req.body as string).charAt(0)=== '"') {
                hash=JSON.parse(req.body)
            }
            
                     let result  = await bycrpt.compare(pass,hash) 
                    if (result) {
                    
                        await connectToDB()
                        
                            //   let rateData= new x({"lovedIt":0
                            //                               ,"notBad":0
                            //                               ,"improveIt":0
                            //                               ,"lastRate":""
                            //                               ,"visitors":0
                            //                               ,"lastVisit":""})
                            //     rateData.save()
                            //              .then(res=>console.log(res))
                            //              .catch(err=>console.log(err))
                      
                                
                     
                     
                         let data = await  RateObj.find({})
                      
                       res.send({admin:1,data:data[0]})
                    }
                             
          
        }
        catch(err) {
           res.status(500).send('error')
        }
     }


}