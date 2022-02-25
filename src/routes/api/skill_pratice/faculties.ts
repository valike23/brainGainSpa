import { MongoUser } from "../../../../external_classes/mongo/mongo";
import { connectionString } from "../../../Model/public";

let mongo = new MongoUser({url: connectionString, database: 'bgspan'})
export async function get(req, res){
    try {
        console.log('current session: ', req.session);
        let facultyId = req.session.faculty.grade_id;
       let data = await mongo.getAllRecordFromCollection('resources',{resourceTypeName: 'Skill Practice',faculties:{facultyId}},{faculties: 1});
       console.log(data);
       res.json(data);
    } catch (error) {
        console.log(error);
        res.status(503).json(error);
    }
}