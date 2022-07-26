

const fs= require('fs')
const path= require('path')
const filePath = path.join(process.cwd(), 'data/rate.json');
 
export async function rate () {
  
   
    
}

export default async function handler(req,res) {
    try {
         fs.readFile('data/rate.json','utf8',function(err,data){
            if (!err){

                let theData= JSON.parse(data)
                let date= new Date()
            
                let day = date.getDate();
                let month = date.getMonth() + 1;
                let year = date.getFullYear();
                
                if (req.body=== 'lovedIt') {
                    theData['lovedIt']=theData['lovedIt'] +1
                    
                }
                if (req.body=== 'notBad') {
                    theData['notBad']=theData['notBad'] +1
        
                }
                if (req.body=== 'improveIT') {
                    theData['improveIt']=theData['improvIt'] +1
        
                }
                theData['lastRate']=`${day}-${month}-${year}`
                fs.writeFile('data/rate.json',JSON.stringify(theData),function(err){
                    if (!err) {
                  
                        res.send({name:"done"})
        
                    }
                    else {
                        
                        res.status(500).send()
                    }
                })
            }
            else {
                res.status(500).send('error')
            }
            })
     
            
    }
    catch(err) {
      
        res.status(500).send("error")
    }
   

    
}
