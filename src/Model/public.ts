
import type { ConnectionConfig } from 'mysql';

const saleo = `mongodb+srv://saleo:bumblebee2021@cluster0.422ut.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const localMongo = `mongodb://localhost:27017`;
export const connectionString: string = saleo;
const db4free: ConnectionConfig = {
    host: 'db4free.net',
    password: 'bgspandb',
    user: 'bgspandb',
    database: 'bgspandb'

}
export interface IrequestQuery {
    name: string;
    value: string;
}
export interface Irequest {
    url: string;
    body: string;
    createdDate: Date | string;
    sentTime?: Date| string;
    method?: string;
    isRead?: boolean ;
}
const local: ConnectionConfig = {
    host: 'localhost',
    password: '',
    user: 'root',
    database: 'bgspandb'
}
export const TIMER = {
    registration: 3 //days
} 

 export const dbconfig: ConnectionConfig = local;
export const flutterwaveKey = 'FLWPUBK_TEST-e9a847ad0922af67cc27cbba45940117-X';
export const flutterwaveSecret = 'FLWSECK_TEST-88d353cb2397f8a8e336c31e5703938b-X';
 export const cryptoSecret = 'bgspa';
 export const serverURL = 'https://braingainspa.herokuapp.com';
 export const logo = '/brain.png';
 export const paystackSecret = `sk_test_3b81fb39b720a4ca4a8af1ba925a679eb267e8aa`;
 export const paystackPublicKey = `pk_test_f032faca909db4bb95bdf74fceb248e793ddc231`;
