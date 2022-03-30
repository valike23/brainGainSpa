import { SqlHelper } from "../../../external_classes/mysql/sqlhelpher";
import { dbconfig } from "../../../Model/public";

let sqlHelper = new SqlHelper(dbconfig);
export async function get (req, res){
    try {
        let grades = await sqlHelper.get('grade',[]);
        res.json(grades);
    } catch (error) {
        res.status(503).json(error);
    }
}

export async function put(req, res){
    try {
        let student_id = req.query.id;
        let studentDetails =  await sqlHelper.get(`students`,[],`where user_id=${student_id}`);
        res.json(studentDetails);
    } catch (error) {
        res.status(503).json(error);
    }
}

export async function patch(req, res){
    try {
        let student_id = req.query.id;
        let grade_id = req.query.grade_id;
        let result = await sqlHelper.updateQuery('students',{grade_id},` user_id = ${student_id}`);
        res.json(result);
    } catch (error) {
        
        res.status(503).json(error);
    }
}