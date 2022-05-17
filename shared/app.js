import express from 'express';
import _ from '../config/global.js';
import cors from 'cors';
import router_resources from '../routes/resources.js'
import router_public from '../routes/public.js';
import router_root from '../routes/root.js';

let app = express();
app.use(cors());

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) //

console.log(_.KUBE_PREFIX + "/public", "prefix_public");

app.use(_.KUBE_PREFIX + "/", router_root);
app.use(_.KUBE_PREFIX + "/public", router_public);
app.use(_.KUBE_PREFIX + "/resources", router_resources);


export default  app;
