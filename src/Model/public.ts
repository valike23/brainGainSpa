
import type { ConnectionConfig } from 'mysql';

let saleo = `mongodb+srv://saleo:bumblebee2021@cluster0.422ut.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
let localMongo = `mongodb://localhost:27017`;
export let connectionString: string = saleo;
let db4free: ConnectionConfig = {
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
let local: ConnectionConfig = {
    host: 'localhost',
    password: '',
    user: 'root',
    database: 'bgspanDB'
}
export const TIMER = {
    registration: 3 //days
} 

 export let dbconfig: ConnectionConfig = db4free;
export let flutterwaveKey = 'FLWPUBK_TEST-e9a847ad0922af67cc27cbba45940117-X';
 export let cryptoSecret = 'bgspa';
 export let serverURL = 'https://braingainspa.herokuapp.com';
 export let logo = '/brain.png'
