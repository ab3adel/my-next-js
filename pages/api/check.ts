const bycrpt = require('bcryptjs')
const fs= require('fs')
const path= require('path')
const filePath = path.join(process.cwd(), 'data/rate.json');
export default async function handler (req,res) {
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
      let hash = JSON.parse(req.body)
          bycrpt.compare(pass,hash,function(err,result) {
         
              if (err) {
                  console.log(err)
                  return
              }
            
              if (result) {
           
                
                       fs.readFile(filePath,'utf8',function(err,data){
                        if (err){
                            res.status(500).json({err})
                        }
                        else {
                            res.status(201).json({"admin":1,data})
                        }
                    })
                    
                  
              }
              if (!result){
                res.status(201).json({"admin":0})
              }

          })
     }


}