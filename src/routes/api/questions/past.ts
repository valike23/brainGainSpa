import { MongoUser } from "../../../external_classes/mongo/mongo";
import { connectionString } from "../../../Model/public";
import { handle_server_error } from "../../../Model/serverFunctions";

let mongoUser = new MongoUser({
    database: 'bgspan',
    url: connectionString
})
export async function get(req, res) {
    try {
        
        let id = Number(req.query.courseid);
        let year = Number(req.query.year);
        console.log('my data is true: ', typeof(id), year);
       let data = await mongoUser.getAllRecordFromCollectionWithoutSort('questions',{$and: [{courseId: id},{year}]});
       console.log('my data is true: ',data);
       res.json(data);
    } catch (error) {
        handle_server_error(error);
        res.status(503).json(error);
    }
}