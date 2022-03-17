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
export interface Igrade {
  id?: number;
  grade_name?: string;
  description?: string;
}
export interface Istudent {
  user_id?: number;
  parent_id?: number;
  academic_class_id?: number;
  session_id?: number;
  grade_id?: number;
  student_info?:Iuser;
  parent_info?: Iuser;
  grade?:Igrade;
}

export let confirm_codes = async (type: string, code: string) => {
  console.log(typeof(code), code);
    try {
    if(type == 'student'){
       
          let dataArray =  sc.decryptQRCodeAlphanumeric(code);
          if(dataArray){
           let idString = String.fromCharCode(...dataArray);
           try {
             let id =  Number.parseInt(idString);
           let data = await  sqlhelpher.get('parents',['user_id'],`where user_id = ${id}`) as any;
             if(data != undefined && data.length > 0){
                return data[0].user_id;
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
             let data = await  sqlhelpher.get('parents',['user_id'],`where user_id = ${id}`) as any;
               if(data.length){
                  return data[0].user_id;
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

export let create_code =  (type: string, code: string): string=>{
  if(type == 'student'){
    return sc.encryptToQRCodeAlphanumeric(code);
  }
  else{
    return sc.encryptToURLComponent(code);
  }
  
}
export interface Isubscription{
  plan?: any;
  user_id?: number;
}
export interface Iinvoices {
    _id?: any;
    payment_type?: string;
    status?: string;
    user_id?: number;
    logo?: string;
    description?: string;
    amount?: number;
    subscription?: Isubscription
}
interface IflutterCustomer {
    name?: string,
    email?: string,
    phone_number?: string
 
}
export interface IflutterResponse{
  amount?: number;
  currency?: string;
  customer?: IflutterCustomer;
  flw_ref?: string;
  status?: string;
  tx_ref?: string;
  transaction_id?: number;
}

export interface Ipayment {
  id?: number;

}