import type { Iuser } from "../../../Model/accounts";
import {hash, compare} from 'bcrypt';
import { cryptoSecret, dbconfig } from "../../../Model/public";
import {SqlHelper} from '../../../../external_classes/mysql/sqlhelpher';

const sqlHelper = new SqlHelper(dbconfig);
const Cryptr = require('cryptr');
const saltRounds = 10;
const crypto = new Cryptr(cryptoSecret);
let handle_respond = async (result, password) => {
    let myresult = result[0];
    let data: any = await compare(password, myresult.password);
    console.log('my data: ', data);
    return data;

}
export async function post (req, res) {
    try {
        console.log(req.fields.body);
        let data: Iuser = JSON.parse(req.fields.body);
        console.log(data);

        data.user_name = data.email;
       // data.password = await hash(data.password, saltRounds);
       // console.log('password', data);

        data.token = crypto.encrypt(JSON.stringify({ email: data.email, time: Date.now() }))

        let result: any = await sqlHelper.insertQuery(data, 'users');
        console.log(result);
        res.json(result);


    } catch (error) {
        console.log('error: ',error);
        if (error.code == 'ER_DUP_ENTRY') {
            res.statusCode = 200;
            res.json(error);
        } else if (error.statusCode) {
            res.statusCode = 200;
            res.json(error);
        }
        else {
            res.status(503).json(error);
        }
    }
}


export async function put(req, res) {
    try {
        console.log(req.fields.body);
        let data: any = JSON.parse(req.fields.body);
        let adminResult: any = await sqlHelper.get('users', ['password', 'first_name', 'last_name', 'id', 'user_name', 'gender', 'is_active', 'confirm_email', 'profile_pics','type'], `where email='${data.email}'`);
       
      
        if(adminResult.length > 0) {
            let test = await handle_respond(adminResult, data.password);
            console.log(test, 'type of test is: ', typeof(test));
            if (test) {
                
                //set session
                let user = adminResult[0];
                delete (user.password);
                req.session.user = adminResult[0];

                //return response
                res.json({message: 'success', data: req.session});
            }
            else  {
                res.json({message: 'username or password incorrect', data: {}})
            }
        }
        else {
            res.json({message: 'username or password incorrect', data: {}})
        }
        

    } catch (error) {
        console.log(error);
        if (error.statusCode) {
            res.json(error);
        }
        else {
            res.status(503).json(error);
        }
    }
}