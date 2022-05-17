import  mongoose  from 'mongoose';
import _ from '../config/global.js'


let _dbConnect =  mongoose.connect(`mongodb://${ _.USER_MONGO }:${ _.PASSWORD_MONGO }@${ _.SERVER_MONGO }:${ _.PORT_MONGO }/${ _.DATABASE_NAME_MONGO }?authSource=admin`, { useUnifiedTopology: true ,useNewUrlParser: true })

export default _dbConnect;
