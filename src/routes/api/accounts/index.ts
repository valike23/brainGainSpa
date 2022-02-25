import { confirm_codes, create_code, Iuser } from "../../../Model/accounts";
import {hash, compare} from 'bcrypt';
import { cryptoSecret, dbconfig } from "../../../Model/public";
import {SqlHelper} from '../../../../external_classes/mysql/sqlhelpher';

const sqlHelper = new SqlHelper(dbconfig);
const Cryptr = require('cryptr');
const saltRounds = 10;
const crypto = new Cryptr(cryptoSecret);
let handle_respond = async (result, password) => {
    let myresult = result[0];
    console.log(password, myresult);
    let data: any = await compare(password, myresult.password);
    console.log('my data: ', data);
    return data;

}
export async function post (req, res) {
    try {
        console.log(req.fields.body);
        let data: Iuser = JSON.parse(req.fields.body);
        console.log(data);
        let parent_code;
       // data.user_name = data.email;
       // data.password = await hash(data.password, saltRounds);
       // console.log('password', data);

        data.token = crypto.encrypt(JSON.stringify({ email: data.email, time: Date.now(), type: "register" }))
if(data.type == 'student'){
    parent_code = data.parent_code;
    delete(data.parent_code);
};
console.log('all my data: ',data);

        let result: any = await sqlHelper.insertQuery(data, 'users');
        console.log(result, typeof(result), result.insertId, data.referral_code);
        if(result.insertId){
          
           try {
               if(data.type == 'student'){
                   data.parent_code = parent_code;
               let resultCode = await confirm_codes(data.type, data.parent_code);
               if(resultCode){
                   let myData = {user_id: result.insertId, parent_id: resultCode};
                    let data = await sqlHelper.insertQuery(myData, 'students');
                    res.json({message: 'success', data});
               }
               else{
                res.json(result);
               }
               }
               else {
                   if(!data.referral_code) {
                       let id: number = result.insertId;

                    let myData = {
                        user_id: result.insertId, 
                        parent_code: create_code('student', id.toString()), 
                        referral_code: create_code('parent', id.toString())
                    };
                     
                    let data = await sqlHelper.insertQuery(myData, 'parents');
                    return res.json({message: 'success', data});
                   }
                let resultCode = await confirm_codes(data.type, data.referral_code);
                if(resultCode){
                    let id: number = result.insertId;
                    let myData = {user_id: result.insertId, top_level: resultCode,
                        parent_code: create_code('student', id.toString()), 
                        referral_code: create_code('parent', id.toString())}
                     let data = await sqlHelper.insertQuery(myData, 'parents');
                     res.json({message: 'success', data});
                }
                else{
                    let myData = {user_id: result.insertId};
                    let data = await sqlHelper.insertQuery(myData, 'parents');
                    res.json({message: 'success', data});
                
                }
                }
           } catch (error) {
               console.log(error);
               res.json({message:'error', data: error})
           }
        }
        else{
            res.json({message: 'success'});
        }
        


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
                let students = await sqlHelper.get(`students`,[],`where user_id =${adminResult[0].id}`);
                if(students){
                    req.session.faculty = students[0];
                }
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

export function get(req, res){
    if(req.session.user){
        res.json(req.session.user);
    }
    else{
        res.json({})
    }
}

