import {NextApiRequest,NextApiResponse} from 'next'
const fs= require('fs')
const path= require('path')
const filePath = path.join(process.cwd(), 'public/data/rate.json');

let data = fs.readFileSync(filePath,'utf8')


export  default async function handler (req:NextApiRequest,res:NextApiResponse) {
  
   
    if (req.body==='"visitor"') {
           
          
            let date= new Date()
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let theData= JSON.parse(data)
            theData['visitors']=theData['visitors'] +1
            theData['lastVisit']=`${day}-${month}-${year}`

            fs.writeFile(filePath,JSON.stringify(theData),function(err){
                 if (err) {
                res.status(500).json({err})
                return
               
                }
                else {
                    res.status(200).send({ok:'ok'})
                }
            })
            
            
              
            
       
      
    }
 
}
