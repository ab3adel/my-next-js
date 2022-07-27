import {NextApiRequest,NextApiResponse} from 'next'
const fs= require('fs')
const path= require('path')
const filePath = path.join(process.cwd(), 'data/rate.json');



export  default async function handler (req:NextApiRequest,res:NextApiResponse) {
  
   
    if (req.body==='"visitor"') {
        fs.readFile(filePath,'utf8',function(err,data){
            if (err) {
          
                res.status(500).json({err})
             
                
            }
            else {
                let date= new Date()
                let day = date.getDate();
                let month = date.getMonth() + 1;
                let year = date.getFullYear();
                let theData= JSON.parse(data)
                theData['visitors']=theData['visitors'] +1
                theData['lastVisit']=`${day}-${month}-${year}`
 
                fs.writeFile('data/rate.json',JSON.stringify(theData),function(err){
                   if (err) {
                   res.status(500).json({err})
                    return
                   }
                })
             
                 res.status(200).send({ok:'ok'})
              
            }
        })
      
    }
 
}
