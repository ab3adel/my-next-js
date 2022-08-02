
import connectToDB from '../../utils/connect'
import RateObj from '../../models/rates'
 
export async function rate () {
  
   
    
}

export default async function handler(req,res) {
    let str=req.body
    if (req.body && req.body.charAt(0)==='"'){
        str=JSON.parse(req.body)
    }
    try {

                await connectToDB()
                let date= new Date()
            
                let day = date.getDate();
                let month = date.getMonth() + 1;
                let year = date.getFullYear();
                let res=null
                if (str=== 'lovedIt') {
                  
                     res= await RateObj.updateOne({},{$inc:{"lovedIt":1},"lastRate":`${day}-${month}-${year}`})
                    
                }
                if (str=== 'notBad') {
                  
                     res= await RateObj.updateOne({},{$inc:{"notBad":1},"lastRate":`${day}-${month}-${year}`})
        
                }
                if (str=== 'improveIt') {
                     res= await RateObj.updateOne({},{$inc:{"improveIt":1},"lastRate":`${day}-${month}-${year}`})
        
                }
               
              
               res.send({name:'done'})
          
           
     
            
    }
    catch(err) {
      
        res.status(500).send("error")
    }
   

    
}
