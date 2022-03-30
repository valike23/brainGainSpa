import { SqlHelper } from "../external_classes/mysql/sqlhelpher";
import type { Iuser } from "./accounts";
import { dbconfig } from "./public";

let sqlHelper = new SqlHelper(dbconfig);
export interface ItoolTip {
    padding?: string;
    borderRadius?: string;
}
export interface IoptionNode {
    type?: string;
    tooltip?: ItoolTip
}
export interface IoptionLink {
    aspect?: string;
}
export interface IchartOption {
    maxSize?: number;
    minSize?: number;
    link?: IoptionLink;
    node?: IoptionNode
}
export interface Istyle {
    "background-fit"?: string,
    backgroundImage?: string;
    color?: string;
    size?: 30;
}
export interface IchartData {
    id?: string;
    parent?: string;
    type?: string;
    name?: string;
    style?: Istyle;
    value?: number;
}
export interface IchartConfig {
    type?: string;
    backgroundColor?: string;
    options?: IchartOption;
    series?: any
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

