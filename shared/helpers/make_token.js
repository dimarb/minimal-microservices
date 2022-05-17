import jwt from 'jwt-simple';
import moment from 'moment';
import _ from '../../config/global.js';


export default {
    createToken: function (user, days) {
        let payload = {
            sub: user,
            iat: moment().unix(),
            exp: moment().add(days, "days").unix(),
        };
        return jwt.encode(payload, _.TOKEN_SECRET);
    },
}
