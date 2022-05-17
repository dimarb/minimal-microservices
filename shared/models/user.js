import  mongoose from 'mongoose';

let Schema = mongoose.Schema;

let UserSchema = Schema({
    email : {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true
    },
    active : { type: Number, default: 0 },
    profile :{
        firstName : String,
        lastName : String,
        urlPhoto : String,
        phone : String
    },
    codeRole: { type: Number, default: 0 },
    organization :  { type: String,  required: true },
    password : { type:String }
},{ timestamps: {  } });

export default mongoose.model('User', UserSchema);
