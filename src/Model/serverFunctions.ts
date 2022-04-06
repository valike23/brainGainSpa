import { SqlHelper } from "../external_classes/mysql/sqlhelpher";
import type { Iuser } from "./accounts";
import { dbconfig } from "./public";

const sqlHelper = new SqlHelper(dbconfig);
export function authorization_check(req, role: string = ''){
    if(!req.session.user) return {summary: 'you are not logged in', result: false};
    if(role) if(role != req.session.user.type) return {summary: "you are not authorized", result: false}
    return {result:true};
}

export function handle_server_error (error) {
    console.log(error);
}


export const  retrieveDownline =(userId:  number): Promise<Iuser> =>{
    return new Promise(async (resolve, reject)=>{
     try {
        let level1 = await  sqlHelper.innerjoin('parents',[{name:'users', foriegnKeyColumn: 'user_id', primaryKeyColumn:'id'}],
        ['users.first_name', 'users.last_name', 'users.profile_pics'],`WHERE parents.top_level =${userId}`);
        resolve(level1);
     } catch (error) {
         reject(error);
     }
    })
}

