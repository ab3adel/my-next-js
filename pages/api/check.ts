const bycrpt = require('bcryptjs')

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
       
          bycrpt.compare(pass,req.body,function(err,result) {
           
              if (err) {
                  console.log(err)
                  return
              }
            
              if (result) {

                  res.status(201).json({"admin":1})
                  return
                  
              }
              if (!result){
                res.status(201).json({"admin":0})
              }

          })
     }


}