import { MongoUser } from "../../../../external_classes/mongo/mongo";
import { connectionString } from "../../../Model/public";
import type { IstudentQuiz } from "../../../Model/question";
import { handle_server_error } from "../../../Model/serverFunctions";

let mongoUser = new MongoUser({
    database: 'bgspan',
    url: connectionString
})
export async function get(req, res) {
    let studentQuiz : IstudentQuiz ={};
    studentQuiz.studentId = req.query.studenntid;
    studentQuiz.topicId = req.query.topicId;
    try {
        //might have to adjust this query to an $and query 
      let data = await  mongoUser.getAllRecordFromCollection('studentQuiz',studentQuiz);
      if(data){
        let myData = await mongoUser.getAllRecordFromCollection('questions',{topicId: studentQuiz.topicId},{},data.length + 1, 20);

      res.json(myData);
      }
    } catch (error) {
        handle_server_error(error);
        res.status(503).json(error);
    }
}