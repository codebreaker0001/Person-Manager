import mongoose from "mongoose";



const PersonSchema = new mongoose.Schema({
    name:{type: String, required:true},
    age:{type:Number},
    gender:{type:String,required:true},
    mobileNumber: { type: String}
})


const Person = mongoose.model('Person', PersonSchema);

export default Person;