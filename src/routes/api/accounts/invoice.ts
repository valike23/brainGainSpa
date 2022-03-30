import { MongoUser } from "../../../external_classes/mongo/mongo";
import { SqlHelper } from "../../../external_classes/mysql/sqlhelpher";
import type { Iinvoices } from "../../../Model/accounts";
import { connectionString, dbconfig } from "../../../Model/public";

let mysql = new SqlHelper(dbconfig);
let mongo = new MongoUser({url: connectionString, database: 'bgspan'})

export async function get(req, res) {
    try {
        let user_id = req.session.user.id;
        console.log(user_id);
    let red = await  mysql.get('invoices',[], `where user_id = ${user_id} and status != 'completed'`);
    console.log(red);
    res.json(red);
        
    } catch (error) {
        console.log(error);
        res.status(503).send('failed')
    }
}


export async function post(req, res){
    let invoices: Iinvoices = JSON.parse(req.feilds.body);
    try {
     let resd= await   mysql.insertQuery(invoices, 'invoices');
     res.json(resd);
        
    } catch (error) {
        
    }
}