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
        data.password = await hash(data.password, saltRounds);
        console.log('password', data);

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