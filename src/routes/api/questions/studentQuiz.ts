import { MongoUser } from "../../../external_classes/mongo/mongo";
import { connectionString } from "../../../Model/public";
import type { IstudentQuiz } from "../../../Model/question";
import { handle_server_error } from "../../../Model/serverFunctions";

let mongoUser = new MongoUser({
    database: 'bgspan',
    url: connectionString
})
export async function get(req, res) {
    let studentQuiz : IstudentQuiz ={};
    studentQuiz.student_id = req.session.user.id;
    studentQuiz.topic_id = req.query.topicid;
    
    console.log('student quiz: ', studentQuiz);

    try {
        //might have to adjust this query to an $and query 
      let keys = await  mongoUser.uniqueKeys('studentQuiz',['student_id', 'topic_id']);
      console.log('the keys are locked', keys);
      let data = await  mongoUser.getFirstMatch('studentQuiz',studentQuiz);
      console.log('initial result', data);
      if(data != null){
        let myData = await mongoUser.getAllRecordFromCollection('questions',{topicId: Number(studentQuiz.topic_id)},{},data.results.length + 1, 20);

        console.log('final result: ',{questions:myData, quiz: data.results.length + 1});
      res.json({questions:myData, quiz: data.results.length + 1});
      }
      else{
        studentQuiz.results = [];
        studentQuiz.topic_name =req.query.topicname;
        let added = await mongoUser.addRecordToCollection('studentQuiz', studentQuiz);
        console.log(added);
        let myData = await mongoUser.getAllRecordFromCollection('questions',{topicId: Number(studentQuiz.topic_id)},{},1, 20);

        console.log('final result: ',{questions:myData, quiz: 1});
      res.json({questions:myData, quiz: 1,id: data._id});
      }
    } catch (error) {
        handle_server_error(error);
        res.status(503).json(error);
    }
}

export async function put(req,res) {
    let studentQuiz:IstudentQuiz ={};
    studentQuiz.student_id = req.query.student_id;
    studentQuiz.topic_id = req.query.topic_id;
    let id: string = req.query.id;
    try {
      let body = JSON.parse(req.fields.body);
     let result = mongoUser.addToArray('studentQuiz', body,id,'results');
     console.log(result);
     res.json(result);
    } catch (error) {
      handle_server_error(error);
      res.status(503).json(error);
    }
}