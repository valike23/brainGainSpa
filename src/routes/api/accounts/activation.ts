import { SqlHelper } from "../../../../external_classes/mysql/sqlhelpher";
import { cryptoSecret, dbconfig } from "../../../Model/public";
import { handle_server_error } from "../../../Model/serverFunctions";
const Cryptr = require('cryptr');
import { hash } from 'bcrypt';
const crypto = new Cryptr(cryptoSecret);

let sqlHelper = new SqlHelper(dbconfig);
export async function put (req, res) {
    let token = req.query.id;
   try {
    let result: any = await  sqlHelper.updateQuery('user',{status: 'active'}, `token = '${token}' and status = 'pending'`);
    console.log(result);
    if(result.affectedRows < 1) {
        res.json({
            msg: 'Email not verified'
        })
    }
    else {
        res.json({
            msg: 'Email verified successfully'
        })
    }
   
   } catch (error) {
       handle_server_error(error);
       res.status(503).json(error);
   }
}
export async function get(req, res) {
   try{
    let id = req.query.id;
    let data = crypto.decrypt(id);
    console.log(data);
    res.json(JSON.parse(data));
   }
   catch(err){
       console.log(err);
    res.json(err);
   }
}

export async function post(req, res) {
   
    let body = JSON.parse(req.fields.body);
    console.log('body again:  :',body);
    if(body.article.token == '') return res.json({message: 'invalid token'});

    try {
        
const saltRounds = 10;
let hashedPassword = await hash(body.article.password, saltRounds);
console.log(hashedPassword);
if(body.article.type == 'register'){

let result: any = await  sqlHelper.updateQuery('users',{confirm_email: 1, password: hashedPassword, token: '',
 is_active: 1, first_name: body.user.first_name, last_name: body.user.last_name}, `token = '${body.article.token}' and is_active = 0`);
console.log(result);
if(result.affectedRows > 0){

    res.json({message: 'password reset successfully', result})
}
else{

res.json({message: 'password reset failed', result})
}

}
else{
    throw('event type is not a registration');
}
    } catch (error) {
        console.error(error);
        res.json({message:'error', data: error});
        
        
    }
}