import { MongoUser } from "../../../../external_classes/mongo/mongo";
import { SqlHelper } from "../../../../external_classes/mysql/sqlhelpher";
import type { Iinvoices, Ipayment } from "../../../Model/accounts";
import { connectionString, dbconfig } from "../../../Model/public";

let mysql = new SqlHelper(dbconfig);
let mongo = new MongoUser({url: connectionString, database: 'bgspan'})

export async function get(req, res) {
    try {
        let user_id = req.session.user.id;
        console.log(user_id);
    let red = await  mysql.get('payments',[], `where user_id = ${user_id}`);
    console.log(red);
    res.json(red);
        
    } catch (error) {
        console.log(error);
        res.status(503).send('failed')
    }
}


export async function post(req, res){
    console.log('fields:', req.fields);
    try {

    let payment: Ipayment = JSON.parse(req.fields.body);
     let resd= await mysql.insertQuery(payment, 'payments');
     res.json(resd);
        
    } catch (error) {
        console.log(error);
        res.status(503).send('failed');
    }
}