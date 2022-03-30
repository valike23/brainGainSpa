
import type {IinvoiceVerification, Ipayment, Iuser} from '../Model/accounts'
import paystack from 'paystack';
import Flutterwave from 'flutterwave-node-v3';
import { dbconfig, paystackSecret, flutterwaveKey, flutterwaveSecret } from '../Model/public';
import { SqlHelper } from './mysql/sqlhelpher';
import {handle_server_error} from '../Model/serverFunctions'
const PAYSTACK = paystack(paystackSecret);
const FLW = Flutterwave(flutterwaveKey, flutterwaveSecret);
const mysql = new SqlHelper(dbconfig);
export const confirm_paystack_payment =async (payment: Ipayment, user:Iuser)=>{
    try {
        let data = await   PAYSTACK.transaction.verify(payment.payment_ref);
        if(data.status){
            if(data.message == 'Verification successful'){
               // payment.amount_paid = data.data.amount;
                payment.payment_date = new Date(data.data.paid_at) ;
                payment.channel = data.data.channel;
                payment.is_verified = 1;
                let resd = await mysql.updateQuery('invoices',{paid: 1, status:"completed"}, ` id=${payment.invoice_id}`);
                let invoice: IinvoiceVerification ={
                    invoice_id: payment.invoice_id,
                    email: user.email

                }
                if(resd){
                    let res = await mysql.insertQuery(invoice,'invoice_verification');
                  
                        return {
                            payment,
                            status: true,
                            res
                        }
                    
                }
                

                

            }
            else{
                return {
                    payment,
                    status: false
                }
            }
        }
        else{
            return {
                payment,
                status: false
            }
        }
        
    } catch (error) {
        handle_server_error(error);
        return {
            payment,
            status: false
        }
    }
}

export const confirm_flutter_payments = async (pay: Ipayment, user: Iuser)=>{
    try {
      let data = await FLW.Transaction.verify({id: pay.payment_ref});
      if(data.data.status == "successful"){
          if(data.data.amount == pay.amount_paid){
            pay.amount_paid = data.data.amount;
            pay.payment_date = new Date(data.data.created_at);
            pay.channel = data.data.payment_type;
            pay.is_verified = 1;
             let resd = await mysql.updateQuery('invoices',{paid: 1, status:"completed"}, ` id=${pay.invoice_id}`);
            let invoice: IinvoiceVerification ={
                invoice_id: pay.invoice_id,
                email: user.email
            }
            if(resd){
                let res = await mysql.insertQuery(invoice,'invoice_verification');
              
                    return {
                        payment: pay,
                        status: true,
                        res
                    }
                
            }
          }
          else{
            return {
                payment: pay,
                status: false
            }
          }
      }
      else{
        return {
            payment: pay,
            status: false
        }
      }
    } catch (error) {
        
    }
}