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
    studentQuiz.studentId = req.session.user.id;
    studentQuiz.topicId = req.query.topicid;
    console.log('student quiz: ', studentQuiz);

    try {
        //might have to adjust this query to an $and query 
      let data = await  mongoUser.getAllRecordFromCollection('studentQuiz',studentQuiz);
      console.log('initial result', data);
      if(data){
        let myData = await mongoUser.getAllRecordFromCollection('questions',{topicId: Number(studentQuiz.topicId)},{},data.length + 1, 20);
        console.log('final result: ',myData)
      res.json(myData);
      }
    } catch (error) {
        handle_server_error(error);
        res.status(503).json(error);
    }
}