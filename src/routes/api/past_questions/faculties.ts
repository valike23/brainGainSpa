import { MongoUser } from "../../../../external_classes/mongo/mongo";
import { connectionString } from "../../../Model/public";
import type { Iresource } from "../../../Model/question";

let mongo = new MongoUser({url: connectionString, database: 'bgspan'})
export async function get(req, res){
    try {
        let {id, type} = req.query;
        console.log('my id:',id);
       if(id != undefined){
        let data: Iresource = await mongo.getFirstMatch('resources',{resourceTypeName: "Past Questions"});
        data.faculties.forEach((e)=>{
            e.courses.forEach((course)=>{
                if(course.courseId == id){
                    console.log(course);
                    res.json(course);
                    return;
                }
            })
        })
       
       }
       else {
        console.log('current session: ', req.session);
        let data: Iresource = await mongo.getAllRecordFromCollection('resources',{resourceTypeName: "Past Questions"});
        console.log('pre stage combat power: ',data);
        res.json(data[0]);
       }
    } catch (error) {
        console.log(error);
        res.status(503).json(error);
    }
}