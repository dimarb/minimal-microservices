import app from './shared/app.js'
import  db from  './shared/db.js'
import _ from './config/global.js'



db.then(() => {
    console.log("DB CONNECTING");
    app.listen(_.PORT,() => {
        console.log("LOAD_SERVER PORT" , _.PORT);
	console.log('\x1b[42m\x1b[34m%s\x1b[0m', '*****START AUTH SERVICE*****');
    });
});

