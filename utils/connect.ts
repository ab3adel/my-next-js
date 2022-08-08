
import mongoose, {Mongoose} from 'mongoose'

async function connectToDB () {
   mongoose.connect('mongodb+srv://MohammadIsmaeel:0988289227%40912@cluster0.31pbuck.mongodb.net/?retryWrites=true&w=majority')

  .catch(err=>console.log(err))
}

 
export default connectToDB;