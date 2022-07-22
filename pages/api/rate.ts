

const fs= require('fs')

 let data =fs.readFileSync('data/rate.json','utf8')


export async function rate () {
  
   return data
    
}

export default async function handler(req,res) {

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
