import { MongoUser } from "../../../external_classes/mongo/mongo";
import { connectionString } from "../../../Model/public";

const mongoUser = new MongoUser({url: connectionString, database: 'bgspan'});

export function get(req, res){
    let query = req.query;
   
}