

const fs= require('fs')
const path= require('path')
const filePath = path.join(process.cwd(), 'data/rate.json');
 


export async function rate () {
  
   
    
}

export default async function handler(req,res) {
    try {
        let data = await fs.readFile(filePath,'utf8')
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
        fs.writeFileSync('data/rate.json',JSON.stringify(theData))
        res.status(200).json({name:"done"})
    }
    catch(err) {
        res.status(500).json({err})
    }
   

    
}
