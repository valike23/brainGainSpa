import { MongoUser } from "../../../external_classes/mongo/mongo";
import { SqlHelper } from "../../../external_classes/mysql/sqlhelpher";
import { confirm_flutter_payments, confirm_paystack_payment } from "../../../external_classes/payments";
import { EpaymentSource, Iinvoices, Ipayment } from "../../../Model/accounts";
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
    if(payment.source == EpaymentSource.PAYSTACK){
       let resd = await confirm_paystack_payment(payment, req.session.user);
       let data = await mysql.insertQuery(resd.payment,'payments');
       res.json(data);

    }
    else if(payment.source == EpaymentSource.FLUTTERWAVE){
        let resd = await confirm_flutter_payments(payment, req.session.user);
        let data = await mysql.insertQuery(resd.payment,'payments');
        res.json(data);
    }
     
        
    } catch (error) {
        console.log(error);
        res.status(503).send('failed');
    }
}