import {NextApiRequest,NextApiResponse} from 'next'
const bycrpt = require('bcryptjs')
const fs= require('fs')
const path= require('path')
const filePath = path.join(process.cwd(), 'data/rate.json');
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
            
                bycrpt.compare(pass,hash,function(err,result) {
                    console.log(result,req.body)
                    if (err) {
                        res.status(500).send('error')
                    
                    }
                  
                    if (result) {
                  
                      
                             fs.readFile(filePath,'utf8',function(err,data){
                              if (err){
                                  res.status(500).send("error")
                              }
                              else {
                                  res.send({"admin":1,data})
                              }
                          })
                          
                        
                    }
                    if (!result){
                      res.send({"admin":0})
                    }
      
                })
        }
        catch(err) {
           res.status(500).send('error')
        }
     }


}