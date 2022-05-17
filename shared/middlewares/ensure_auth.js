import jwt from 'jwt-simple';
import _ from "../../config/global.js";
import moment from "moment";
import User from "../models/user.js";


let middleware = {
    user: async (req, res, next) => {
        try{
            if (!req.headers.authorization) return res.status(403).send({message: 'NO_AUTHORIZATION', code: 101.1})
            let token = req.headers.authorization.split(" ")[1];
            let authData = jwt.decode(token, _.TOKEN_SECRET);
            if (authData.exp <= moment().unix()){ return res.status(408).send({error: "EXPIRE_TOKEN", code: 101.2}); }
            let user = await User.findById(authData.sub);
            if(!user) return res.status(403).send({message: 'INVALID_USER', code: 101.3});
            if(user.active == 0) return res.status(403).send({message: 'INVALID_USER', code: 101.4});
            req.id = authData.id;
            req.user = user;
            next();
        } catch (e) {
            console.log("ERR 101.500",e);
            return res.status(401).send({error: e.message, message: "TOKEN_INVALID", code: 101.500});
        }


    },
    admin : async (req, res, next) => {
        try {
            if(req.headers.authorization != _.PASS_ADMIN)  return res.status(403).send({message: 'NO_AUTHORIZATION', code: 101.1});
            next();
        } catch (e) {
            console.log("ERR 101.500",e);
            return res.status(401).send({error: e.message, message: "AUTH INVALID", code: 101.500});
        }
    }
}


export default middleware;
