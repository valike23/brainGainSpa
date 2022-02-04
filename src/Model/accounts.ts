import ShortCrypt from 'short-crypt';
import { SqlHelper } from '../../external_classes/mysql/sqlhelpher';
import { cryptoSecret, dbconfig } from './public';
const sqlhelpher = new SqlHelper(dbconfig);
let sc = new ShortCrypt(cryptoSecret);
export interface Iuser {
    id?: number;
    parent_code?: string;
    referral_code?: string;
    first_name?: string;
    last_name?: string;
    middle_name?: string;
    user_name?: string;
    email?: string;
    phone?: string;
    gender?: number | string;
    password?: string;
    profile_pics?: string;
    date_of_birth?: Date;
    created_date?: Date;
    updated_date?: Date;
    token?: string;
    is_active?: boolean;
    confirm_number?: boolean;
    confirm_email?: boolean;
    type?: string;
}
export interface Istudent {

}

export let confirm_codes = async (type, code) => {
    try {
    if(type == 'student'){
       
          let dataArray =  sc.decryptQRCodeAlphanumeric(code);
          if(dataArray){
           let idString = String.fromCharCode(...dataArray);
           try {
             let id =  Number.parseInt(idString);
           let data = await  sqlhelpher.get('parent',['id'],`where user_id = ${id}`) as any;
             if(data != undefined && data.length > 0){
                return data[0].id;
             }
             else{
                 throw(false);
             }
           } catch (error) {
               console.log(error);
               throw(false);
           }
          }
          else{
            throw(false);
          }
        } 
        else {
            let dataArray =  sc.decryptURLComponent(code);
            if(dataArray){
             let idString = String.fromCharCode(...dataArray);
             try {
               let id =  Number.parseInt(idString);
             let data = await  sqlhelpher.get('parent',['id'],`where user_id = ${id}`) as any;
               if(data.length){
                  return data[0].id;
               }
               else{
                   throw(false);
               }
             } catch (error) {
                 console.log(error);
                 throw(false);
             }
            }
            else{
              throw(false);
            }
        }
    }
    catch (error) {
            return error;
    }
}