import type { Iquestion, IquestionParameter } from "../../../Model/question";
import  { MongoUser } from "../../../../external_classes/mongo/mongo";
import { connectionString } from "../../../Model/public";
let mongoUser = new MongoUser({url: connectionString, database: 'bgspa'});

export async function post(req, res) {
   try {
       //console.log(req.fields.body);
    let question: Iquestion = JSON.parse(req.fields.body);
    try {
       let result = await mongoUser.addRecordToCollection('questions', question);
       res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({err: error, message: 'Mongodb error'});
    }
   } catch (error) {
       console.log(error);
       res.status(400).json({err: error, message: 'input incorrect'})
   }
}
 
export async function get(req, res) {
    // return questions based on some query parameters
   try {
    let questionQuery: IquestionParameter;
    questionQuery = {...req.query};
    let amount = questionQuery.amount;
    delete(questionQuery.amount);
   try {
    let result = await mongoUser.getAllRecordFromCollection('questions', questionQuery);
    res.json(result);
   } catch (error) {
    console.log(error);
    res.status(500).json({err: error, message: 'Mongodb error'});
   }
   } catch (error) {
    console.log(error);
    res.status(400).json({err: error, message: 'input incorrect'})
   }
}